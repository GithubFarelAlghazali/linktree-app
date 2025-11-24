import SocialDetailStack from "./SocialDetailStack";
import { PlusIcon } from "lucide-react";

export default function SocialManager() {
	return (
		<section className=" p-5 w-96 rounded-xl outline-2 outline-gray-900 h-fit relative">
			<h2 className="text-xl mb-4">Socials</h2>
			<ul className="flex flex-col gap-2">
				<SocialDetailStack type="Instagram" />
				<SocialDetailStack type="GitHub" />
				<SocialDetailStack type="Discord" />
				<li>
					<button className="cursor-pointer flex gap-2 transition-all duration-150 bg-gray-900 text-gray-200 hover:bg-gray-200 hover:text-gray-900 hover:outline-2 outline-gray-900 p-3 rounded-md">
						Add social media <PlusIcon />
					</button>
				</li>
			</ul>
		</section>
	);
}
