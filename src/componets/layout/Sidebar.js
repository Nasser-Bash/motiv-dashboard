import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar , faXmark ,faListAlt , faRightToBracket , faWheelchairMove } from "@fortawesome/free-solid-svg-icons";


const Sidebar = ({handleClick,isactive}) => {
  return (
    <div className={`sidebar ${isactive===true ? "active" : ''}`}>
          <i className='close-sidebar d-block d-lg-none ' onClick={()=>handleClick(false)}><FontAwesomeIcon icon={faXmark}/></i>
            <img className='logo' src='logo.png'/>    
            <ul className='nav-list list-unstyled '>
            <Link to="/"> <li className='nav-item'> <FontAwesomeIcon className="me-2" icon={faListAlt}/><span >Dashboard  </span>  </li></Link>
            <Link to="/assests"> <li className='nav-item'> <FontAwesomeIcon className="me-2" icon={faWheelchairMove} /><span >Assets  </span>  </li></Link>
            <Link to="/booking"> <li className='nav-item'> <FontAwesomeIcon className="me-2" icon={faCar}/><span >Booking  </span>  </li></Link>
            <Link to="/sign_in"> <li className='nav-item '> <FontAwesomeIcon className="me-2 " icon={faRightToBracket}/><span >Log out  </span>  </li></Link> 
            </ul>
           
    </div>
  )
}

export default Sidebar