import LinkDetailStack from "@/components/dashboard/LinkDetailStack";
import { PlusIcon } from "lucide-react";
import getData from "@/lib/get-data";

export default async function LinkManager() {
	const links = (await getData("http://localhost:3000/api/get-links")).data?.links;

	return (
		<section className="h-fit w-96 p-5 rounded-xl outline-2 outline-gray-900">
			<h2 className="text-xl mb-4">Links</h2>
			<ul className="flex flex-col gap-2">
				{links ? links.map((link: { url: string; name: string }, key) => <LinkDetailStack key={key} url={link.url} name={link.name} />) : ""}
				<li>
					<button className="cursor-pointer flex gap-2 transition-all duration-150 bg-gray-900 text-gray-200 hover:bg-gray-200 hover:text-gray-900 hover:outline-2 outline-gray-900 p-3 rounded-md">
						Add link <PlusIcon />
					</button>
				</li>
			</ul>
		</section>
	);
}
