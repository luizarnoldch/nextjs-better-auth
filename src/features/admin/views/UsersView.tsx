import { UsersTable } from "../components/UsersTable";

export function UsersView() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Users</h2>
        <p className="text-muted-foreground">
          Manage users and their roles in the system.
        </p>
      </div>
      <div className="rounded-md border">
        <UsersTable />
      </div>
    </div>
  );
}