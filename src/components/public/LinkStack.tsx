import Link from "next/link";

export default function LinkStack(props: { url: string; name: string }) {
	const { url, name } = props;
	return (
		<li className="bg-gray-900 text-gray-200 transition-all duration-100 hover:bg-gray-200 hover:outline-1 hover:outline-gray-900 hover:text-gray-900 py-4 text-center w-full rounded-xl">
			<Link href={url}>
				<h3 className="font-semibold text-xl">{name}</h3>
			</Link>
		</li>
	);
}
