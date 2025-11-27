"use client";
import Image from "next/image";
import { CameraIcon } from "lucide-react";
import { useState } from "react";
import { Button, HighlightButton } from "@/components/ui/Button";
import { TextInput } from "@/components/ui/Input";

export default function ProfileTab(props: { name: string; bio: string }) {
	const { name, bio } = props;

	const [formName, setName] = useState(name);
	const [formBio, setBio] = useState(bio);
	const [isEdit, setEdit] = useState(false);
	const [previewImage, setPreviewImage] = useState("/images/image.png");

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;

		const imageUrl = URL.createObjectURL(file);
		setPreviewImage(imageUrl);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await fetch("/api/profile/set-profile", {
			method: "POST",
			body: JSON.stringify({
				name: e.target.name.value,
				bio: e.target.bio.value,
			}),
		});
		console.log(res);
	};

	return (
		<section className=" p-5 w-[32em] rounded-xl outline-2 outline-gray-900 h-fit relative">
			<h2 className="text-xl mb-4">Profile</h2>
			{isEdit ? (
				<form className="flex  gap-2" onSubmit={handleSubmit}>
					<section className="bg-gray-900 rounded-md p-5  text-gray-200 relative">
						<Image className="rounded-full outline-1 outline-gray-200" src={previewImage} width={500} height={500} alt="profile image" />
						<label htmlFor="profile" className="flex-col flex justify-center items-center absolute top-5 right-5 left-5 bottom-5 bg-[rgba(0,0,0,0.5)] rounded-full ">
							<CameraIcon className="size-10 " />
							<p className="text-sm">Drag or insert a photo</p>
						</label>
						<input type="file" id="profile" className="hidden" accept="image/*" onChange={handleImageChange} />
					</section>
					<aside className="p-5 rounded-md outline *:border-b *:w-full *:mb-2 *:py-1 *:focus:outline-0 outline-gray-900 h-fit ">
						<TextInput placeholder="Name" id="name" value={formName} onChange={(e) => setName(e.target.value)} />
						<TextInput placeholder="Bio" id="bio" value={formBio} onChange={(e) => setBio(e.target.value)} />
					</aside>
					<div className="flex gap-2 absolute bottom-5 right-5">
						<HighlightButton type="submit">Save</HighlightButton>
						<Button>Discard</Button>
					</div>
				</form>
			) : (
				<div className="flex  gap-2 ">
					<section className="bg-gray-900 rounded-md p-5  text-gray-200 relative">
						<Image className="rounded-full outline-1 outline-gray-200" src={previewImage} width={500} height={500} alt="profile image" />
					</section>
					<aside className="p-5 rounded-md outline w-full outline-gray-900 h-fit">
						<h3 className="text-xl font-semibold ">{name}</h3>
						<p>{bio}</p>
					</aside>
					<div className="absolute bottom-5 right-5 ">
						<Button onClick={() => setEdit(true)}>Edit</Button>
					</div>
				</div>
			)}
		</section>
	);
}
