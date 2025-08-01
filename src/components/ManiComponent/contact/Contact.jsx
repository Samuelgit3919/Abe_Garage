

import tire from "../../../assets/DisplayImages/tire.jpg"
import Layout from "../../../Layout"

export default function Contact({ onNavigate }) {
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
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <div className="flex items-center gap-2 text-sm">
                        <button onClick={() => onNavigate("home")} className="text-red-400 hover:underline">
                            Home
                        </button>
                        <span>→</span>
                        <span>contact</span>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
                    {/* Map */}
                    <div>
                        <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                            <img
                                src="/placeholder.svg?height=400&width=600"
                                alt="Map location"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Address</h2>
                        <p className="text-gray-600 mb-8">
                            Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate
                            one-to-one customer service.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Address:</h3>
                                    <p className="text-gray-600">54B, Tailstoi Town 5238 MT, La city, IA 5224</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Email:</h3>
                                    <p className="text-gray-600">contact@buildtruck.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Phone:</h3>
                                    <p className="text-gray-600">1800 456 7890 / 1254 897 3654</p>
                                </div>
                            </div>
                        </div>
                    </div>
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
