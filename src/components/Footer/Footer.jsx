export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Contact Info Bar */}
            <div className="bg-gray-800 py-6">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div>
                            <div className="font-semibold">54B, Tailstoi Town 5238 MT,</div>
                            <div className="text-gray-300">La city, IA 522364</div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <div>
                            <div className="font-semibold">Email us :</div>
                            <div className="text-gray-300">contact@autorex.com</div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                        </div>
                        <div>
                            <div className="font-semibold">Call us on :</div>
                            <div className="text-gray-300">+ 1800 456 7890</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
                    <div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the
                            digital divide additional clickthroughs.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Appointment
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Our Services</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Performance Upgrade
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Transmission Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Break Repair & Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Engine Service & Repair
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Tyre & Wheels
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
                        <p className="text-gray-300 text-sm mb-4">Get latest updates and offers.</p>
                        <div className="flex space-x-3">
                            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer">
                                <span className="text-xs">f</span>
                            </div>
                            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer">
                                <span className="text-xs">in</span>
                            </div>
                            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer">
                                <span className="text-xs">t</span>
                            </div>
                            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer">
                                <span className="text-xs">G+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
