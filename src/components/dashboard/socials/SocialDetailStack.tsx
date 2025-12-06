"use client";
import { useState } from "react";
import { PencilIcon } from "lucide-react";
import { TextInput } from "@/components/ui/Input";
import { FaGithub, FaLinkedin, FaYoutube, FaWhatsapp, FaInstagram, FaDiscord, FaFacebook, FaTiktok } from "react-icons/fa";
import Form from "@/components/ui/Form";
import DeleteButton from "@/components/ui/DeleteButton";

export default function SocialDetailStack(props: { type: string; url: string; id: string; refreshPage: () => void }) {
	const { type, url, id, refreshPage } = props;
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

	const Icon = iconsMap[type as keyof typeof iconsMap];
	if (!Icon) {
		return null;
	}

	return (
		<li className="flex  justify-between items-start bg-gray-900 p-3 rounded-md text-gray-200">
			{isEdit ? (
				<Form refreshPage={refreshPage} formEndpoint="/api/socials/update" successMessage="Link updated successfully!" resetFormStatus={refreshPage}>
					<select name="socialType" id="socialType" className=" p-2 rounded-md  bg-gray-900" defaultValue={formType} onChange={(e) => setType(e.target.value)}>
						{Object.keys(iconsMap).map((key) => (
							<option key={key} value={key}>
								{key.charAt(0).toUpperCase() + key.slice(1)}
							</option>
						))}
					</select>
					<TextInput placeholder="URL" id="url" value={formUrl} onChange={(e) => setUrl(e.target.value)} />
				</Form>
			) : (
				<section className="overflow-hidden grid grid-cols-[auto,1fr] grid-rows-2 gap-x-2 gap-y-0">
					<Icon className="row-span-2 size-12" />
					<h3 className="text-lg">{type}</h3>
					<p className="col-start-2 ">{url}</p>
				</section>
			)}
			<aside className="flex gap-2 *:cursor-pointer">
				<button onClick={() => setEdit(true)}>{isEdit ? "" : <PencilIcon />}</button>
				<DeleteButton endpoint="/api/socials/delete" id={id} deleteAction={refreshPage} successMessage="Success remove social media!" />
			</aside>
		</li>
	);
}
