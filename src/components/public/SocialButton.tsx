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
	const Icon = iconsMap[type.toLowerCase() as keyof typeof iconsMap];
	if (!Icon) {
		return null;
	}
	return (
		<Link href={url} className=" group">
			<div className=" p-2 w-fit rounded-full bg-gray-900 text-gray-200 transition duration-200 relative group">
				<Icon className="size-8 fill-current" />
				<p className="text-[12px] bottom-0 text-center text-gray-900 absolute group-hover:-bottom-5 transition-all duration-150 left-0 right-0 opacity-0 group-hover:opacity-100">{type}</p>
			</div>
		</Link>
	);
}
