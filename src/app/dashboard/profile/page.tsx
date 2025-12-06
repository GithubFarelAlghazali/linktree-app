"use client";
import ProfileTab from "@/components/dashboard/ProfileTab";
import fetcher from "@/lib/swr/fetcher";
import useSWR from "swr";

export default function ProfileManager() {
	const { data, mutate } = useSWR("/api/profile/get", fetcher);
	const dataProfile = data?.data?.userProfile[0];

	return (
		<div>
			<ProfileTab name={dataProfile?.name} bio={dataProfile?.bio} refreshProfile={mutate} />
		</div>
	);
}
