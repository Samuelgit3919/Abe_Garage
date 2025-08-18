import trophy from "../../../assets/Icons/trophy.png"
import price from "../../../assets/Icons/price-tag.png"
import mechanic from "../../../assets/Icons/car.png"
import wrench from "../../../assets/Icons/wrench.png"
import carCol from "../../../assets/DisplayImages/car-col.png"
import tire from "../../../assets/DisplayImages/tire.jpg"
import Layout from "../../../Layout"

export default function Service({ onNavigate }) {
    const items = [
        { icon: mechanic, title: "Certified Expert Mechanics" },
        { icon: wrench, title: "Fast And Quality Service" },
        { icon: price, title: "Best Prices in Town" },
        { icon: trophy, title: "Awarded Workshop" },
    ]
    return (
        <Layout className="min-h-screen">

            {/* Hero Section */}
            <section className="relative h-64 bg-gray-900 flex items-center">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(17, 24, 39, 0.95) 0%, rgba(17, 24, 39, 0.7) 50%, rgba(17, 24, 39, 0.3) 100%), url(${tire})`,
                    }}
                />
                <div className="relative md:left-80  max-w-7xl  px-4 text-white">
                    <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                    <div className="flex items-center gap-2 text-sm">
                        <button onClick={() => onNavigate("home")} className="text-red-400 hover:underline">
                            Home
                        </button>
                        <span>→</span>
                        <span>Service</span>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Our Services
                            <div className="w-12 h-1 bg-red-600 mx-auto mt-2"></div>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,
                            going forward, a new normal that has evolved from generation X is on the runway heading towards a
                            streamlined cloud solution.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            { title: "Performance Upgrade", category: "SERVICE AND REPAIRS" },
                            { title: "Transmission Services", category: "SERVICE AND REPAIRS" },
                            { title: "Break Repair & Service", category: "SERVICE AND REPAIRS" },
                            { title: "Engine Service & Repair", category: "SERVICE AND REPAIRS" },
                            { title: "Tyre & Wheels", category: "SERVICE AND REPAIRS" },
                            { title: "Denting & Painting", category: "SERVICE AND REPAIRS" },
                        ].map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                                <p className="text-red-600 text-xs font-semibold mb-2">{service.category}</p>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                                <div className="flex justify-between items-center">
                                    <button
                                        onClick={() => onNavigate("services")}
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
                        ))}
                    </div>

                    {/* Why Choose Us & Additional Services */}
                    <div className="py-16 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
                                <hr className="max-w-[40px] font-bold  relative left-55 -top-7.5 text-red-600" />
                                <p className="text-gray-600 text-[18px] mb-8">
                                    Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,
                                    going forward, a new normal that has evolved from generation heading towards.
                                </p>

                                <div className="space-y-6">
                                    {items.map((item, index) => (
                                        <div key={index} className="flex items-center gap-4">
                                            <div className="w-12 h-12 flex items-center justify-center text-xl">
                                                <img src={item.icon} alt="" className="text-red-600  object-fit filter-red" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Services</h2>
                                <hr className="max-w-[40px] relative font-bold  left-68 -top-7.5 text-red-600" />
                                <span className="flex gap-6 items-start">

                                    <img src={carCol} alt="Workshop" className="rounded-lg mb-6 filter-red" />

                                    <div className="grid grid-cols-1 gap-1 text-sm px-2">
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
                                                <span className="text-red-500 text-[18px]">✓</span>
                                                <span className="text-gray-600 text-[18px]">{service}</span>
                                            </div>
                                        ))}
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="relative py-16 bg-gray-900 text-white overflow-hidden">
                {/* Background Image with Gradient Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(17, 24, 39, 0.95) 0%, rgba(17, 24, 39, 0.7) 50%, rgba(17, 24, 39, 0.3) 100%), url(${tire})`,
                    }}
                />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-md font-semibold mb-2">Working since 1992</p>
                        <hr className="w-[40px] h-0.5 bg-red-600 border-0 mb-4" />
                        <h2 className="text-4xl font-bold mb-6">
                            We are leader
                            <br />
                            in Car Mechanical Work
                        </h2>
                        <button className="flex items-center gap-4 group">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                                <svg className="w-6 h-6 text-red-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="text-sm text-gray-300 font-medium">WATCH INTRO VIDEO</p>
                                <span className="text-xs text-gray-400">ABOUT US</span>
                            </div>
                        </button>
                    </div>
                    <div className="hidden md:block">{/* This space can be used for additional content if needed */}</div>
                </div>
            </section>

            {/* Appointment Section */}
            <section className="py-12 bg-red-600 max-w-6xl mt-30 mb-60 mx-auto text-white">
                <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
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

        </Layout>
    )
}
