export function ModalBox(props: { message: string }) {
	const { message } = props;
	return (
		<div className="fixed top-10 left-1/2 -translate-x-1/2  bg-white outline-2 outline-gray-900 rounded-md p-5 z-50  w-fit">
			<h3>{message}</h3>
		</div>
	);
}
