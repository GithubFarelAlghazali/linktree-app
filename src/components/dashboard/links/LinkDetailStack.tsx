"use client";
import { PencilIcon, TrashIcon, X } from "lucide-react";
import { useState } from "react";
import { Button, HighlightButton } from "../../ui/Button";
import { TextInput } from "../../ui/Input";

export default function LinkDetailStack(props: { url: string; name: string; id: string }) {
	const { url, name, id } = props;
	const [isEdit, setEdit] = useState(false);

	const [formName, setFormName] = useState(name);
	const [formUrl, setFormUrl] = useState(url);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await fetch("/api/links/update-link", {
			method: "POST",
			body: JSON.stringify({
				id,
				name: e.target.name.value,
				url: e.target.url.value,
			}),
		});
		console.log(res);
	};

	const deleteData = async () => {
		const res = await fetch("/api/links/delete-link", {
			method: "POST",
			body: JSON.stringify({
				id,
			}),
		});
		console.log(res);
	};

	return (
		<li className="flex  justify-between items-start bg-gray-900 p-3 rounded-md text-gray-200">
			{isEdit ? (
				<form action="" className="*:focus:outline-0 [&_input]:border-b border-gray-200 *:mb-2" onSubmit={handleSubmit}>
					<TextInput placeholder="Links name" id="name" value={formName} onChange={(e) => setFormName(e.target.value)} />
					<TextInput placeholder="URL" id="url" value={formUrl} onChange={(e) => setFormUrl(e.target.value)} />
					<div className=" mt-3 flex gap-2">
						<HighlightButton reverse={true} type="submit">
							Save
						</HighlightButton>
						<Button reverse={true} onClick={() => setEdit(false)} type="button">
							Discard
						</Button>
					</div>
				</form>
			) : (
				<section className="w-full overflow-hidden">
					<h3 className="text-lg">{name}</h3>
					<p>{url}</p>
				</section>
			)}
			<aside className="flex gap-2 *:cursor-pointer">
				<button onClick={() => (isEdit ? setEdit(false) : setEdit(true))}>{isEdit ? <X /> : <PencilIcon />}</button>
				<button>
					<TrashIcon onClick={deleteData} />
				</button>
			</aside>
		</li>
	);
}
