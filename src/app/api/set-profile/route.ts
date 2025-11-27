import { NextRequest, NextResponse } from "next/server";
import retrieveData from "@/lib/firebase/services/retrieveData";

export async function POST(request: NextRequest) {
	const socials = await retrieveData("socials");
	return NextResponse.json({ status: 200, message: "Success", data: { socials } });
}
