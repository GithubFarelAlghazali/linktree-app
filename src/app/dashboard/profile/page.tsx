"use client";
import Image from "next/image";
import { CameraIcon, X } from "lucide-react";
import { useState } from "react";
import { Button, HighlightButton } from "@/components/ui/Button";
import { TextInput } from "@/components/ui/Input";

export default function ProfileManager() {
	const [isEdit, setEdit] = useState(false);

	return (
		<section className=" p-5 w-[32em] rounded-xl outline-2 outline-gray-900 h-fit relative">
			<h2 className="text-xl mb-4">Profile</h2>
			{isEdit ? (
				<form className="flex  gap-2">
					<section className="bg-gray-900 rounded-md p-5  text-gray-200 relative">
						<Image className="rounded-full outline-1 outline-gray-200" src="/images/image.png" width={500} height={500} alt="profile image" />
						<label htmlFor="profile" className="flex-col flex justify-center items-center absolute top-5 right-5 left-5 bottom-5 bg-[rgba(0,0,0,0.5)] rounded-full ">
							<CameraIcon className="size-10 " />
							<p className="text-sm">Drag or insert a photo</p>
						</label>
						<input type="file" id="profile" className="hidden" />
					</section>
					<aside className="p-5 rounded-md outline *:border-b *:w-full *:mb-2 *:py-1 *:focus:outline-0 outline-gray-900 h-fit ">
						<TextInput placeholder="Name" />
						<TextInput placeholder="Bio" />
					</aside>
					<div className="flex gap-2 absolute bottom-5 right-5">
						<HighlightButton>Save</HighlightButton>
						<Button onClick={() => setEdit(false)}>Discard</Button>
					</div>
				</form>
			) : (
				<div className="flex  gap-2 ">
					<section className="bg-gray-900 rounded-md p-5  text-gray-200 relative">
						<Image className="rounded-full outline-1 outline-gray-200" src="/images/image.png" width={500} height={500} alt="profile image" />
					</section>
					<aside className="p-5 rounded-md outline w-full outline-gray-900 h-fit">
						<h3 className="text-xl font-semibold ">Farel Alghazali</h3>
						<p>Web Developer</p>
					</aside>
					<div className="absolute bottom-5 right-5 ">
						<Button onClick={() => setEdit(true)}>Edit</Button>
					</div>
				</div>
			)}
		</section>
	);
}
