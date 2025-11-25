import LinkDetailStack from "@/components/dashboard/LinkDetailStack";
import { PlusIcon } from "lucide-react";

export default function LinkManager() {
	return (
		<section className="h-fit w-96 p-5 rounded-xl outline-2 outline-gray-900">
			<h2 className="text-xl mb-4">Links</h2>
			<ul className="flex flex-col gap-2">
				<LinkDetailStack />
				<LinkDetailStack />
				<li>
					<button className="cursor-pointer flex gap-2 transition-all duration-150 bg-gray-900 text-gray-200 hover:bg-gray-200 hover:text-gray-900 hover:outline-2 outline-gray-900 p-3 rounded-md">
						Add link <PlusIcon />
					</button>
				</li>
			</ul>
		</section>
	);
}
