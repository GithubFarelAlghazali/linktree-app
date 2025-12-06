"use client";
import { TrashIcon } from "lucide-react";
import { useUI } from "@/context/ModalContext";

interface DeletePropsType {
	endpoint: string;
	id: string;
	deleteAction: () => void;
	successMessage: string;
}

export default function DeleteButton({ endpoint, id, deleteAction, successMessage }: DeletePropsType) {
	const { showConfirm, showNotif } = useUI();
	const handleDelete = async () => {
		await fetch(endpoint, {
			method: "POST",
			body: JSON.stringify({
				id,
			}),
		});
		deleteAction();
		showNotif(successMessage);
	};

	return (
		<button onClick={() => showConfirm("Are you sure to delete this data?", handleDelete, () => {})}>
			<TrashIcon />
		</button>
	);
}
