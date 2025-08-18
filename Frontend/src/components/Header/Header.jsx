import Logo from "../../assets/BannerImage/logo.png"
import { NavLink } from "react-router"

export default function Header() {
    return (
        <>
            {/* Top Bar */}
            <header className="fixed w-full z-50 mb-12">

                <div className="flex items-center">
                    <div className="bg-red-600 text-white w-1/5 px-4 py-2">
                        <p>Enjoy the Best while we fix your car</p>
                    </div>
                    <div className="w-4/5 bg-[#07194A] text-white py-2 px-4 flex items-center justify-between">
                        <p>Monday - Saturday 7:00AM - 6:00PM</p>
                        <p>Welcome Admin</p>
                    </div>
                </div>

                {/* Main Header */}
                <div className="bg-white shadow-sm">
                    <div className="mx-auto px-8 py-4 flex justify-between w-full items-center">
                        <div className="flex items-center cursor-pointer" onClick={() => onNavigate("home")}>
                            <img src={Logo} alt="logo" />
                        </div>

                        <div className="flex justify-between items-center gap-4">
                            <nav className="hidden md:flex items-center space-x-8">
                                <NavLink
                                    to="/"
                                    onClick={() => onNavigate("home")}
                                    className={({ isActive }) => `font-medium ${isActive ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
                                >
                                    HOME
                                </NavLink>
                                <NavLink
                                    to="/about_us"
                                    className={({ isActive }) => `font-medium ${isActive ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
                                >
                                    ABOUT US
                                </NavLink>
                                <NavLink
                                    to="/service"
                                    className={({ isActive }) => `font-medium ${isActive ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
                                >
                                    SERVICES
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => `font-medium ${isActive ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
                                >
                                    CONTACT US
                                </NavLink>
                                <NavLink
                                    to="/admin"
                                    className={({ isActive }) => `font-medium ${isActive ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
                                >
                                    ADMIN
                                </NavLink>
                            </nav>

                            <NavLink
                                to="/login"
                                className="bg-red-600 text-white px-6 py-2 rounded font-medium hover:bg-red-700"
                            >
                                SIGN IN
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
