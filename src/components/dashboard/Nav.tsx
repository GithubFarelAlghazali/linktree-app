"use client";
import { User, LinkIcon, Globe, View } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const navigations = [
		{
			url: "profile",
			icon: User,
			title: "Profile Settings",
		},
		{
			url: "social",
			icon: Globe,
			title: "Social Media Settings",
		},
		{
			url: "link",
			icon: LinkIcon,
			title: "Profile Settings",
		},
	];

	const path = usePathname();

	return (
		<nav className="flex flex-col bg-gray-900 p-5 rounded-xl w-fit text-gray-200 gap-5 *:p-2 h-fit absolute  ">
			{navigations.map((nav, key) => (
				<Link title={nav.title} key={key} href={"/dashboard/" + nav.url} className={path == "/dashboard/" + nav.url ? "bg-gray-200 text-gray-900 rounded-full " : ""}>
					<nav.icon />
				</Link>
			))}
			<Link href="/" target="__blank" title="View Result">
				<View />
			</Link>
		</nav>
	);
}
