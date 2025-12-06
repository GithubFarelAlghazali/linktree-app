"use client";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { TextInput } from "../../ui/Input";
import Form from "@/components/ui/Form";

export default function AddNewLink(props: { refreshPage: () => void }) {
	const { refreshPage } = props;
	const [isAdd, setAddStatus] = useState(false);

	return (
		<li>
			{isAdd ? (
				<Form refreshPage={refreshPage} formEndpoint="/api/links/add" successMessage="Success add new link!" resetFormStatus={setAddStatus}>
					<TextInput placeholder="Links name" id="name" />
					<TextInput placeholder="URL" id="url" />
				</Form>
			) : (
				<button className="cursor-pointer flex gap-2 transition-all duration-150 bg-gray-900 text-gray-200 hover:bg-gray-200 hover:text-gray-900 hover:outline-2 outline-gray-900 p-3 rounded-md" onClick={() => setAddStatus(true)}>
					Add link <PlusIcon />
				</button>
			)}
		</li>
	);
}
