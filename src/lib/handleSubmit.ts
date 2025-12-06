export default async function handleSubmit(e: React.FormEvent<HTMLFormElement>, endpoint: string, resetEditmode: (val: boolean) => void, onSuccess?: () => void, resetValue?: () => void) {
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

	resetEditmode(false);

	resetValue && resetValue();
	onSuccess && onSuccess();
}
