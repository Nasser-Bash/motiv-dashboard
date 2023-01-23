import React from 'react'
import { Route,Routes } from "react-router-dom";
import Booking from "./pages/booking";
import Assests from "./pages/Assests";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
function mainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/booking" element={<Booking/>}></Route>
        <Route path="/assests" element={<Assests/>}></Route>
        <Route path="/sign_in" element={<SignIn/>}></Route>
        <Route path="/sign_up" element={<SignUp/>}></Route>
    </Routes>
  )
}

export default mainRoutes