"use client";
import LinkDetailStack from "@/components/dashboard/links/LinkDetailStack";
import AddNewLink from "@/components/dashboard/links/AddNewLink";
import fetcher from "@/lib/swr/fetcher";
import useSWR from "swr";
import LoadingStack from "@/components/ui/LoadingStack";

export default function LinkManager() {
	const { data, mutate, isLoading } = useSWR("/api/links/get", fetcher);
	const links = data?.data?.links;

	return (
		<section className="h-fit w-96 p-5 rounded-xl outline-2 outline-gray-900">
			<h2 className="text-xl mb-4">Links</h2>
			<ul className="flex flex-col gap-2">
				{isLoading ? (
					<LoadingStack />
				) : links?.length > 0 ? (
					links?.map((link: { id: string; url: string; name: string }) => <LinkDetailStack key={link.id} id={link.id} url={link.url} name={link.name} refreshPage={mutate} />)
				) : (
					<li className="p-3 outline-2 rounded-md text-center">Start to add a link</li>
				)}
				<AddNewLink refreshPage={mutate} />
			</ul>
		</section>
	);
}
