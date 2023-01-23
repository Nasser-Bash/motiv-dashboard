import React , {useState} from 'react'
import {Card ,Col, Row} from 'react-bootstrap';
import {faUser} from "@fortawesome/free-regular-svg-icons";
import { faHeart ,faRetweet } from "@fortawesome/free-solid-svg-icons";
import {  FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CarCard = () => {
  const items = [
    {id:1,image:'2014-mercedes-benz-m-class-2012-mercedes-benz-m-class-2008-mercedes-benz-m-class-sport-utility-vehicle-mercedes-car-png-image-8230b0372dd015bcf5312eb17e2751ee.png'},
    {id:2,image:'car-audi-a3-audi-a4-car-3822c2bc08e2c2bce1d8ead0e70c7ddb.png'},
    {id:3,image:'maruti-suzuki-dzire-car-suzuki-ertiga-swift-dzire-f8a7d4ae19bd1c349dc080d9081ffd31.png'},
    {id:4,image:'suzuki-ertiga-maruti-car-suzuki-ciaz-suzuki-dcac04d3f676c91c7ca6f2d195b86ff3.png'},
    {id:5,image:'toyota-innova-toyota-avanza-car-rush-toyota-seven-cars-a3650fca54041ac1aaae4fe013ac79ca 1.png'},
    {id:6,image:'white car.png'},
    {id:7,image:'car-audi-a3-audi-a4-car-3822c2bc08e2c2bce1d8ead0e70c7ddb.png'},
    {id:8,image:'2014-mercedes-benz-m-class-2012-mercedes-benz-m-class-2008-mercedes-benz-m-class-sport-utility-vehicle-mercedes-car-png-image-8230b0372dd015bcf5312eb17e2751ee.png'},
    {id:9,image:'maruti-suzuki-dzire-car-suzuki-ertiga-swift-dzire-f8a7d4ae19bd1c349dc080d9081ffd31.png'}];
    
   
    const [fillheart, setfillheart] = useState(new Array(items.length).fill(false));
    const handleSelectCategory = (index) => {
      let result = [...fillheart];
      result[index] = !result[index];
      setfillheart(result);
   }
    
   
  return (
    <Row>
     { items.map((item,i)=>{
        return(
          <Col  sm={6} lg={4} className='mb-3 '>
          <Card className="p-2 " >
        <Card.Body>
          <span className='d-flex justify-content-between'>
                  <Card.Title>Porshe 718 Cayman S</Card.Title>
                  <i className='add-to-wishlist' onClick={()=>handleSelectCategory(i)}> <FontAwesomeIcon style={{ color :fillheart[i]  ?  "red" : "" }} className='me-1' icon={faHeart}/></i>
          </span>
          
          <Card.Subtitle className="mb-2 ">Coupe</Card.Subtitle>
          <Card.Img  src={item.image} />
            
          
          <div className='d-flex justify-content-between mt-3 '>
              <span>
          <i className='me-3'><FontAwesomeIcon className='me-1' icon={faUser}/>4</i>
          <i className=''><FontAwesomeIcon className='me-1' icon={faRetweet}/>Manual</i>
          </span>
                  <h6 className='price'>$400/d</h6>
          </div>
        </Card.Body>
          </Card>
      </Col>
        )
      })}
   
   </Row>
    
  )
}

export default CarCard