import { NextResponse } from "next/server";
import retrieveData from "@/lib/firebase/services/retrieveData";

export async function GET() {
	const userProfile = await retrieveData("profile");
	return NextResponse.json({ status: 200, message: "Success", data: { userProfile } });
}
