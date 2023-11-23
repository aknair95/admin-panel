import { useSelector } from "react-redux";
import { ListGroup, Row, Col, Image, Button } from "react-bootstrap";
import classes from "./userDashboard.module.css"

const UserDashboard=() =>{
    const userData=useSelector((state) => state.userDatabase.userData );
    return(
        <div className={classes.userList}>
            <ListGroup as="ul">
            { 
                userData.map((item) =>{
                    return (
                            <div key={Math.random()} className={classes.userDetails}>
                              <ListGroup.Item as="li">
                                    <Row >
                                        <Row>
                                            <Col className={classes.col}>
                                                <h5>First Name:</h5>
                                                <p>{item.firstName}</p>
                                            </Col>
                                            <Col className={classes.col}>
                                                <h5>Last Name:</h5>
                                                <p>{item.lastName}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className={classes.col}>
                                                <h5>Age:</h5>
                                                <p>{item.age}</p>
                                            </Col>
                                            <Col className={classes.col}>
                                                <h5>Email:</h5>
                                                <p>{item.email}</p> 
                                            </Col>
                                        </Row>
                                       <Row>
                                            <Col className={classes.col}>
                                                <h5>Mobile No:</h5>
                                                <p>{item.mobNo}</p> 
                                            </Col>
                                            <Col className={classes.img}>
                                                <Image src={item.file} width="100px" height="60px"/>
                                            </Col>
                                       </Row>
                                        <Col className={classes.btn}>
                                            <Button>Update</Button>
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