import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React ,{useState,useEffect} from 'react'
import { Form, Col, Container, Row ,Card, Button,Table} from "react-bootstrap";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Addform from "../widgets/Addform";
import LineAreaChart from "../widgets/LineAreaChart";
function Assests() {
  const [activeform, setactiveform] = useState();
  const openForm = (active)=>{
    setactiveform(active)
  }
  const [addReminder, setaddReminder] = useState(
    {
      Description:'',
      Notify:'',
      Overdue:'',
      Due:''
   
    }
  );
  const [allreminder, setallreminder] = useState([]);
  const addnewreminder=(e)=>{
    setaddReminder({...addReminder,[e.target.name] : e.target.value});
  }
  const handelSubmit=(event)=>{
    setallreminder([...allreminder,addReminder])
    event.preventDefault();
  }

  return (
    <div className='assests'>
        <Container fluid className=' p-3'>
                      <h3 className='title '>Assests</h3>
                      <div className='assest-content  d-md-flex p-3 '> 
                                <div className='car-detalies  rounded p-3 mb-5'>
                                  <div className=' d-flex justify-content-around'>
                                  <div className='p-3 '>
                                        <span>
                                            <p>Fuel Usage</p>
                                            <h6>2903.89 Ltr</h6>
                                          </span>

                                          <span>
                                            <p>KM Driven</p>
                                            <h6>2903.89 Ltr</h6>
                                          </span>
                                         
                                    </div>
                                    <div className='p-3'>
                                   
                                          <span>
                                          <p>KM Driven</p>
                                                  <h6>2903.89 Ltr</h6>
                                          </span>
                                          <span>
                                          <p>Top Speed</p>
                                          <h6>$5.2K</h6>
                                          </span>
                                          
                                    </div>
                                    </div>
                                    <img src='car-top-view-2c7169ad4f3f8ddd6bff13b3de4d09e8 1.png' style={{width:'100%'}}/>
                                </div>

                                <div className='detaleis w-100  ms-md-2  '>
                               
                               <div className='chart mb-3'>
                                <LineAreaChart/>
                               </div>

                               <div className=' mb-3' >
                                    <Row >
                                    <Col xl={6}  md={12} sm={6} className='mb-2'>
                                          <Card className='Noties p-2 rounded' >
                                            <h3 className='p-2'>Noties</h3>   
                                          <div className='d-flex '>
                                                      <i className='me-2 p-1'><FontAwesomeIcon icon={faXmark}/></i>
                                                      <span>
                                                        <h6>Monday, 6th Apirl 2020</h6>
                                                        <p>Book for General Service</p>
                                                        <p className='Completed p-1 w-75 rounded text-center'>Completed</p>
                                                        </span>
                                                        </div>
                                                  
                                                        <div className='d-flex '>
                                                      <i className='me-2  p-1'><FontAwesomeIcon icon={faXmark}/></i>
                                                      <span>
                                                        <h6>Thursday, 24th October 2021</h6>
                                                        <p>Vehicle LV 001 has been marked for recall.</p>
                                                        <p className='not-Completed p-1 w-75 rounded text-center'>14:07-21/11/2021</p>
                                                        </span>
                                                        </div>

                                                        <div className='d-flex '>
                                                      <i className='me-2  p-1'><FontAwesomeIcon icon={faXmark}/></i>
                                                      <span>
                                                        <h6>Monday, 13th August 2018</h6>
                                                        <p>Maintenance Completed, Collect</p>
                                                        <p className='not-Completed p-1 w-75 rounded text-center'>14:07-21/11/2021</p>
                                                        </span>
                                                        </div>
                                          </Card>
                                      </Col>

                                      <Col xl={6}  md={12} sm={6} className='mb-2'>
                                          <Card className='Available-Sensors p-3 rounded' >
                                            <h3 className='p-2'>Available Sensors</h3>   
                                            <Form className='p-2'>
                
                  <div key={`default-checkbox}`} className="mb-3">
                    <Form.Check  checked
                     className='mb-3'
                      type="checkbox"
                      label="Asset - Fuel Consumed (10"
                      id='1'
                      
                    />
                    <Form.Check 
                     className='mb-3'
                      type="checkbox"
                      id='2'
                      label="Asset - Odometer (km)"
                      
                    />
                    <Form.Check 
                   className='mb-3'
                      type="checkbox"
                      id='3'
                      label="Asset - Runtime (km)"
                      
                    />
                    <Form.Check 
                    className='mb-3'
                      type="checkbox"
                      id='4'
                      label="Asset - Speed (hr)"
                      
                    />
                    <Form.Check 
                    className='mb-3'
                      type="checkbox"
                      id='5'
                      label="Engine Temperature (deg C)"
                      
                    />
                    <Button className='p-2' style={{backgroundColor:'#FF6370' , border:'none'}}>See ALL</Button>
        </div>
    </Form>
                                          </Card>
                                      </Col>
                                    </Row>
                              </div>

                             <div className='Reminder rounded p-3'>
                              <span className='d-flex justify-content-between mb-3 '>
                              <h3>Reminder</h3>
                                <Button onClick={()=>openForm(true)}>Add new</Button>
                              </span>
                                
                                <div className='overflow-auto'>
                             <Table  className=''  >
      <thead>
        <tr>
          <th>Description</th>
          <th>Due</th>
          <th>Overdue</th>
          <th>Notify</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Urgent Safety Recall</td>
          <td>2022-04-06</td>
          <td>2022-04-08</td>
          <td>David Demo</td>
          
        </tr>
        <tr>
          <td>Urgent Safety Recall</td>
          <td>2022-04-06</td>
          <td>2022-04-08</td>
          <td>David Demo</td>
       
        </tr>
       {
        allreminder.map((data)=>{
          return(
            <tr>
            <td>{data.Description}</td>
            <td>{data.Due}</td>
            <td>{data.Overdue}</td>
            <td>{data.Notify}</td>
            <td>{data.Status}</td>
          </tr>
          )
        })
       }
      </tbody>
                             </Table>
                             </div>
                             </div>
                      </div>
                      </div>
                    
      </Container>
       <Addform activeform={activeform} allreminder={allreminder} handelSubmit={handelSubmit} addnewreminder={addnewreminder} openForm={openForm}/>
    
    </div>
  )
}

export default Assests