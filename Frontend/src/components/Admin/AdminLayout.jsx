import React from 'react'
import { Routes, Route } from 'react-router'
import Dashboard from './adminDashboard/AdminDashboard'
import AdminAddEmployee from './adminAddemployee/AddEmployee'
import AdminEmployees from './adminemployees/Employees'
import AdminAddCustomer from './adminCustomer/AddCustomer'
import AdminCustomers from './adminCustomer/Customers'
import AdminServices from './adminService/Service'

const AdminLayout = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/orders' element={<Dashboard />} />
            <Route path='/new-order' element={<Dashboard />} />
            <Route path='/add-employee' element={<AdminAddEmployee />} />
            <Route path='/employees' element={<AdminEmployees />} />
            <Route path='/add-customer' element={<AdminAddCustomer />} />
            <Route path='/add-employee' element={<AdminAddEmployee />} />
            <Route path='/customers' element={<AdminCustomers />} />
            <Route path='/service' element={<AdminServices />} />
        </Routes>
    )
}

export default AdminLayout
