import { NextRequest, NextResponse } from "next/server";
import retrieveData from "@/lib/firebase/services/retrieveData";

export async function GET(request: NextRequest) {
	const links = await retrieveData("links");
	return NextResponse.json({ status: 200, message: "Success", data: { links } });
}
