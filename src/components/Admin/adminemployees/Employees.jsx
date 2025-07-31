


import AdminSidebar from "../AdminSidebar"
import Layout from "../../../Layout"

export default function AdminEmployees({ currentAdminPage, onAdminNavigate }) {
    const employees = [
        {
            id: 1,
            active: "Yes",
            firstName: "Employee",
            lastName: "Test",
            email: "testadudddg17@gmail.com",
            phone: "2023862702",
            addedDate: "05 - 19 - 2023 | 18:30",
            role: "Employee",
        },
        {
            id: 2,
            active: "Yes",
            firstName: "EmployeeName",
            lastName: "EmployeeLast",
            email: "employee@gmail.com",
            phone: "222",
            addedDate: "05 - 19 - 2023 | 16:40",
            role: "Manager",
        },
        {
            id: 3,
            active: "Yes",
            firstName: "Adugna",
            lastName: "Bekele",
            email: "aadug17@gmail.com",
            phone: "2023862702",
            addedDate: "05 - 16 - 2023 | 10:48",
            role: "Employee",
        },
        {
            id: 4,
            active: "Yes",
            firstName: "Admin",
            lastName: "Bekele",
            email: "adug17@gmail.com",
            phone: "2023862702",
            addedDate: "05 - 16 - 2023 | 10:44",
            role: "Admin",
        },
    ]

    return (
        <Layout className="min-h-screen">

            <div className="flex">
                <AdminSidebar currentAdminPage={currentAdminPage} onAdminNavigate={onAdminNavigate} />

                <main className="flex-1 p-8 bg-gray-50">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Employees
                            <div className="w-12 h-1 bg-red-600 mt-2"></div>
                        </h1>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Active
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
                                            Role
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Edit/Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {employees.map((employee) => (
                                        <tr key={employee.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.active}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.firstName}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.lastName}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.phone}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.addedDate}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.role}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => onAdminNavigate("employee-edit")}
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                        </svg>
                                                    </button>
                                                    <button className="text-red-600 hover:text-red-800">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
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
                    </div>
                </main>
            </div>


        </Layout>
    )
}
