import { useSelector } from "react-redux";
import { Card, ListGroup, Container, Row, Col, Image, Button } from "react-bootstrap";

const UserDashboard=() =>{
    const userData=useSelector((state) => state.userDatabase.userData );
    console.log(userData)
    return(
        <Card>
         <ListGroup as="ul">
            { 
                userData.map((item) =>{
                    return (
                        <Card>
                            <ListGroup.Item as="li">
                                <Container>
                                    <Row className="justify-content-md-center" key={Math.random()}>
                                        <Col>
                                            <h4>{item.firstName}</h4>
                                        </Col>
                                        <Col>
                                            <h4>{item.lastName}</h4>
                                        </Col>
                                        <Col>
                                            <h5>{item.age}</h5>
                                        </Col>
                                        <Col>
                                            <h5>{item.email}</h5> 
                                        </Col>
                                        <Col>
                                            <h5>{item.mobNo}</h5> 
                                        </Col>
                                        <Col>
                                            <Image src={item.file} width="50px" height="50px"/>
                                        </Col>
                                        <Col>
                                            <Button>Update</Button>
                                        </Col>
                                    </Row>
                                </Container>  
                            </ListGroup.Item>
                        </Card>)
                        })
            }
         </ListGroup>
        </Card>
    )
}

export default UserDashboard;