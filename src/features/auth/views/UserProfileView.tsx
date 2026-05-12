import AuthUpdateProfileForm from '../components/AuthUpdateProfileForm';
import { PublicActionButton } from '../components/PublicActionButton';
import { AdminActionButton } from '../components/AdminActionButton';
import { CustomPermissionButton } from '../components/CustomPermissionButton';

export default function UserProfileView() {
  return (
    <div className="flex flex-col gap-6">
      <AuthUpdateProfileForm />

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-muted-foreground">Permission Tests</p>
        <div className="flex flex-wrap gap-3">
          <PublicActionButton />
          <AdminActionButton />
          <CustomPermissionButton />
        </div>
      </div>
    </div>
  );
}
