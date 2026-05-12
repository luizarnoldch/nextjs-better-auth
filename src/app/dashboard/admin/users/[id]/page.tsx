import { UserDetailView } from "@/features/admin/views/UserDetailView";

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  return <UserDetailView userId={resolvedParams.id} />;
}