"use client"

import Header from "./components/header"
import Footer from "./components/footer"

export default function About({ currentPage, onNavigate }) {
    return (
        <div className="min-h-screen">
            <Header currentPage={currentPage} onNavigate={onNavigate} />

            {/* Rest of the component remains the same - just update the ABOUT US button */}
            {/* Hero Section */}
            <section className="relative h-64 bg-gray-900 flex items-center">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-70"
                    style={{
                        backgroundImage: `url('/placeholder.svg?height=300&width=1200')`,
                    }}
                />
                <div className="relative max-w-7xl mx-auto px-4 text-white">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <div className="flex items-center gap-2 text-sm">
                        <button onClick={() => onNavigate("home")} className="text-red-400 hover:underline">
                            Home
                        </button>
                        <span>→</span>
                        <span>About Us</span>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            We are highly skilled mechanics for your car repair
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,
                            going forward, a new normal that has evolved from generation X is on the runway heading towards a
                            streamlined cloud solution. User generated content in real-time will have multiple touchpoints for
                            offshoring.
                        </p>
                        <p className="text-gray-600">
                            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the
                            digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information
                            highway will close the loop on focusing.
                        </p>
                    </div>
                    <div>
                        <img src="/placeholder.svg?height=400&width=500" alt="Automotive tools" className="rounded-lg" />
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img src="/placeholder.svg?height=400&width=500" alt="Automotive tools" className="rounded-lg" />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg text-center">
                                <div className="text-3xl font-bold text-red-600">24</div>
                                <div className="text-sm text-gray-600">
                                    YEARS
                                    <br />
                                    EXPERIENCE
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-red-600 text-sm font-semibold mb-2">Welcome to Our workshop</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">We have 24 years experience</h2>
                            <p className="text-gray-600 mb-4">
                                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,
                                going forward, a new normal that has evolved from generation X is on the runway heading towards a
                                streamlined cloud solution. User generated content in real-time will have multiple touchpoints for
                                offshoring.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the
                                digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information
                                highway will close the loop on focusing.
                            </p>
                            <button
                                onClick={() => onNavigate("about")}
                                className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700"
                            >
                                ABOUT US →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us & Additional Services */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Why Choose Us
                            <div className="w-12 h-1 bg-red-600 mt-2"></div>
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,
                            going forward, a new normal that has evolved from generation heading towards.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: "👨‍🔧", title: "Certified Expert Mechanics" },
                                { icon: "⚡", title: "Fast And Quality Service" },
                                { icon: "💰", title: "Best Prices in Town" },
                                { icon: "🏆", title: "Awarded Workshop" },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-xl">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Additional Services
                            <div className="w-12 h-1 bg-red-600 mt-2"></div>
                        </h2>
                        <img src="/placeholder.svg?height=300&width=400" alt="Workshop" className="rounded-lg mb-6" />

                        <div className="grid grid-cols-1 gap-2 text-sm">
                            {[
                                "General Auto Repair & Maintenance",
                                "Transmission Repair & Replacement",
                                "Tire Repair and Replacement",
                                "State Emissions Inspection",
                                "Break Job / Break Services",
                                "Electrical Diagnostics",
                                "Fuel System Repairs",
                                "Starting and Charging Repair",
                                "Steering and Suspension Work",
                                "Emission Repair Facility",
                                "Wheel Alignment",
                                "Computer Diagnostics Testing",
                            ].map((service, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span>
                                    <span className="text-gray-600">{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-red-600 text-sm font-semibold mb-2">Working since 1992</p>
                        <h2 className="text-3xl font-bold mb-6">
                            We are leader
                            <br />
                            in Car Mechanical Work
                        </h2>
                        <button className="bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-red-700">
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            WATCH INTRO VIDEO
                            <span className="text-xs">ABOUT US</span>
                        </button>
                    </div>
                    <div>
                        <img src="/placeholder.svg?height=400&width=500" alt="Car tires" className="rounded-lg" />
                    </div>
                </div>
            </section>

            {/* Appointment Section */}
            <section className="py-12 bg-red-600 text-white">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Schedule Your Appointment Today</h2>
                        <p className="text-red-100">Your Automotive Repair & Maintenance Service Specialist</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="text-3xl font-bold">1800.456.7890</div>
                        <button
                            onClick={() => onNavigate("contact")}
                            className="bg-white text-red-600 px-6 py-3 rounded font-semibold hover:bg-gray-100"
                        >
                            CONTACT US →
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
