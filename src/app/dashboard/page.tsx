"use client";
import ProfileManager from "@/components/dashboard/ProfileManager";
import LinkManager from "@/components/dashboard/LinkManager";
import SocialManager from "@/components/dashboard/SocialManager";
import { User, Link, Globe } from "lucide-react";
import { useState } from "react";

export default function DashboardPage() {
	const [menu, setMenu] = useState("profile");

	const menuMap = {
		profile: ProfileManager,
		links: LinkManager,
		social: SocialManager,
	};
	const Menu = menuMap[menu as keyof typeof menuMap];

	return (
		<main className="p-5 relative w-screen h-screen ">
			<h1 className="text-3xl font-bold mb-5">Dashboard</h1>
			<nav className="flex flex-col bg-gray-900 p-5 rounded-xl w-fit text-gray-200 gap-5 *:cursor-pointer h-fit absolute  ">
				<button className={`${menu == "profile" ? "bg-gray-200 text-gray-900 rounded-full" : ""}  p-2`} onClick={() => setMenu("profile")}>
					<User />
				</button>
				<button className={`${menu == "social" ? "bg-gray-200 text-gray-900 rounded-full" : ""} onClick={() => setMenu("profile")} p-2`} onClick={() => setMenu("social")}>
					<Globe />
				</button>
				<button className={`${menu == "links" ? "bg-gray-200 text-gray-900 rounded-full" : ""} onClick={() => setMenu("profile")} p-2`} onClick={() => setMenu("links")}>
					<Link />
				</button>
			</nav>
			<div className="ml-24">
				<Menu />
			</div>
		</main>
	);
}
