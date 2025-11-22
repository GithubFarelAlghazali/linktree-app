"use client";
import { PencilIcon, TrashIcon, X } from "lucide-react";
import { useState } from "react";

export default function LinkDetailStack() {
	const [isEdit, setEdit] = useState(false);
	return (
		<li className="flex justify-between bg-gray-900 p-3 rounded-md text-gray-200">
			{isEdit ? (
				<form action="" className="*:focus:outline-0 ">
					<input type="text" placeholder="Links name" />
					<input type="text" placeholder="URL" />
					<div className="*:cursor-pointer *:p-2 *:rounded-md mt-3 flex gap-2">
						<button type="submit" className=" bg-gray-200 text-gray-900">
							Save
						</button>
						<button onClick={() => (isEdit ? setEdit(false) : setEdit(true))} type="button" className="outline-1 outline-gray-200">
							Discard
						</button>
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
