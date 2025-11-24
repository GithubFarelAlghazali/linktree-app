interface InputProps {
	placeholder?: string;
	id?: string;
}

export function TextInput({ placeholder = "Insert an input", id = "input" }: InputProps) {
	return <input type="text" placeholder={placeholder} id={id} name={id} className=" focus:border-b border-gray-500 p-2 focus:outline-0" />;
}
