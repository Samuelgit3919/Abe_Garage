"use client"

import { NavLink } from "react-router"

export default function AdminSidebar({ currentAdminPage, onAdminNavigate }) {
    const menuItems = [
        { id: "dashboard", label: "Dashboard", link: "/admin" },
        { id: "orders", label: "Orders", link: "/admin/orders" },
        { id: "new-order", label: "New order", link: "/admin/new-order" },
        { id: "add-employee", label: "Add employee", link: "/admin/add-employee" },
        { id: "employees", label: "Employees", link: "/admin/employees" },
        { id: "add-customer", label: "Add customer", link: "/admin/add-customer" },
        { id: "customers", label: "Customers", link: "/admin/customers" },
        { id: "service", label: "Services", link: "/admin/service" },

    ]

    return (
        <div className="w-64 bg-gray-800 text-white min-h-screen">
            <div className="p-4 border-b border-gray-700">
                <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">ADMIN MENU</h2>
            </div>
            <nav className="mt-4">
                {menuItems.map((item) => (
                    <NavLink to={item.link}>
                        <button
                            key={item.id}
                            // onClick={() => onAdminNavigate(item.id)}
                            className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-700 transition-colors ${currentAdminPage === item.id ? "bg-gray-700 border-r-2 border-red-600" : ""
                                }`}
                        >
                            {item.label}
                        </button>
                    </NavLink>
                ))}
            </nav>
        </div>
    )
}
