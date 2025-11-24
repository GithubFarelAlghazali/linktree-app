"use client";
import { PencilIcon, TrashIcon, X } from "lucide-react";
import { useState } from "react";
import { Button, HighlightButton } from "../ui/Button";
import { TextInput } from "../ui/Input";

export default function LinkDetailStack() {
	const [isEdit, setEdit] = useState(false);
	return (
		<li className="flex  justify-between items-start bg-gray-900 p-3 rounded-md text-gray-200">
			{isEdit ? (
				<form action="" className="*:focus:outline-0 [&_input]:border-b border-gray-200 *:mb-2">
					<TextInput placeholder="Links name" id="name" />
					<TextInput placeholder="URL" id="url" />
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
				<section>
					<h3 className="text-lg">Name</h3>
					<p>url.com</p>
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
