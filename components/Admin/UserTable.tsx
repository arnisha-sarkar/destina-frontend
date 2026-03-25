"use client";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/dashboard/stats")
      .then((res) => res.json())
      .then((data) => setUsers(data.data.usersList || []));
  }, []);

  const filteredUsers = users.filter((u: any) =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="bg-white rounded-2xl border overflow-hidden">
      <div className="p-4 flex justify-between items-center border-b">
        <h3 className="font-bold">Manage Users</h3>
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded-lg text-sm"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="w-full text-left">
        <thead className="bg-gray-50 text-xs uppercase">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Role</th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y">
          {filteredUsers.map((user: any) => (
            <tr key={user.id}>
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4 font-semibold">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
