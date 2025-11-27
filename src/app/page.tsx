import Image from "next/image";
import LinkStack from "@/components/public/LinkStack";
import SocialButton from "@/components/public/SocialButton";
import getData from "@/lib/get-data";

export default async function Home() {
	const profile = (await getData("http://localhost:3000/api/get-profile")).data?.userProfile[0];
	const socials = (await getData("http://localhost:3000/api/get-socials")).data?.socials;
	const links = (await getData("http://localhost:3000/api/get-links")).data?.links;
	console.log(links);

	return (
		<main className="p-5 mx-auto w-fit">
			<header className="text-center mb-10">
				<div className="mb-5 mx-auto w-52 h-52 rounded-full bg-gray-600 overflow-hidden">
					<Image alt="profile-image" src={"/images/image.png"} width={500} height={500} className="w-full" />
				</div>
				<h1 className="text-3xl font-bold">{profile.name}</h1>
				<p className="font-semibold my-3">{profile.bio}</p>
				<section className="flex justify-center gap-2">{socials && socials.map((link: { url: string; type: string }, key: string) => <SocialButton key={key} url={link.url} type={link.type} />)}</section>
			</header>
			<section className="w-72">
				<ul className="flex flex-col gap-2">{links && links.map((link: { url: string; name: string }, key: string) => <LinkStack key={key} url={link.url} name={link.name} />)}</ul>
			</section>
		</main>
	);
}
