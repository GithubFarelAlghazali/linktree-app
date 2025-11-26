import getData from "@/lib/get-data";
import ProfileTab from "@/components/dashboard/ProfileTab";

export default async function ProfileManager() {
	const profileData = (await getData("http://localhost:3000/api/get-profile")).data?.userProfile;

	return (
		<div>
			<ProfileTab name={profileData.name} bio={profileData.bio} />
		</div>
	);
}
