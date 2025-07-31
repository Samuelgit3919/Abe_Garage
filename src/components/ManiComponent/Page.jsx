import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './home/Home'
import About from './about/About'
import Service from './services/Service'
import Contact from './contact/Contact'

const Page = () => {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about_us' element={<About />} />
            <Route path='/service' element={<Service />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>

    )
}

export default Page
