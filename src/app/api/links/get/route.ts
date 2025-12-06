import { NextResponse } from "next/server";
import retrieveData from "@/lib/firebase/services/retrieveData";

export async function GET() {
	const links = await retrieveData("links");
	return NextResponse.json({ status: 200, message: "Success", data: { links } });
}
