import UserTable from "@/components/Admin/UserTable";

export default function ManageUsersPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6 p-4">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">
            Manage Users
          </h1>
          <p className="text-slate-500 mt-1">
            Full control over all user accounts and roles.
          </p>
        </div>
      </div>

      {/* Table Component */}
      <UserTable />
    </div>
  );
}
