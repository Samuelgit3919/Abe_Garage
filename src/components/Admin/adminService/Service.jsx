
import Layout from "../../../Layout"
import AdminSidebar from "../AdminSidebar"

export default function AdminServices({ currentAdminPage, onAdminNavigate }) {
    const services = [
        {
            id: 1,
            name: "Oil change",
            description:
                "Every 5,000 kilometres or so, you need to change the oil in your car to keep your engine in the best possible shape.",
        },
        {
            id: 2,
            name: "Spark Plug replacement",
            description:
                "Spark plugs are a small part that can cause huge problems. Their job is to ignite the fuel in your engine, helping it start.",
        },
        {
            id: 3,
            name: "Fuel Cap tightening",
            description: 'Loose fuel caps are actually a main reason why the "check engine" light in a car comes on.',
        },
        {
            id: 4,
            name: "Oxygen Sensor replacement",
            description:
                "Oxygen sensors measure the concentration of oxygen in the exhaust gabs in order to optimize engine performance and emissions.",
        },
        {
            id: 5,
            name: "Brake work",
            description:
                "We all know why brake work is important, especially because one quarter of all Canadian car accidents are caused by a failure to stop.",
        },
        {
            id: 6,
            name: "Tire repairs and changes",
            description:
                "Without good, inflated tires, you loose speed, control, and fuel efficiency, hence the need to get them patched if there's a leak (for example, if you run over a nail), or replaced if they're too worn.",
        },
        {
            id: 7,
            name: "The Ignition System",
            description: "A car's ignition system includes its battery, starter, and the ignition itself.",
        },
        {
            id: 8,
            name: "Programing the camera software",
            description:
                "Without good, inflated tires, you loose speed, control, and fuel efficiency, hence the need to get them patched if there's a leak (for example, if you run over a nail), or replaced if they're too worn.",
        },
    ]

    return (
        <Layout className="min-h-screen">

            <div className="flex">
                <AdminSidebar currentAdminPage={currentAdminPage} onAdminNavigate={onAdminNavigate} />

                <main className="flex-1 p-8 bg-gray-50">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Services we provide
                            <div className="w-12 h-1 bg-red-600 mt-2"></div>
                        </h1>
                        <p className="text-gray-600 mt-4">
                            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,
                            going forward, a new normal that has evolved from generation X is on the runway heading towards a
                            streamlined cloud solution.
                        </p>
                    </div>

                    <div className="space-y-4 mb-8">
                        {services.map((service) => (
                            <div key={service.id} className="bg-white p-6 rounded-lg shadow-sm border">
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                                        <p className="text-gray-600 text-sm">{service.description}</p>
                                    </div>
                                    <div className="flex space-x-2 ml-4">
                                        <button className="text-red-600 hover:text-red-800">
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
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add New Service Form */}
                    <div className="bg-white rounded-lg shadow-sm p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Add a new service
                            <div className="w-12 h-1 bg-red-600 mt-2"></div>
                        </h2>

                        <form className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Service name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <textarea
                                    placeholder="Service description"
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                            >
                                ADD SERVICE
                            </button>
                        </form>
                    </div>
                </main>
            </div>


        </Layout>
    )
}
