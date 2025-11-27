import { getFirestore, updateDoc, doc } from "firebase/firestore";
import app from "../init";
const firestore = getFirestore(app);

export default async function upddateData<Obj extends object>(data: Obj, collectionName: string, id: string) {
	try {
		const ref = doc(firestore, collectionName, id);
		await updateDoc(ref, data);
		return { status: true, message: "Data update successfully!", statusCode: 200 };
	} catch (error) {
		return { status: false, message: error, statusCode: 400 };
	}
}
