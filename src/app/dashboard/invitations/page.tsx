import MyInvitationsList from '@/features/organization/components/MyInvitationsList';

export default function InvitationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">My Invitations</h1>
        <p className="text-muted-foreground">Manage your pending organization invitations.</p>
      </div>
      <MyInvitationsList />
    </div>
  );
}
