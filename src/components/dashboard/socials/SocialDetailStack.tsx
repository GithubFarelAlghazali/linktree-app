"use client";
import { useState } from "react";
import { TrashIcon, PencilIcon } from "lucide-react";
import { Button, HighlightButton } from "@/components/ui/Button";
import { TextInput } from "@/components/ui/Input";
import { FaGithub, FaLinkedin, FaYoutube, FaWhatsapp, FaInstagram, FaDiscord, FaFacebook, FaTiktok } from "react-icons/fa";

export default function SocialDetailStack(props: { type: string; url: string; id: string }) {
	const { type, url, id } = props;
	const [isEdit, setEdit] = useState(false);

	const [formType, setType] = useState(type);
	const [formUrl, setUrl] = useState(url);

	const iconsMap = {
		GitHub: FaGithub,
		LinkedIn: FaLinkedin,
		YouTube: FaYoutube,
		WhatsApp: FaWhatsapp,
		Instagram: FaInstagram,
		Discord: FaDiscord,
		Facebook: FaFacebook,
		TikTok: FaTiktok,
	};

	const Icon = iconsMap[formType as keyof typeof iconsMap];
	if (!Icon) {
		return null;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await fetch("/api/socials/update-social", {
			method: "POST",
			body: JSON.stringify({
				id,
				type: e.target.socialType.value,
				url: e.target.url.value,
			}),
		});
		console.log(res);
	};

	return (
		<li className="flex  justify-between items-start bg-gray-900 p-3 rounded-md text-gray-200">
			{isEdit ? (
				<form action="" className="*:focus:outline-0 [&_input]:border-b border-gray-200 *:mb-2" onSubmit={handleSubmit}>
					<select name="socialType" id="socialType" className=" p-2 rounded-md  bg-gray-900" defaultValue={formType} onChange={(e) => setType(e.target.value)}>
						{Object.keys(iconsMap).map((key) => (
							<option key={key} value={key}>
								{key.charAt(0).toUpperCase() + key.slice(1)}
							</option>
						))}
					</select>
					<TextInput placeholder="URL" id="url" value={formUrl} onChange={(e) => setUrl(e.target.value)} />
					<div className=" mt-3 flex gap-2">
						<HighlightButton reverse={true} type="submit">
							Save
						</HighlightButton>
						<Button reverse={true} onClick={() => setEdit(false)} type="button">
							Discard
						</Button>
					</div>
				</form>
			) : (
				<section className="overflow-hidden grid grid-cols-[auto,1fr] grid-rows-2 gap-x-2 gap-y-0">
					<Icon className="row-span-2 size-12" />
					<h3 className="text-lg">{formType}</h3>
					<p className="col-start-2 ">{formUrl}</p>
				</section>
			)}
			<aside className="flex gap-2 *:cursor-pointer">
				<button onClick={() => setEdit(true)}>{isEdit ? "" : <PencilIcon />}</button>
				<button>
					<TrashIcon />
				</button>
			</aside>
		</li>
	);
}
