import { FaGithub, FaLinkedin, FaYoutube, FaWhatsapp, FaInstagram, FaDiscord, FaFacebook, FaTiktok } from "react-icons/fa";
import Link from "next/link";

export default function SocialButton(props: { url: string; type: string }) {
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

	const { url, type } = props;
	const Icon = iconsMap[type as keyof typeof iconsMap];
	if (!Icon) {
		return null;
	}
	return (
		<Link href={url}>
			<div className="p-2 w-fit rounded-full bg-gray-900">
				<Icon className="size-8 fill-gray-200" />
			</div>
		</Link>
	);
}
