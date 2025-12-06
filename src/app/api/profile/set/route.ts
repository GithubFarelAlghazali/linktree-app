import { NextRequest, NextResponse } from "next/server";
import upddateData from "@/lib/firebase/services/updateData";

export async function POST(request: NextRequest) {
	if (request.method !== "POST") {
		return NextResponse.json({ status: false, message: "Method not allowed", statusCode: 405 });
	}

	const req = await request.json();
	const res = await upddateData(req, "profile", "display-profile");
	return NextResponse.json({ status: res.status, message: res.message, statusCode: res.statusCode });
}
