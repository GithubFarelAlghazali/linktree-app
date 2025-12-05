"use client";
import { useUI } from "@/context/ModalContext";
import { Button, HighlightButton } from "./Button";

export function ConfirmModal() {
	const { confirm, closeConfirm } = useUI();
	return (
		<>
			{confirm.isOpen && (
				<div className="fixed top-10 left-1/2 -translate-x-1/2  bg-gray-200 outline-2 outline-gray-900 rounded-md p-5 z-50 text-center w-fit">
					<h3>{confirm.message}</h3>
					<div className="flex gap-2 mt-3">
						<HighlightButton
							onClick={() => {
								confirm.onCancel?.();
								closeConfirm();
							}}
						>
							Cancel
						</HighlightButton>
						<Button
							onClick={() => {
								confirm.onConfirm?.();
								closeConfirm();
							}}
						>
							Continue
						</Button>
					</div>
				</div>
			)}
		</>
	);
}
