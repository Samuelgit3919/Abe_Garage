
import carCol from "../../../assets/DisplayImages/car-col.png"
import tire from "../../../assets/DisplayImages/tire.jpg"
import Gear from "../../../assets/DisplayImages/Gear.jpg"
import Oil from "../../../assets/DisplayImages/oil.jpg"
import trophy from "../../../assets/Icons/trophy.png"
import price from "../../../assets/Icons/price-tag.png"
import mechanic from "../../../assets/Icons/car.png"
import wrench from "../../../assets/Icons/wrench.png"
import Layout from "../../../Layout"

export default function About({ onNavigate }) {
    const items = [
        { icon: mechanic, title: "Certified Expert Mechanics" },
        { icon: wrench, title: "Fast And Quality Service" },
        { icon: price, title: "Best Prices in Town" },
        { icon: trophy, title: "Awarded Workshop" },
    ]

    return (
        <Layout className="min-h-screen">

            {/* Rest of the component remains the same - just update the ABOUT US button */}
            {/* Hero Section */}
            <section className="relative h-64 bg-gray-900 flex items-center">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(17, 24, 39, 0.95) 0%, rgba(17, 24, 39, 0.7) 50%, rgba(17, 24, 39, 0.3) 100%), url(${tire})`,
                    }}
                />
                <div className="relative md:left-80  max-w-7xl  px-4 text-white">
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
                        <img src={tire} alt="Automotive tools" className="rounded-lg" />
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 items-center">
                        <div className="relative">
                            <span className="flex gap-2">
                                <img src={Oil} alt="gear image" />
                                <img src={Gear} alt="Automotive tools" className="rounded-lg" />
                            </span>
                            <div className="absolute text-red-600 font-bold -bottom-6 right-26 bg-white p-6 rounded-lg shadow-lg text-center">
                                <div className="text-3xl text-red-600">24</div>
                                <div className="text-sm">
                                    YEARS
                                    <br />
                                    EXPERIENCE
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-red-600 text-sm font-semibold mb-2">WELCOME TO OUR WORKSHOP</p>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">We have 24 years experience</h2>
                            <p className="text-gray-600 mb-4">
                                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,
                                going forward, a new normal that has evolved from generation X is on the runway heading towards a
                                streamlined cloud solution.
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
            <section className="py-16 bg-gray-50">
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
