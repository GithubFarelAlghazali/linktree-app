export default async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>, endpoint: string, onSuccess?: () => void) {
	e.preventDefault();

	const form = new FormData(e.currentTarget);
	const data: any = {};

	form.forEach((value, key) => {
		data[key] = value;
	});

	await fetch(endpoint, {
		method: "POST",
		body: JSON.stringify(data),
	});

	onSuccess && onSuccess();
}
