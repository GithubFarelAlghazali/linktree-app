import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const userProfile = {
		name: "Farel Alghazali",
		bio: "Web Developer",
	};
	return NextResponse.json({ status: 200, message: "Success", data: { userProfile } });
}
