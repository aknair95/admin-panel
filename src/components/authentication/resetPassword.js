import classes from "./resetPassword.module.css";
import { Button,Container,Form, Spinner } from "react-bootstrap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword=() =>{

    const emailRef=useRef();
    const navigate=useNavigate();
   
    const resetPasswordHandler= async(e) =>{
        e.preventDefault();
        (<Spinner animation="border"/>)
        const enteredEmail=emailRef.current.value;
        
        //POST firebase request to reset password link to email
        try{ 
            await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCU6Gv14nvJALzonBsNjtyx2RO_G4aW4BQ",{
                requestType: "PASSWORD_RESET",
                email: enteredEmail
             });
            alert("!!! Password reset link sent to your email !!!");
            navigate("/login");
            } catch(error){
                alert("!!! Invalid Email !!!");
            }
    }

    const cancelBtnHandler=() =>{
        navigate("/login");
    }

    return(
            <Container className={classes.formContainer} style={{width: "80vw",height: "max-content"}}>
                <h3 className="p-2">RESET PASSWORD</h3>
                <Form onSubmit={resetPasswordHandler}>
                    <Form.Group className="p-3">                    
                        <Form.Control 
                         type="email" 
                         placeholder="Enter Email" 
                         required 
                         size="md"
                         width="auto" 
                         ref={emailRef}/>
                    </Form.Group>
                    <div className={classes.Btn}>
                        <Button type="submit" size="md">SEND LINK</Button>|{""}
                        <Button variant="danger" size="md" onClick={cancelBtnHandler}>CANCEL</Button>
                    </div>
                </Form>
            </Container> 
    )
}

export default ResetPassword;
