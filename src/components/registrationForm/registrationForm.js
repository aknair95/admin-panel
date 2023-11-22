import { Container,Form,Button, Row, Col } from "react-bootstrap";
import classes from "./registrationForm.module.css"
import { useRef } from "react";

const RegistrationForm=() =>{
    const firstNameRef=useRef();
    const lastNameRef=useRef();
    const ageRef=useRef();
    const fileRef=useRef();
    const mobNoRef=useRef();
    const emailRef=useRef();

    const formSubmitHandler=(e) =>{
        e.preventDefault();
    }
    return(
        <>
             <Container className={classes.formContainer} style={{width: "70vw",height: "max-content"}}>
                <h3 className="p-2">REGISTRATION FORM</h3>
                <Form onSubmit={formSubmitHandler}>
                    <Row className="p-3">
                            <Form.Group as={Col}>
                                <Form.Control
                                type="text" 
                                placeholder="Enter First Name" 
                                required 
                                size="md"
                                width="auto" 
                                ref={firstNameRef}/>
                            </Form.Group>                 
                            <Form.Group as={Col}>                 
                                <Form.Control
                                type="text" 
                                placeholder="Enter Last Name" 
                                required 
                                size="md"
                                width="auto" 
                                ref={lastNameRef}/>
                            </Form.Group>
                    </Row>
                    <Row className="p-3">
                        <Form.Group as={Col}>      
                            <Form.Control 
                            type="email" 
                            placeholder="Enter Email" 
                            required 
                            size="md"
                            width="auto" 
                            ref={emailRef}/>
                        </Form.Group>
                        <Form.Group as={Col}>                
                            <Form.Control 
                            type="number" 
                            placeholder="Enter Mobile No." 
                            required 
                            size="md"
                            width="auto" 
                            ref={mobNoRef}/>
                        </Form.Group>
                    </Row>
                    <Row className="p-3">
                        <Form.Group as={Col}>                 
                            <Form.Control 
                            type="number" 
                            placeholder="Enter Age" 
                            required 
                            size="md"
                            width="auto" 
                            ref={ageRef}/>
                        </Form.Group>
                        <Form.Group as={Col}>                
                            <Form.Control 
                            type="file" 
                            required 
                            size="md"
                            width="auto" 
                            ref={fileRef}/>
                        </Form.Group>
                    </Row>
                    <div className={classes.Btn}>
                        <Button type="submit" size="md">SUBMIT</Button>
                    </div>
                </Form>
            </Container>
        </>
    )
}

export default RegistrationForm;