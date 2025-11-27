import { ReactNode } from "react";

interface ButtonProps {
	type?: "submit" | "button" | "reset";
	reverse?: boolean;
	children?: ReactNode;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ type = "button", children = "Button", onClick = () => {}, reverse = false }: ButtonProps) {
	return (
		<button type={type} onClick={onClick} className={`${reverse ? "text-gray-200 outline-gray-200" : "text-gray-900 outline-gray-900"} p-2 cursor-pointer outline-1 rounded-md`}>
			{children}
		</button>
	);
}

export function HighlightButton({ type = "button", children = "Button", onClick = () => {}, reverse = false }: ButtonProps) {
	return (
		<button type={type} onClick={onClick} className={`${reverse ? "text-gray-900 bg-gray-200" : "text-gray-200 bg-gray-900"} p-2 cursor-pointer outline-1 rounded-md`}>
			{children}
		</button>
	);
}
