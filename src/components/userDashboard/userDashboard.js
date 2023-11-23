import { useSelector } from "react-redux";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import classes from "./userDashboard.module.css"
import { useNavigate } from "react-router-dom";
import UserDetailsCustom from "../userDetailsCustom";

const UserDashboard=() =>{
    const userData=useSelector((state) =>state.userDatabase.userData);
    const navigate=useNavigate();
    const updateBtnHandler=(e) =>{
        navigate("/registrationForm");
    }

    return(
        <div className={classes.userList}>
            <ListGroup as="ul">
            { 
                userData.map((item) =>{
                    return (
                            <div key={Math.random()} className={classes.userDetails}>
                              <ListGroup.Item as="li">
                                    <Row>
                                        <UserDetailsCustom
                                         firstName={item.firstName}
                                         lastName={item.lastName}
                                         age={item.age}
                                         email={item.email}
                                         mobNo={item.mobNo}
                                         file={item.file}/>
                                        <Col className={classes.btn}>
                                            <Button onClick={updateBtnHandler}>Update</Button>
                                        </Col>
                                    </Row>
                              </ListGroup.Item>
                            </div>
                )})
            }
            </ListGroup>
        </div>  
    )
}

export default UserDashboard;