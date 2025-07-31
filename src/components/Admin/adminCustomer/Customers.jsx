

import { useState } from "react"
import AdminSidebar from "../AdminSidebar"
import Layout from "../../../Layout"

export default function AdminCustomers({ currentAdminPage, onAdminNavigate }) {
    const [searchTerm, setSearchTerm] = useState("")

    const customers = [
        {
            id: 38,
            firstName: "Tewedaj",
            lastName: "Shola",
            email: "Tewdaj@evangadi.com",
            phone: "90987766",
            addedDate: "05 - 31 - 2023 | 14:15",
            active: "Yes",
        },
        {
            id: 37,
            firstName: "Jasmine",
            lastName: "Albeshir",
            email: "jasmine@gmail.com",
            phone: "240835487",
            addedDate: "05 - 24 - 2023 | 16:25",
            active: "Yes",
        },
        {
            id: 36,
            firstName: "Edom",
            lastName: "Debebe",
            email: "edom@gmail.com",
            phone: "2402542541",
            addedDate: "05 - 22 - 2023 | 20:00",
            active: "Yes",
        },
        {
            id: 35,
            firstName: "Bogey",
            lastName: "Big",
            email: "bbiggt@marketwatch.com",
            phone: "168-190-6935",
            addedDate: "05 - 20 - 2023 | 10:00",
            active: "Yes",
        },
        {
            id: 34,
            firstName: "Skip",
            lastName: "Riseley",
            email: "sriseley@forbes.com",
            phone: "494-519-5915",
            addedDate: "05 - 20 - 2023 | 10:00",
            active: "Yes",
        },
        {
            id: 33,
            firstName: "Seline",
            lastName: "Gayton",
            email: "sgayton@stumbleupon.com",
            phone: "492-472-6810",
            addedDate: "05 - 20 - 2023 | 10:00",
            active: "Yes",
        },
        {
            id: 32,
            firstName: "Moe",
            lastName: "Francais",
            email: "mfrancais@goodreads.com",
            phone: "510-303-9632",
            addedDate: "05 - 20 - 2023 | 10:00",
            active: "Yes",
        },
        {
            id: 31,
            firstName: "Dewitt",
            lastName: "Algy",
            email: "dalgy@icm.com",
            phone: "371-354-3166",
            addedDate: "05 - 20 - 2023 | 10:00",
            active: "Yes",
        },
        {
            id: 30,
            firstName: "Fielding",
            lastName: "Jendrusch",
            email: "fjendrusch@homestead.com",
            phone: "420-212-2060",
            addedDate: "05 - 20 - 2023 | 10:00",
            active: "Yes",
        },
        {
            id: 29,
            firstName: "Shaine",
            lastName: "Craghead",
            email: "scraghead@ucoz.com",
            phone: "771-418-1607",
            addedDate: "05 - 20 - 2023 | 10:00",
            active: "Yes",
        },
    ]

    return (
        <Layout className="min-h-screen">

            <div className="flex">
                <AdminSidebar currentAdminPage={currentAdminPage} onAdminNavigate={onAdminNavigate} />

                <main className="flex-1 p-8 bg-gray-50">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-6">
                            Customers
                            <div className="w-12 h-1 bg-red-600 mt-2"></div>
                        </h1>

                        {/* Search Bar */}
                        <div className="relative mb-6">
                            <input
                                type="text"
                                placeholder="Search for a customer using first name, last name, email address or phone number"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            First Name
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Last Name
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Phone
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Added Date
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Active
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Edit
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {customers.map((customer) => (
                                        <tr key={customer.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.firstName}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.lastName}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.phone}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.addedDate}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.active}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => onAdminNavigate("customer-edit")}
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={() => onAdminNavigate("customer-profile")}
                                                        className="text-green-600 hover:text-green-800"
                                                    >
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200">
                            <div className="flex-1 flex justify-between sm:hidden">
                                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                    Previous
                                </button>
                                <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                    Next
                                </button>
                            </div>
                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div className="flex space-x-2">
                                    <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800">« First</button>
                                    <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800">‹ Previous</button>
                                    <button className="px-3 py-1 text-sm bg-gray-800 text-white rounded">1</button>
                                    <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800">Next ›</button>
                                    <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800">Last »</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>


        </Layout>
    )
}
