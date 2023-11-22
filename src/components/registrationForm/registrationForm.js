import { Container,Form,Button,Row,Col } from "react-bootstrap";
import classes from "./registrationForm.module.css"
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDatabaseActions } from "../../store/userDatabaseReducer";
import axios from "axios";
import { Alert } from "@mui/material";

const RegistrationForm=() =>{
    const dispatch=useDispatch();
    const userData=useSelector((state) => state.userDatabase.userData );
    const firstNameRef=useRef();
    const lastNameRef=useRef();
    const ageRef=useRef();
    const fileRef=useRef();
    const mobNoRef=useRef();
    const emailRef=useRef();

    const formSubmitHandler=async(e) =>{
        e.preventDefault();
        const enteredFirstName=firstNameRef.current.value;
        const enteredLastName=lastNameRef.current.value;
        const enteredAge=ageRef.current.value;
        const uploadedFile=fileRef.current.value;
        const enteredMobNo=mobNoRef.current.value;
        const enteredEmail=emailRef.current.value;

        const newUserData={
            firstName: enteredFirstName,
            lastName: enteredLastName,
            age: enteredAge,
            file: uploadedFile,
            mobNo: enteredMobNo,
            email: enteredEmail
        }

        dispatch(userDatabaseActions.addUserData(newUserData));

        try{
            await axios.patch(`https://admin-panel-bbe99-default-rtdb.firebaseio.com/userData.json`,{
                newUserData
            });
            <Alert severity="success">Sent</Alert>  
        } catch(error){
            <Alert severity="danger">!!! Error !!!</Alert>
        }

        firstNameRef.current.value="";
        lastNameRef.current.value="";
        ageRef.current.value="";
        fileRef.current.value="";
        mobNoRef.current.value="";
        emailRef.current.value="";

        console.log(userData);

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
                            max={9999999999}  
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
                            min={1}
                            max={100} 
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