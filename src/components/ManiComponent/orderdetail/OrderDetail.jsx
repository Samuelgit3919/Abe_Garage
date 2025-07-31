
import Layout from "../../../Layout"

export default function OrderDetail() {
    return (
        <Layout className="min-h-screen">

            {/* Rest of the component remains the same */}
            <main className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h1 className="text-3xl font-bold text-gray-900">
                                Jasmine Albeshir
                                <div className="w-12 h-1 bg-red-600 mt-2"></div>
                            </h1>
                            <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                                In progress
                            </span>
                        </div>
                        <p className="text-gray-600">
                            You can track the progress of your order using this page. We will constantly update this page to let you
                            know how we are progressing. As soon as we are done with the order, the status will turn green. That
                            means, your car is ready for pickup.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Customer Info */}
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">CUSTOMER</h2>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Jasmine Albeshir</h3>

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Email</span>
                                    <span className="text-gray-900">jasmine@gmail.com</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Phone Number</span>
                                    <span className="text-gray-900">240835487</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Active Customer</span>
                                    <span className="text-gray-900">Yes</span>
                                </div>
                            </div>
                        </div>

                        {/* Car Info */}
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">CAR IN SERVICE</h2>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">BMW X7 (Gold)</h3>

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Vehicle tag</span>
                                    <span className="text-gray-900">01014D</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Vehicle year</span>
                                    <span className="text-gray-900">2020</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Vehicle mileage</span>
                                    <span className="text-gray-900">12000</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-semibold text-gray-900">BMW X7</h2>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-6">Requested service</h3>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Tire repairs and changes",
                                    description:
                                        "Without good inflated tires, you loose speed, control, and fuel efficiency, hence the need to get them patched if there's a leak (for example, if you run over a nail), or replaced if they're too worn.",
                                },
                                {
                                    title: "Brake work",
                                    description:
                                        "We all know why brake work is important, especially because one quarter of all Canadian car accidents are caused by a failure to stop.",
                                },
                                {
                                    title: "Spark Plug replacement",
                                    description:
                                        "Spark plugs are a small part that can cause huge problems. Their job is to ignite the fuel in your engine, helping it start.",
                                },
                                {
                                    title: "Brake work",
                                    description:
                                        "We all know why brake work is important, especially because one quarter of all Canadian car accidents are caused by a failure to stop.",
                                },
                                {
                                    title: "Additional request",
                                    description: "Additional",
                                },
                            ].map((service, index) => (
                                <div
                                    key={index}
                                    className="flex items-start justify-between py-4 border-b border-gray-200 last:border-b-0"
                                >
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                                        <p className="text-gray-600 text-sm">{service.description}</p>
                                    </div>
                                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold ml-4">
                                        In progress
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

        </Layout>
    )
}
