import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from './components/Admin/adminDashboard/AdminDashboard'
import Login from './components/ManiComponent/login/Login'
import AdminAddEmployee from './components/Admin/adminAddemployee/AddEmployee'
import AdminEmployees from './components/Admin/adminemployees/Employees'
import AdminAddCustomer from './components/Admin/adminCustomer/AddCustomer'
import AdminServices from './components/Admin/adminService/Service'
import AdminCustomers from './components/Admin/adminCustomer/Customers'
import Page from './components/ManiComponent/Page'
import AdminLayout from './components/Admin/AdminLayout'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Page />} />
        <Route path='/admin/*' element={<AdminLayout />} />
      </Routes>

      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>


    </Router>
  )
}

export default App
