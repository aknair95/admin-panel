import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  Nav,Button, Container, Navbar } from "react-bootstrap";
import { authActions } from "../../store/authReducer";

const NavigationBar=() =>{

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const activePath=document.location.pathname;
    let homePage=false;
    let loginPage=false;

    if(activePath==="/"){
        homePage=true;
    }
    else{
        loginPage=true;
    }                    

    const token=localStorage.getItem("token");
    dispatch(authActions.setToken(token));

    const logoutHandler=() =>{
        localStorage.removeItem("token");
        localStorage.removeItem("emailId");

        dispatch(authActions.logout());
        dispatch(authActions.setEmailID(null));
        dispatch(authActions.setToken(null));
        navigate("/login");
    }

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" fixed="top">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/" active={homePage}>HOME</Nav.Link>
                        {token===null && <Nav.Link href="/login" active={loginPage}>ADMIN LOGIN</Nav.Link>}
                    </Nav>
                    {!!token && <Button variant="danger" size="md" onClick={logoutHandler}>Logout</Button>} 
                </Container>  
            </Navbar>
        </>
    )
}

export default NavigationBar;