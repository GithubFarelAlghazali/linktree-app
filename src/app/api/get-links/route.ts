import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const links = [
		{
			name: "About me",
			url: "https://farelghazali.vercel.app",
		},
		{
			name: "Potfolio",
			url: "https://farelghazali.vercel.app",
		},
	];
	return NextResponse.json({ status: 200, message: "Success", data: { links } });
}
