"use client";
import { useState } from "react";
import { HighlightButton, Button } from "./Button";
import handleSubmit from "@/lib/handleSubmit";
import { useUI } from "@/context/ModalContext";

interface FormPropsType {
	refreshPage: () => void;
	formEndpoint: string;
	successMessage: string;
	resetFormStatus: (val: boolean) => void;
	children: React.ReactNode;
}

export default function Form({ refreshPage, formEndpoint, successMessage, resetFormStatus, children }: FormPropsType) {
	const { showConfirm, showNotif } = useUI();
	const [changed, setChanged] = useState(false);

	return (
		<form
			action=""
			className="*:focus:outline-0 [&_input]:border-b border-gray-200 *:mb-2 bg-gray-900 text-gray-200 p-2 rounded-md"
			onSubmit={(e) => {
				handleSubmit(e, formEndpoint, refreshPage, () => {
					showNotif(successMessage);
					resetFormStatus(false);
				});
			}}
			onChange={() => setChanged(true)}
		>
			{children}
			<div className=" mt-3 flex gap-2">
				<HighlightButton reverse={true} type="submit">
					Save
				</HighlightButton>
				<Button
					reverse={true}
					onClick={() =>
						changed
							? showConfirm(
									"Discard change?",
									() => resetFormStatus(false),
									() => {}
							  )
							: resetFormStatus(false)
					}
					type="button"
				>
					Discard
				</Button>
			</div>
		</form>
	);
}
