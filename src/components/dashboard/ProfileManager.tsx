import Image from "next/image";
import { PencilIcon } from "lucide-react";

export default function ProfileManager() {
	return (
		<section className="w-96 p-5 rounded-xl outline-2 outline-gray-900 h-fit">
			<h2 className="text-xl">Profile</h2>
			<section className="bg-gray-900 rounded-md p-5 w-1/2 text-gray-200 relative">
				<Image className="rounded-full outline-1 outline-gray-200" src="/images/image.png" width={500} height={500} alt="profile image" />
				<PencilIcon className="absolute bottom-2 right-2" />
			</section>
			<aside></aside>
		</section>
	);
}
