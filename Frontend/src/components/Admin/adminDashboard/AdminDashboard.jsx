

import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
import AdminSidebar from "../AdminSidebar"
import Layout from "../../../Layout"

export default function AdminDashboard({ currentAdminPage, onAdminNavigate }) {
    return (
        <Layout className="min-h-screen">

            <div className="flex">
                <AdminSidebar currentAdminPage={currentAdminPage} onAdminNavigate={onAdminNavigate} />

                <main className="flex-1 p-8 bg-gray-50">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Admin Dashboard
                            <div className="w-12 h-1 bg-red-600 mt-2"></div>
                        </h1>
                        <p className="text-gray-600">
                            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,
                            going forward, a new normal that has evolved from generation X is on the runway heading towards a
                            streamlined cloud solution.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {/* All Orders */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <p className="text-xs text-gray-500 font-semibold mb-2">OPEN FOR ALL</p>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">All Orders</h3>
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => onAdminNavigate("orders")}
                                    className="text-red-600 text-sm font-semibold hover:underline"
                                >
                                    LIST OF ORDERS →
                                </button>
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M4 5a2 2 0 012-2v1a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2V3a2 2 0 012-2v1a2 2 0 00-2 2H6a2 2 0 00-2 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* New Orders */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <p className="text-xs text-gray-500 font-semibold mb-2">OPEN FOR LEADS</p>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">New Orders</h3>
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => onAdminNavigate("new-order")}
                                    className="text-red-600 text-sm font-semibold hover:underline"
                                >
                                    ADD ORDER →
                                </button>
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Employees */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <p className="text-xs text-gray-500 font-semibold mb-2">OPEN FOR ADMINS</p>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Employees</h3>
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => onAdminNavigate("employees")}
                                    className="text-red-600 text-sm font-semibold hover:underline"
                                >
                                    LIST OF EMPLOYEES →
                                </button>
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {/* Add Employee */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <p className="text-xs text-gray-500 font-semibold mb-2">OPEN FOR ADMINS</p>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Add Employee</h3>
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => onAdminNavigate("add-employee")}
                                    className="text-red-600 text-sm font-semibold hover:underline"
                                >
                                    READ MORE →
                                </button>
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Engine Service */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <p className="text-xs text-gray-500 font-semibold mb-2">SERVICE AND REPAIRS</p>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Engine Service & Repair</h3>
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => onAdminNavigate("services")}
                                    className="text-red-600 text-sm font-semibold hover:underline"
                                >
                                    READ MORE →
                                </button>
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Tyre & Wheels */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <p className="text-xs text-gray-500 font-semibold mb-2">SERVICE AND REPAIRS</p>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Tyre & Wheels</h3>
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => onAdminNavigate("services")}
                                    className="text-red-600 text-sm font-semibold hover:underline"
                                >
                                    READ MORE →
                                </button>
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Denting & Painting */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <p className="text-xs text-gray-500 font-semibold mb-2">SERVICE AND REPAIRS</p>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Denting & Painting</h3>
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => onAdminNavigate("services")}
                                    className="text-red-600 text-sm font-semibold hover:underline"
                                >
                                    READ MORE →
                                </button>
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Engine Service */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <p className="text-xs text-gray-500 font-semibold mb-2">SERVICE AND REPAIRS</p>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Engine Service & Repair</h3>
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => onAdminNavigate("services")}
                                    className="text-red-600 text-sm font-semibold hover:underline"
                                >
                                    READ MORE →
                                </button>
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Tyre & Wheels */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <p className="text-xs text-gray-500 font-semibold mb-2">SERVICE AND REPAIRS</p>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Tyre & Wheels</h3>
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => onAdminNavigate("services")}
                                    className="text-red-600 text-sm font-semibold hover:underline"
                                >
                                    READ MORE →
                                </button>
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </Layout>
    )
}
