export default async function getData(url: string) {
	const res = await fetch(url, {
		cache: "no-store",
		next: {
			revalidate: 100,
		},
	});

	if (!res.ok) {
		throw new Error("Failed fetching data");
	}

	return res.json();
}
