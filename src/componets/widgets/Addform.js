import React from 'react'
import { Form, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function Addform({activeform,allreminder,handelSubmit,addnewreminder,openForm}) {

  return (
    <div className={`add-reminder ${activeform===true ? "active-form" : ""}`}>
    <i onClick={()=>openForm(false)} className='close-form'><FontAwesomeIcon icon={faXmark}/></i>
  <Form className='p-4 text-muted '  onSubmit={handelSubmit} >
  <Form.Group className="mb-3" onChange={addnewreminder} controlId="formBasicText">
   
    <Form.Control type="text" placeholder=" Description" name='Description' />
    
  </Form.Group>

  <Form.Group className="mb-3" onChange={addnewreminder}  controlId="formBasicText">
   
    <Form.Control type="text" placeholder=" Notify" name='Notify' />
  </Form.Group>
  
  <Form.Group className="mb-3" onChange={addnewreminder}  controlId="formBasicText">
   
    <Form.Control type="date" placeholder=" Overdue" name='Overdue' />
  </Form.Group>

  <Form.Group  className="mb-3" onChange={addnewreminder}  controlId="formBasicDate">
    
    <Form.Control type="date" placeholder=" Due" name='Due' />
  </Form.Group>


  <Button className='w-100' variant="primary" type="submit" value="Submit" >
    Add new
  </Button>
</Form>
</div>
  )
}

export default Addform