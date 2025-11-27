import { getFirestore, addDoc, collection } from "firebase/firestore";
import app from "../init";
const firestore = getFirestore(app);

export default async function addData<Obj extends object>(data: Obj, collectionName: string) {
	try {
		await addDoc(collection(firestore, collectionName), data);
		return { status: true, message: "Data added successfully!", statusCode: 200 };
	} catch (error) {
		return { status: false, message: error, statusCode: 400 };
	}
}
