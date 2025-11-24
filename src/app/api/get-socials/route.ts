import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const socials = [
		{
			type: "Instagram",
			url: "https://instagram.com",
		},
		{
			type: "WhatsApp",
			url: "https://whatsapp.com",
		},
		{
			type: "Facebook",
			url: "https://facebook.com",
		},
		{
			type: "GitHub",
			url: "https://github.com",
		},
	];
	return NextResponse.json({ status: 200, message: "Success", data: { socials } });
}
