"use client";
import { PencilIcon, TrashIcon, X } from "lucide-react";
import { useState } from "react";
import { Button, HighlightButton } from "../ui/Button";
import { TextInput } from "../ui/Input";

export default function LinkDetailStack(props: { url: string; name: string }) {
	const { url, name } = props;
	const [isEdit, setEdit] = useState(false);

	const [formName, setFormName] = useState(name);
	const [formUrl, setFormUrl] = useState(url);

	return (
		<li className="flex  justify-between items-start bg-gray-900 p-3 rounded-md text-gray-200">
			{isEdit ? (
				<form action="" className="*:focus:outline-0 [&_input]:border-b border-gray-200 *:mb-2">
					<TextInput placeholder="Links name" id="name" value={formName} onChange={(e) => setFormName(e.target.value)} />
					<TextInput placeholder="URL" id="url" value={formUrl} onChange={(e) => setFormUrl(e.target.value)} />
					<div className=" mt-3 flex gap-2">
						<HighlightButton reverse={true} type="submit">
							Save
						</HighlightButton>
						<Button reverse={true} onClick={() => (isEdit ? setEdit(false) : setEdit(true))} type="button">
							Discard
						</Button>
					</div>
				</form>
			) : (
				<section className="w-full overflow-hidden">
					<h3 className="text-lg">{formName}</h3>
					<p>{formUrl}</p>
				</section>
			)}
			<aside className="flex gap-2 *:cursor-pointer">
				<button onClick={() => (isEdit ? setEdit(false) : setEdit(true))}>{isEdit ? <X /> : <PencilIcon />}</button>
				<button>
					<TrashIcon />
				</button>
			</aside>
		</li>
	);
}
