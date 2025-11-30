"use client";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { TextInput } from "@/components/ui/Input";
import { FaGithub, FaLinkedin, FaYoutube, FaWhatsapp, FaInstagram, FaDiscord, FaFacebook, FaTiktok } from "react-icons/fa";
import { Button, HighlightButton } from "@/components/ui/Button";

export default function AddNewSocial(props: { refreshPage: () => void }) {
	const { refreshPage } = props;
	const [isAdd, setAdd] = useState(false);

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

	const handleSubmit = async (e) => {
		e.preventDefault();
		await fetch("/api/socials/add-social", {
			method: "POST",
			body: JSON.stringify({
				type: e.target.socialType.value,
				url: e.target.url.value,
			}),
		});
		setAdd(false);
		refreshPage();
	};

	return (
		<li>
			{isAdd ? (
				<form action="" className="*:focus:outline-0 [&_input]:border-b border-gray-200 *:mb-2 bg-gray-900 text-gray-200 p-2 rounded-md flex flex-col " onSubmit={handleSubmit}>
					<select name="socialType" id="socialType" className=" p-2 rounded-md  bg-gray-900 w-fit">
						{Object.keys(iconsMap).map((key) => (
							<option key={key} value={key}>
								{key.charAt(0).toUpperCase() + key.slice(1)}
							</option>
						))}
					</select>
					<TextInput placeholder="URL" id="url" />
					<div className=" mt-3 flex gap-2">
						<HighlightButton reverse={true} type="submit">
							Add
						</HighlightButton>
						<Button reverse={true} onClick={() => setAdd(false)} type="button">
							Discard
						</Button>
					</div>
				</form>
			) : (
				<button className="cursor-pointer flex gap-2 transition-all duration-150 bg-gray-900 text-gray-200 hover:bg-gray-200 hover:text-gray-900 hover:outline-2 outline-gray-900 p-3 rounded-md" onClick={() => setAdd(true)}>
					Add social media <PlusIcon />
				</button>
			)}
		</li>
	);
}
