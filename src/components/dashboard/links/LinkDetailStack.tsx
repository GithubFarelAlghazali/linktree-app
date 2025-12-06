"use client";
import { PencilIcon, TrashIcon, X } from "lucide-react";
import { useState } from "react";
import { TextInput } from "../../ui/Input";
import Form from "@/components/ui/Form";
import DeleteButton from "@/components/ui/DeleteButton";

export default function LinkDetailStack(props: { url: string; name: string; id: string; refreshPage: () => void }) {
	const { url, name, id, refreshPage } = props;
	const [isEdit, setEdit] = useState(false);

	const [formName, setFormName] = useState(name);
	const [formUrl, setFormUrl] = useState(url);

	return (
		<li className="flex  justify-between items-start bg-gray-900 p-3 rounded-md text-gray-200">
			{isEdit ? (
				<Form refreshPage={refreshPage} formEndpoint="/api/links/update" successMessage="Link updated successfully!" resetFormStatus={setEdit}>
					<TextInput placeholder="Links name" id="name" value={formName} onChange={(e) => setFormName(e.target.value)} />
					<TextInput placeholder="URL" id="url" value={formUrl} onChange={(e) => setFormUrl(e.target.value)} />
				</Form>
			) : (
				<section className="w-full overflow-hidden">
					<h3 className="text-lg">{name}</h3>
					<p>{url}</p>
				</section>
			)}
			<aside className="flex gap-2 *:cursor-pointer">
				<button onClick={() => (isEdit ? setEdit(false) : setEdit(true))}>{isEdit ? <X /> : <PencilIcon />}</button>
				<DeleteButton endpoint="/api/links/delete" id={id} deleteAction={refreshPage} successMessage="Link removed" />
			</aside>
		</li>
	);
}
