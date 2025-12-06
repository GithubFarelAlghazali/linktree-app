"use client";
import SocialDetailStack from "@/components/dashboard/socials/SocialDetailStack";
import AddNewSocial from "@/components/dashboard/socials/AddNewSocial";
import fetcher from "@/lib/swr/fetcher";
import useSWR from "swr";
import LoadingStack from "@/components/ui/LoadingStack";

export default function SocialManager() {
	const { data, mutate, isLoading } = useSWR("/api/socials/get", fetcher);
	const social = data?.data?.socials;
	console.log(social);

	return (
		<section className=" p-5 w-96 rounded-xl outline-2 outline-gray-900 h-fit relative">
			<h2 className="text-xl mb-4">Socials</h2>
			<ul className="flex flex-col gap-2">
				{isLoading ? (
					<LoadingStack />
				) : social?.length != 0 ? (
					social?.map((soc: { socialType: string; url: string; id: string }) => <SocialDetailStack refreshPage={mutate} type={soc.socialType} url={soc.url} key={soc.id} id={soc.id} />)
				) : (
					<li className="p-3 rounded-md outline-2 outline-gray-900 text-center">Start to add social media link</li>
				)}
				<AddNewSocial refreshPage={mutate} />
			</ul>
		</section>
	);
}
