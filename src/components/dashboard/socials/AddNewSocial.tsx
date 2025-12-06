"use client";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { TextInput } from "@/components/ui/Input";
import { FaGithub, FaLinkedin, FaYoutube, FaWhatsapp, FaInstagram, FaDiscord, FaFacebook, FaTiktok } from "react-icons/fa";
import Form from "@/components/ui/Form";

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

	return (
		<li>
			{isAdd ? (
				<Form formEndpoint="/api/socials/add" refreshPage={refreshPage} successMessage="New Social Media addedd successfully!" resetFormStatus={setAdd}>
					<select name="socialType" id="socialType" className=" p-2 rounded-md  bg-gray-900 w-fit">
						{Object.keys(iconsMap).map((key) => (
							<option key={key} value={key}>
								{key.charAt(0).toUpperCase() + key.slice(1)}
							</option>
						))}
					</select>
					<TextInput placeholder="URL" id="url" />
				</Form>
			) : (
				<button className="cursor-pointer flex gap-2 transition-all duration-150 bg-gray-900 text-gray-200 hover:bg-gray-200 hover:text-gray-900 hover:outline-2 outline-gray-900 p-3 rounded-md" onClick={() => setAdd(true)}>
					Add social media <PlusIcon />
				</button>
			)}
		</li>
	);
}
