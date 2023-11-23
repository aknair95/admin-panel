
import { Button } from "react-bootstrap";
import classes from "./home.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home=() =>{
    const token=localStorage.getItem("token");
    const navigate=useNavigate();

    useEffect(() =>{
        if(token===null){
            navigate("/login");
        }
    },);

    const adminBtnHandler=() =>{
        navigate("/adminDashboard");
    }

    const userBtnHandler=() =>{
        navigate("/userDashboard");
    }
     
    return(
        <>
            <header className={classes.hdr}>
                <h2> Welcome to Admin Panel </h2><hr/>
            </header>
            <div className={classes.btns}>
                <Button onClick={adminBtnHandler}>ADMIN DASHBOARD</Button>
                <Button onClick={userBtnHandler}>USER DASHBOARD</Button>
            </div>
        </>
        
    )
}

export default Home;