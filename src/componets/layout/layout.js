import React from 'react'
import Header from "./header";
import Sidebar from "./Sidebar";
import {useLocation} from "react-router-dom";
function Layout({isactive,handleClick}) {
    const {pathname } = useLocation();
  return (
    <div>
                {pathname !== "/sign_in" && pathname !== "/sign_up" ? <Header handleClick={handleClick}/> : null}
                {pathname !== "/sign_in" && pathname !== "/sign_up" ?  <Sidebar isactive={isactive} handleClick={handleClick} /> : null}       
    </div>
  )
}

export default Layout