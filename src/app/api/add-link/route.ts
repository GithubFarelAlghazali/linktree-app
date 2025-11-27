import { NextRequest, NextResponse } from "next/server";
import addData from "@/lib/firebase/services/addData";

export async function POST(request: NextRequest) {
	const req = await request.json();
	const res = await addData(req, "links");
	return NextResponse.json({ status: res.status, message: res.message, statusCode: res.statusCode });
}
