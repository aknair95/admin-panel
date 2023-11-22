import classes from "./signUp.module.css";
import { Button,Container,Form } from "react-bootstrap";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Snackbar,Alert } from "@mui/material";

const SignUp=() =>{
    const emailRef=useRef();
    const passwordRef=useRef();
    const confirmPasswordRef=useRef();
    const navigate=useNavigate();
    const [successOpen,setSuccessOpen]=useState(false);
    const [failOpen,setFailOpen]=useState(false);
    const [serverErrorOpen,setServerError]=useState(false);
   
    const signUpHandler= async (e) =>{
        e.preventDefault();
        const enteredEmail=emailRef.current.value;
        const enteredPassword=passwordRef.current.value;
        const confirmPassword=confirmPasswordRef.current.value; 

        if(enteredPassword===confirmPassword){
            try{ 
            await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBBnP-VDlrSXUhJleaLC3Dm-9UmlaZoZIs",{
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
             });
            setSuccessOpen(true);
            setTimeout(() =>{
                navigate("/login")
             },2000);
            } catch(error){
                setServerError(false);
            }
        } else{
            setFailOpen(true);
        }
        
        emailRef.current.value="";
        passwordRef.current.value="";
        confirmPasswordRef.current.value="";
    }

    const loginExistingAccHandler=() =>{
        navigate("/login");
    }

    const onCloseHandler=() =>{
        setSuccessOpen(false);
        setFailOpen(false);
        serverErrorOpen(false);
    }

    return(
       <> 
        <Container className={classes.formContainer} style={{width: "70vw",height: "max-content"}}>
            <h3 className="p-2">SIGN UP</h3>
            <Form onSubmit={signUpHandler}>
                <Form.Group className="p-3">                    
                    <Form.Control 
                        type="email" 
                        placeholder="Enter Email" 
                        required 
                        size="md"
                        width="auto" 
                        ref={emailRef}/>
                </Form.Group>
                <Form.Group className="p-3">                      
                    <Form.Control 
                        type="password" 
                        placeholder="Enter Password" 
                        minLength={6} 
                        required 
                        size="md"
                        width="auto" 
                        ref={passwordRef} />
                </Form.Group>
                <Form.Group className="p-3">                      
                    <Form.Control 
                        type="password" 
                        placeholder="Confirm Password" 
                        minLength={6} 
                        required 
                        size="md"
                        width="auto" 
                        ref={confirmPasswordRef} />
                </Form.Group>
                <div className={classes.Btns}>
                    <Button type="submit" size="md">SIGN UP</Button>
                    <Button variant="link" size="md" onClick={loginExistingAccHandler}>Login With Existing Account? Login</Button>
                </div>
            </Form>
            <Snackbar open={successOpen} autoHideDuration={2000} onClose={onCloseHandler}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    ! Successfully signed up ! Redirecting to login page...
                </Alert>
            </Snackbar>
            <Snackbar open={failOpen} autoHideDuration={5000} onClose={onCloseHandler}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    ! Incorrect Password ! Please Enter Again...
                </Alert>
            </Snackbar>
            <Snackbar open={serverErrorOpen} autoHideDuration={5000} onClose={onCloseHandler}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    ! Server Error ! Try again after sometime...
                </Alert>
            </Snackbar>  
        </Container>
      </>       
    )
}

export default SignUp;