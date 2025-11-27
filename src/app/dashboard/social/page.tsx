import SocialDetailStack from "@/components/dashboard/socials/SocialDetailStack";
import AddNewSocial from "@/components/dashboard/socials/AddNewSocial";
import getData from "@/lib/get-data";

export default async function SocialManager() {
	const social = (await getData("http://localhost:3000/api/socials/get-socials")).data?.socials;

	return (
		<section className=" p-5 w-96 rounded-xl outline-2 outline-gray-900 h-fit relative">
			<h2 className="text-xl mb-4">Socials</h2>
			<ul className="flex flex-col gap-2">
				{social.length > 0 ? (
					social.map((soc: { type: string; url: string; id: string }) => <SocialDetailStack type={soc.type} url={soc.url} key={soc.id} id={soc.id} />)
				) : (
					<li className="p-3 rounded-md outline-2 outline-gray-900 text-center">Start to add social media link</li>
				)}
				<AddNewSocial />
			</ul>
		</section>
	);
}
