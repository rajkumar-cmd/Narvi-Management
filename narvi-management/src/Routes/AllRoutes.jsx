import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import ResourceHub from "./ResourceHub"
import Pricing from "./Pricing"
import Contact from "./ContactSales"
import Login from "./Login"
import Signup from "./Signup"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/resourcehub" element={<ResourceHub/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
    </Routes>
  )
}

export default AllRoutes