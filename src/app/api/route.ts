import { NextResponse } from "next/server";
import retrieveData from "@/lib/firebase/services/retrieveData";

// type

export async function GET() {
	const profile = await retrieveData("profile");
	const socials = await retrieveData("socials");
	const links = await retrieveData("links");
	return NextResponse.json({ status: 200, message: "Success", data: { profile, socials, links } });
}
