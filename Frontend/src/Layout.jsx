import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="content relative top-30 ">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
