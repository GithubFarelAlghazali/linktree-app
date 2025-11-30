"use client";
import LinkDetailStack from "@/components/dashboard/links/LinkDetailStack";
import AddNewLink from "@/components/dashboard/links/AddNewLink";
import fetcher from "@/lib/swr/fetcher";
import useSWR from "swr";

export default function LinkManager() {
	const { data, mutate } = useSWR("/api/links/get-links", fetcher);
	const links = data.data.links;

	return (
		<section className="h-fit w-96 p-5 rounded-xl outline-2 outline-gray-900">
			<h2 className="text-xl mb-4">Links</h2>
			<ul className="flex flex-col gap-2">
				{links.length > 0 ? (
					links.map((link: { url: string; name: string; id: string }) => <LinkDetailStack id={link.id} key={link.id} url={link.url} name={link.name} refreshPage={mutate} />)
				) : (
					<li className="p-3 outline-1 rounded-md text-center">Start to add a link</li>
				)}
				<AddNewLink refreshPage={mutate} />
			</ul>
		</section>
	);
}
