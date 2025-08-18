

import Layout from "../../../Layout"
import AdminSidebar from "../AdminSidebar"

export default function AdminAddCustomer({ currentAdminPage, onAdminNavigate }) {
    return (
        <Layout className="min-h-screen">

            <div className="flex">
                <AdminSidebar currentAdminPage={currentAdminPage} onAdminNavigate={onAdminNavigate} />

                <main className="flex-1 p-8 bg-gray-50">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Add a new customer
                            <div className="w-12 h-1 bg-red-600 mt-2"></div>
                        </h1>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-8 max-w-2xl">
                        <form className="space-y-6">
                            <div>
                                <input
                                    type="email"
                                    placeholder="Customer email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Customer first name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Customer last name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    placeholder="Customer phone (555-555-5555)"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                            >
                                ADD CUSTOMER
                            </button>
                        </form>
                    </div>
                </main>
            </div>


        </Layout>
    )
}
