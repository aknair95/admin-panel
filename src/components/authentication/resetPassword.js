import classes from "./resetPassword.module.css";
import { Button,Container,Form } from "react-bootstrap";
import { useRef,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Snackbar,Alert } from "@mui/material";

const ResetPassword=() =>{
    const emailRef=useRef();
    const navigate=useNavigate();
    const [successOpen,setSuccessOpen]=useState(false);
    const [failOpen,setFailOpen]=useState(false);
   
    const resetPasswordHandler= async(e) =>{
        e.preventDefault();
        const enteredEmail=emailRef.current.value;
        
        //POST firebase request to reset password link to email
        try{ 
            await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBBnP-VDlrSXUhJleaLC3Dm-9UmlaZoZIs",{
                requestType: "PASSWORD_RESET",
                email: enteredEmail
             });
            setSuccessOpen(true);
            setTimeout(() =>{
                navigate("/login")
             },2000);
            }catch(error){
                setFailOpen(true);
            }
    }

    const cancelBtnHandler=() =>{
        navigate("/login");
    }

    const onCloseHandler=() =>{
        setSuccessOpen(false)
        setFailOpen(false);
    }

    return(
        <>
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
            <Snackbar open={successOpen} autoHideDuration={2000} onClose={onCloseHandler}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    ! Password reset link sent to your mail ! Redirecting to login page...
                </Alert>
            </Snackbar>
            <Snackbar open={failOpen} autoHideDuration={5000} onClose={onCloseHandler}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    ! Invalid Email !
                </Alert>
            </Snackbar>
        </>   
    )
}

export default ResetPassword;
