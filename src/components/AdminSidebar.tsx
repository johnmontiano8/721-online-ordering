import React from "react";
import Link from "next/link";

interface AdminSidebarProps {
  children: React.ReactNode;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <hr className="my-4" />
        </div>
        <nav className="mt-2">
          <Link
            href="/admin/sales"
            className="block px-4 py-2 text-gray-600 hover:bg-orange-200"
          >
            Sales Overview
          </Link>
          <Link
            href="/admin/inventory"
            className="block px-4 py-2 text-gray-600 hover:bg-orange-200"
          >
            Inventory Management
          </Link>
          <Link
            href="/admin/orders"
            className="block px-4 py-2 text-gray-600 hover:bg-orange-200"
          >
            Order Management
          </Link>
          <Link
            href="/admin/users"
            className="block px-4 py-2 text-gray-600 hover:bg-orange-200"
          >
            User Management
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
};

export default AdminSidebar;
