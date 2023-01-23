import React from 'react';
import Circleprogess from "../widgets/Circleprogess";
import BarHChart from "../widgets/BarChart";
import LineAreaChart from "../widgets/LineAreaChart";


import { Container, Row , Card ,Col } from 'react-bootstrap';
import { faBolt ,faArrowsAltV , faDroplet,faRetweet  } from "@fortawesome/free-solid-svg-icons";
import {  FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Dashboard = () => {
 
  return (
 
           <div className='Dashboard '>
               <h2 className='title p-2'>Dashboard</h2>   
          
                <Container fluid className='p-3 '>    
                  <Row className='cards mb-3'>
                  <Circleprogess  value={45} theme={"dark"} title={'Energy'} icon={faBolt}/>
                  <Circleprogess value={15} theme={"white"} title={'Range'} color={"#FF7E86"} icon={faArrowsAltV}/>
                  <Circleprogess value={9} theme={"white"} title={'Break fluid'} color={"#A162F7"} icon={faDroplet}/>
                  <Circleprogess value={25} theme={"white"} title={'Tire Wear'} color={"#F6CC0D"} icon={faArrowsAltV}/>
                  </Row>

                      <div className='charts nb-3 '>
                        <Row>
                          <Col md={6}>
                          <div className='chart rounded mb-3 p-3'>
                          <BarHChart/>
                          </div>
                         
                          </Col>

                          <Col md={6}>
                          <div className='chart rounded mb-3 p-3'>
                          <LineAreaChart/>
                          </div>
                          </Col>
                        </Row>
                     
                      
                      </div>
    <div className='cars-card '>
<Row>
                  <Col sm   className='mb-3 text-white '>
          <Card className="p-2 " >
        <Card.Body>
          <span className='d-flex justify-content-between'>
                  <h6 className='subtitle'><img src='Vector.svg'/>64% Recommend</h6>
                  <i className='add-to-wishlist' > <FontAwesomeIcon  className='me-1' /></i>
          </span>
          
          
          <Card.Img className='mb-2'  src="car.png" />
          <Card.Title >Mini Cooper</Card.Title>
          
          <div className='d-flex justify-content-between mt-3 '>
              <span className=' d-flex icons'>
          <i className=''><FontAwesomeIcon className='me-1' icon={faRetweet}/></i>
            <p className='me-1'>130K</p>
          <img  className='me-1' src='plus.svg'/>
          <i className=''><FontAwesomeIcon className='me-1' icon={faBolt}/></i>
          </span>
                  <h6 className='price'>$32/h</h6>
          </div>
        </Card.Body>
          </Card>
      </Col>

      <Col sm className='mb-3 text-white'>
          <Card className="p-2 " style={{ background: "#E3ECF1"}}>
        <Card.Body>
          <span className='d-flex justify-content-between'>
          <h6 className='subtitle'><img src='Vector.svg'/> 74% Recommend</h6>
                  <i className='add-to-wishlist' > <FontAwesomeIcon  className='me-1' /></i>
          </span>
          
          
          <Card.Img className='mb-2'  src="maruti-suzuki-suzuki-swift-car-suzuki-9c5818c39cb279f9dc7f844d7769288f.png" />
          <Card.Title >Porsche 911 Carrera</Card.Title>
          
          <div className='d-flex justify-content-between mt-3 '>
              <span className=' d-flex icons'>
          <i className=''><FontAwesomeIcon className='me-1' icon={faRetweet}/></i>
            <p className='me-1'>130K</p>
            <img  className='me-1' src='plus.svg'/>
          <i className=''><FontAwesomeIcon className='me-1' icon={faBolt}/></i>
          </span>
                  <h6 className='price'>$28/h</h6>
          </div>
        </Card.Body>
          </Card>
      </Col>
      <Col sm  className='mb-3 text-white'>
          <Card className="p-2 " >
        <Card.Body>
          <span className='d-flex justify-content-between'>
          <h6 className='subtitle'><img src='Vector.svg'/> 74% Recommend</h6>
                  <i className='add-to-wishlist' > <FontAwesomeIcon  className='me-1' /></i>
          </span>
          
          
          <Card.Img className='mb-2'  src="mini-countryman-car-bmw-mini-cooper-mini-406b2a24c59d99a8096f336f22982573.png" />
          <Card.Title >Porsche 911 Carrera</Card.Title>
          
          <div className='d-flex justify-content-between mt-3 '>
              <span className=' d-flex icons'>
          <i className=''><FontAwesomeIcon className='me-1' icon={faRetweet}/></i>
            <p className='me-1'>130K</p>
            <img  className='me-1' src='plus.svg'/>
          <i className=''><FontAwesomeIcon className='me-1' icon={faBolt}/></i>
          </span>
                  <h6 className='price'>$28/h</h6>
          </div>
        </Card.Body>
          </Card>
      </Col>

      
     
      </Row>
      </div>
      
                </Container>
             
              </div>
   
  )
}

export default Dashboard