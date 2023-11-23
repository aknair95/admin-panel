import { ListGroup, Row, Col, Button } from "react-bootstrap";
import classes from "./adminDashboard.module.css"
import UserDetailsCustom from "../userDetailsCustom";
import { useSelector } from "react-redux";

const AdminDashboard=() =>{
    const userData=useSelector((state) =>state.userDatabase.userData);

    const enableBtnHandler=(e) =>{

    }

    const disableBtnHandler=(e) =>{

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
                                            <Button onClick={enableBtnHandler}>ENABLE</Button>
                                            <Button onClick={disableBtnHandler} variant="danger">DISABLE</Button>
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

export default AdminDashboard;