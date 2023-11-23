import { Row, Col, Image } from "react-bootstrap";
import classes from "./userDetailsCustom.module.css";

const UserDetailsCustom=(props) =>{
    return(   
        <>
            <Row>
                <Col className={classes.col}>
                    <h5>First Name:</h5>
                    <p>{props.firstName}</p>
                </Col>
                <Col className={classes.col}>
                    <h5>Last Name:</h5>
                    <p>{props.lastName}</p>
                </Col>
            </Row>
            <Row>
                <Col className={classes.col}>
                    <h5>Age:</h5>
                    <p>{props.age}</p>
                </Col>
                <Col className={classes.col}>
                    <h5>Email:</h5>
                    <p>{props.email}</p> 
                </Col>
            </Row>
            <Row>
                <Col className={classes.col}>
                <h5>Mobile No:</h5>
                <p>{props.mobNo}</p> 
                </Col>
                <Col className={classes.img}>
                    <Image src={props.file} width="80px" height="60px"/>
                </Col> 
            </Row>
    </>
    )   
}

export default UserDetailsCustom;