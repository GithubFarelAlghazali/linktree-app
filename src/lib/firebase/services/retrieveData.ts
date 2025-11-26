import { getFirestore, getDocs, collection } from "firebase/firestore";
import app from "../init";
const firestore = getFirestore(app);

export default async function retrieveData(collectionName: string) {
	const snapshot = await getDocs(collection(firestore, collectionName));
	const data = snapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	return data;
}
