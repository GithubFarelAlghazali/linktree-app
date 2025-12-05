"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Define the types for notification and confirmation states
type NotifState = {
	isOpen: boolean;
	message: string;
};

type ConfirmState = {
	isOpen: boolean;
	message: string;
	onConfirm?: () => void;
	onCancel?: () => void;
};

type UIContextType = {
	notif: NotifState;
	showNotif: (message: string) => void;

	confirm: ConfirmState;
	showConfirm: (message: string, onConfirm: () => void, onCancel?: () => void) => void;
	closeConfirm: () => void;
};

// Create the UIContext with a default value of undefined
const UIContext = createContext<UIContextType | undefined>(undefined);

// Define the UIProvider component
export const UIProvider = ({ children }: { children: ReactNode }) => {
	const [notif, setNotif] = useState<NotifState>({
		isOpen: false,
		message: "",
	});

	const [confirm, setConfirm] = useState<ConfirmState>({
		isOpen: false,
		message: "",
	});

	// NOTIFICATION
	const showNotif = (message: string) => {
		setNotif({ isOpen: true, message });

		setTimeout(() => {
			setNotif({ isOpen: false, message: "" });
		}, 3000);
	};

	// CONFIRMATION
	const showConfirm = (message: string, onConfirm: () => void, onCancel?: () => void) => {
		setConfirm({ isOpen: true, message, onConfirm, onCancel });
	};

	const closeConfirm = () => {
		setConfirm({ isOpen: false, message: "" });
	};

	return (
		<UIContext.Provider
			value={{
				notif,
				showNotif,
				confirm,
				showConfirm,
				closeConfirm,
			}}
		>
			{children}
		</UIContext.Provider>
	);
};

// Custom hook to use the UIContext
export const useUI = () => {
	const context = useContext(UIContext);
	if (!context) throw new Error("useUI must be used inside UIProvider");
	return context;
};
