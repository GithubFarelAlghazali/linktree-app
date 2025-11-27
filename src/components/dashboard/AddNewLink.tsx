"use client";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { TextInput } from "../ui/Input";
import { HighlightButton, Button } from "../ui/Button";

export default function AddNewLink() {
	const [isAdd, setAddStatus] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await fetch("/api/add-link", {
			method: "POST",
			body: JSON.stringify({
				name: e.target.name.value,
				url: e.target.url.value,
			}),
		});
		console.log(res);
	};
	return (
		<li>
			{isAdd ? (
				<form action="" className="*:focus:outline-0 [&_input]:border-b border-gray-200 *:mb-2 bg-gray-900 text-gray-200 p-2 rounded-md" onSubmit={handleSubmit}>
					<TextInput placeholder="Links name" id="name" />
					<TextInput placeholder="URL" id="url" />
					<div className=" mt-3 flex gap-2">
						<HighlightButton reverse={true} type="submit">
							Add
						</HighlightButton>
						<Button reverse={true} onClick={() => setAddStatus(false)} type="button">
							Discard
						</Button>
					</div>
				</form>
			) : (
				<button className="cursor-pointer flex gap-2 transition-all duration-150 bg-gray-900 text-gray-200 hover:bg-gray-200 hover:text-gray-900 hover:outline-2 outline-gray-900 p-3 rounded-md" onClick={() => setAddStatus(true)}>
					Add link <PlusIcon />
				</button>
			)}
		</li>
	);
}
