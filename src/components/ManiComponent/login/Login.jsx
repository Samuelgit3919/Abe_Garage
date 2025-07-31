import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
import Layout from "../../../Layout"

export default function Login() {
    return (
        <Layout className="min-h-screen">
            <main className="py-16 bg-gray-50">
                <div className="max-w-md mx-auto px-4">
                    <div className="bg-white rounded-lg shadow-sm p-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-8">
                            Login to your account
                            <div className="w-12 h-1 bg-red-600 mt-2"></div>
                        </h1>

                        <form className="space-y-6">
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                            >
                                LOGIN
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
