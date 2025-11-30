import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import app from "../init";
const firestore = getFirestore(app);

export default async function deleteData(id: string, collectionName: string) {
	try {
		const docRef = doc(firestore, collectionName, id);
		await deleteDoc(docRef);
		return { status: true, message: "Data delete successfully!", statusCode: 200 };
	} catch (error) {
		return { status: false, message: error, statusCode: 400 };
	}
}
