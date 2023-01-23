import React from 'react'
import { Form, Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="sign-up p-3">
      
      <Form className='rounded px-4 text-white'>
      <div className='title mb-3'>
        <h3>Get’s started.</h3>
        <p>Don’t have an account? <span><Link to="/sign_in">Sign in</Link> </span></p>
    </div>
    <span className='login-by d-flex mb-3'>
    <Button className='w-100 me-2 gmail p-3' type="submit">
      <i><FontAwesomeIcon className='me-1' icon={faGoogle}/></i>   Sign up with Google
      </Button>
      <Button className='w-100 facebook p-3' type="submit">
      <i><FontAwesomeIcon className='me-1' icon={faFacebookF}/></i> Sign up with Facebook
      </Button>
      </span>
      <div className='or text-muted mb-4 text-center'>or</div>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 d-flex  justify-content-between" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
        <a className='Forgot' href='#'>Forgot your password?</a>
      </Form.Group>
      <Link to="/sign_in"> <Button className='w-100' type="submit">
        Sign up
      </Button></Link>
    </Form>
</div>
  )
}

export default SignUp