import { ListGroup, Row, Col, Button } from "react-bootstrap";
import classes from "./adminDashboard.module.css"
import UserDetailsCustom from "../userDetailsCustom";
import { useDispatch, useSelector } from "react-redux";
import { userDatabaseActions } from "../../store/userDatabaseReducer";

const AdminDashboard=() =>{
    const userData=useSelector((state) =>state.userDatabase.userData);
    const dispatch=useDispatch();

    const enableBtnHandler=(e) =>{
        const updatedUserData=userData.map((item) =>{
            if(e.target.id===item.id){
                item.disableBtnDisabled=false;
                item.enableBtnDisabled=true;
                item.updateBtnDisabled=false;
            }
            return item;
        })
        dispatch(userDatabaseActions.addUserData(updatedUserData));
    }

    const disableBtnHandler=(e) =>{
        const updatedUserData=userData.map((item) =>{
            if(e.target.id===item.id){
                    item.enableBtnDisabled=true;
                    item.disableBtnDisabled=false;
                    item.updateBtnDisabled=true;
                }
            return item;
        })
        dispatch(userDatabaseActions.addUserData(updatedUserData));
    }

    return(
        <div className={classes.userList}>
            <h3 style={{textDecoration: "underline"}}>ADMIN PANEL</h3>
            <ListGroup as="ul">
                { 
                userData.map((item) =>{
                    return (
                            <div key={item.id} className={classes.userDetails}>
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
                                            <Button 
                                             onClick={enableBtnHandler}
                                             disabled={item.enableBtnDisabled}>ENABLE</Button>
                                            <Button 
                                             onClick={disableBtnHandler} 
                                             variant="danger"
                                             disabled={item.disableBtnDisabled}>DISABLE</Button>
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