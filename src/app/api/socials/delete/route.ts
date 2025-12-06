import { NextRequest, NextResponse } from "next/server";
import deleteData from "@/lib/firebase/services/deleteData";

export async function POST(request: NextRequest) {
	const req = await request.json();
	const res = await deleteData(req.id, "socials");
	return NextResponse.json({ status: res.status, message: res.message, statusCode: res.statusCode });
}
