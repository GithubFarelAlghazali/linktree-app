import Image from "next/image";
import LinkStack from "@/components/public/LinkStack";
import SocialButton from "@/components/public/SocialButton";

export default function Home() {
	return (
		<div className="bg-gray-200 h-screen w-screen">
			<main className="p-5 mx-auto w-fit">
				<header className="text-center mb-10">
					<div className="mb-5 mx-auto w-52 h-52 rounded-full bg-gray-600 overflow-hidden">
						<Image src={"/images/image.png"} width={500} height={500} className="w-full" />
					</div>
					<h1 className="text-3xl font-bold">Farel Alghazali</h1>
					<p className="font-semibold my-3">Web Developer</p>
					<section className="flex justify-center gap-2">
						<SocialButton url="instagram.com" type="instagram" />
						<SocialButton url="github.com" type="github" />
						<SocialButton url="facebook.com" type="facebook" />
						<SocialButton url="discord.com" type="discord" />
					</section>
				</header>
				<section className="w-72">
					<ul className="flex flex-col gap-2">
						<LinkStack url="" name="About me" />
						<LinkStack url="" name="Portfolio" />
					</ul>
				</section>
			</main>
		</div>
	);
}
