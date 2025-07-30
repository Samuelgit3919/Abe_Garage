import Logo from "../../assets/BannerImage/logo.png"

export default function Header({ currentPage = "home", onNavigate }) {
    return (
        <>
            {/* Top Bar */}
            <div className="flex items-center">
                <div className="bg-red-600 text-white w-1/5 px-4 py-2">
                    <p>Enjoy the Beso ehile we fix your car</p>
                </div>
                <div className="w-4/5 bg-[#07194A] text-white py-2 px-4 flex items-center justify-between">
                    <p>Monday - Saturday 7:00AM - 6:00PM</p>
                    <p>Welcome Admin</p>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-white shadow-sm ">
                <div className="mx-auto px-8 py-4 flex justify-between w-full items-center">
                    <div className="flex items-center cursor-pointer" onClick={() => onNavigate("home")}>
                        <img src={Logo} alt="logo image" />
                    </div>

                    <div className="flex justify-between items-center gap-4">
                        <nav className="hidden md:flex items-center space-x-8">
                            <button
                                onClick={() => onNavigate("home")}
                                className={`font-medium ${currentPage === "home" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
                            >
                                HOME
                            </button>
                            <button
                                onClick={() => onNavigate("about")}
                                className={`font-medium ${currentPage === "about" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
                            >
                                ABOUT US
                            </button>
                            <button
                                onClick={() => onNavigate("services")}
                                className={`font-medium ${currentPage === "services" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
                            >
                                SERVICES
                            </button>
                            <button
                                onClick={() => onNavigate("contact")}
                                className={`font-medium ${currentPage === "contact" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
                            >
                                CONTACT US
                            </button>
                            <button
                                onClick={() => onNavigate("order-detail")}
                                className={`font-medium ${currentPage === "order-detail" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
                            >
                                ADMIN
                            </button>
                        </nav>

                        <button
                            onClick={() => onNavigate("login")}
                            className="bg-red-600 text-white px-6 py-2 rounded font-medium hover:bg-red-700"
                        >
                            SIGN IN
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}
