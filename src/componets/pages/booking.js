import React from 'react'
import CarCard from "../widgets/Card";
import { Container, Form, Row } from 'react-bootstrap';
import { faSlidersH  } from "@fortawesome/free-solid-svg-icons";
import { faListAlt  } from "@fortawesome/free-regular-svg-icons";
import {  FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Booking = () => {
  return (
    <div className='booking '>   
                <Container fluid className=' p-3'>
                      <h3 className='title '> Booking</h3>
                      <div className='filtring my-3 d-md-flex d-block justify-content-between'>
                      <Form className='d-flex mb-3 '>
                            <Form.Select size="sm"  className='rounded-pill'> 
                               <option>New</option>
                            </Form.Select>

                            <Form.Select size="sm"  className='rounded-pill' >
                               <option>Toyota</option>
                            </Form.Select>
                          </Form>
                            <span className='display-style text-center'>
                            

                            <i className='rounded-pill gird-style p-2 me-1 bg-white  fa fa-th gird'></i>
                            <i className='rounded-pill gird-style p-2 active fa fa-sliders'></i>
                            </span>
                           
                      </div>
                      <CarCard/>
          </Container>
              </div>
             
         

         
       

     
  )
}

export default Booking