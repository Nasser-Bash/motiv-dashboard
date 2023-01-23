import React , {useState} from 'react'
import Form from 'react-bootstrap/Form';
import {  FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell  } from "@fortawesome/free-regular-svg-icons";
import { faBars  } from "@fortawesome/free-solid-svg-icons";
import { Button } from 'react-bootstrap';
function header({handleClick}) {
  
  return (
    <div className='header p-2 d-flex justify-content-between '>
      
        <Button onClick={()=>handleClick(true)} className='open-sidebar d-block d-lg-none'> <FontAwesomeIcon icon={faBars}/></Button>
       
        <Form.Control  className='w-50 my-auto  me-2 ' size="sm" type="text" placeholder="Search or type" />

       <span className='me-4 d-flex'>
        <i className='me-2 notification'><FontAwesomeIcon icon={faBell}/> </i>
        <img src='user.png' className='rounded-pill'/>
        </span>
    </div>
  )
}

export default header