
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
     
    return(
        <>
            <header className={classes.hdr}>
                <h2> Welcome to Admin Panel </h2><hr/>
            </header>
            <div className={classes.btns}>
                <Button>ADMIN DASHBOARD</Button>
                <Button>USER DASHBOARD</Button>
            </div>
        </>
        
    )
}

export default Home;