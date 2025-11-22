import ProfileManager from "@/components/dashboard/ProfileManager";
import LinkManager from "@/components/dashboard/LinkManager";

export default function DashboardPage() {
	return (
		<main className="p-5">
			<h1 className="text-3xl font-bold mb-5">Dashboard</h1>
			<div className="flex gap-3">
				<ProfileManager />
				<LinkManager />
			</div>
		</main>
	);
}
