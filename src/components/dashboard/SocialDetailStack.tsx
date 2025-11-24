"use client";
import { useState } from "react";
import { TrashIcon, X, PencilIcon } from "lucide-react";
import { Button, HighlightButton } from "../ui/Button";
import { TextInput } from "../ui/Input";
import { FaGithub, FaLinkedin, FaYoutube, FaWhatsapp, FaInstagram, FaDiscord, FaFacebook, FaTiktok } from "react-icons/fa";

export default function SocialDetailStack(props: { type: string }) {
	const { type } = props;
	const [isEdit, setEdit] = useState(false);

	const iconsMap = {
		github: FaGithub,
		linkedin: FaLinkedin,
		youtube: FaYoutube,
		whatsapp: FaWhatsapp,
		instagram: FaInstagram,
		discord: FaDiscord,
		facebook: FaFacebook,
		tiktok: FaTiktok,
	};
	const Icon = iconsMap[type.toLowerCase() as keyof typeof iconsMap];
	if (!Icon) {
		return null;
	}

	return (
		<li className="flex  justify-between items-start bg-gray-900 p-3 rounded-md text-gray-200">
			{isEdit ? (
				<form action="" className="*:focus:outline-0 [&_input]:border-b border-gray-200 *:mb-2">
					<select name="socialType" id="socialType" className=" p-2 rounded-md  bg-gray-900" defaultValue={type.toLowerCase()}>
						{Object.keys(iconsMap).map((key) => (
							<option key={key} value={key}>
								{key.charAt(0).toUpperCase() + key.slice(1)}
							</option>
						))}
					</select>
					<TextInput placeholder="URL" id="url" />
					<div className=" mt-3 flex gap-2">
						<HighlightButton reverse={true} type="submit">
							Save
						</HighlightButton>
						<Button reverse={true} onClick={() => (isEdit ? setEdit(false) : setEdit(true))} type="button">
							Discard
						</Button>
					</div>
				</form>
			) : (
				<section className=" grid grid-cols-[auto,1fr] grid-rows-2 gap-x-2 gap-y-0">
					<Icon className="row-span-2 size-12" />
					<h3 className="text-lg">{type}</h3>
					<p className="col-start-2">url.com</p>
				</section>
			)}
			<aside className="flex gap-2 *:cursor-pointer">
				<button onClick={() => (isEdit ? setEdit(false) : setEdit(true))}>{isEdit ? <X /> : <PencilIcon />}</button>
				<button>
					<TrashIcon />
				</button>
			</aside>
		</li>
	);
}
