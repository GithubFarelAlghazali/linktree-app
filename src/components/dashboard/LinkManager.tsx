import LinkDetailStack from "./LinkDetailStack";

export default function LinkManager() {
	return (
		<section className="w-96 p-5 rounded-xl outline-2 outline-gray-900">
			<h2 className="text-xl">Links</h2>
			<ul className="flex flex-col gap-2">
				<LinkDetailStack />
				<LinkDetailStack />
			</ul>
		</section>
	);
}
