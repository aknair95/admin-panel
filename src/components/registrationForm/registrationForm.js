import { Container,Form,Button,Row,Col } from "react-bootstrap";
import classes from "./registrationForm.module.css"
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDatabaseActions } from "../../store/userDatabaseReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationForm=() =>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userData=useSelector((state) => state.userDatabase.userData);
    const preFillData=useSelector((state) => state.userDatabase.preFillData);
    const preFillDataLS=localStorage.getItem("preFillData");
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
            id: Math.random(),
            firstName: enteredFirstName,
            lastName: enteredLastName,
            age: enteredAge,
            file: uploadedFile,
            mobNo: enteredMobNo,
            email: enteredEmail,
            updateBtnDisabled: false,
            enableBtnDisabled: true,
            disableBtnDisabled: false
        }

        const updatedUserData=[...userData,newUserData]
        dispatch(userDatabaseActions.addUserData(updatedUserData));

        // Storing updated user data array to firebase database
        try{
            await axios.patch("https://admin-panel-bbe99-default-rtdb.firebaseio.com/database.json",{
                updatedUserData
            });
        } catch(error){
        alert("! Network Error !");
        }
       
        firstNameRef.current.value="";
        lastNameRef.current.value="";
        ageRef.current.value="";
        fileRef.current.value="";
        mobNoRef.current.value="";
        emailRef.current.value="";
        localStorage.removeItem("preFillData");
        navigate("/userDashboard");
    }

    return(
        <>
             <Container className={classes.formContainer} style={{width: "70vw",height: "max-content"}}>
                <h3 className="p-2">{preFillDataLS===null?"REGISTRATION FORM":"UPDATE FORM"}</h3>
                <Form onSubmit={formSubmitHandler}>
                    <Row className="p-3">
                        <Form.Group as={Col}>
                            <Form.Control
                            type="text" 
                            placeholder="Enter First Name" 
                            required 
                            size="md"
                            width="auto" 
                            ref={firstNameRef}
                            defaultValue={preFillData.firstName}/>
                        </Form.Group>                 
                        <Form.Group as={Col}>                 
                            <Form.Control
                            type="text" 
                            placeholder="Enter Last Name" 
                            required 
                            size="md"
                            width="auto" 
                            ref={lastNameRef}
                            defaultValue={preFillData.lastName}/>
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
                            ref={emailRef}
                            defaultValue={preFillData.email}/>
                        </Form.Group>
                        <Form.Group as={Col}>                
                            <Form.Control 
                            type="number" 
                            placeholder="Enter Mobile No."
                            max={9999999999}  
                            required
                            size="md"
                            width="auto" 
                            ref={mobNoRef}
                            defaultValue={preFillData.mobNo}/>
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
                            ref={ageRef}
                            defaultValue={preFillData.age}/>
                        </Form.Group>
                        <Form.Group as={Col}>                
                            <Form.Control
                            type="url"
                            placeholder="Profile Pic URL"
                            required 
                            size="md"
                            width="auto"
                            ref={fileRef}
                            defaultValue={preFillData.file}/>
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