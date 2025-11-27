interface InputProps {
	placeholder?: string;
	id?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput({ placeholder = "Insert an input", id = "input", value, onChange }: InputProps) {
	return <input onChange={onChange} value={value} type="text" placeholder={placeholder} id={id} name={id} className=" focus:border-b border-gray-500 p-2 focus:outline-0 bg-transparent focus:bg-transparent" />;
}
