import { useDispatch, useSelector } from "react-redux";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import classes from "./userDashboard.module.css"
import { useNavigate } from "react-router-dom";
import UserDetailsCustom from "../userDetailsCustom";
import { userDatabaseActions } from "../../store/userDatabaseReducer";
import axios from "axios";

const UserDashboard=() =>{
    const userData=useSelector((state) =>state.userDatabase.userData);
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const updateBtnHandler=async(e) =>{
        const preFillData=userData.filter((item) =>{
           return item.id==e.target.id;
        });
        const updatedUserData=userData.filter((item) =>{
            return item.id!=e.target.id ;
        });
        dispatch(userDatabaseActions.preFillData(preFillData));
        dispatch(userDatabaseActions.addUserData(updatedUserData));
        // Storing updated user data array to firebase database
        try{
            await axios.patch("https://admin-panel-bbe99-default-rtdb.firebaseio.com/database.json",{
                updatedUserData
            });
        } catch(error){
        alert("! Network Error !");
        }
        localStorage.setItem("preFillData",JSON.stringify(preFillData[0]));
        navigate("/registrationForm");
        window.location.reload();
    }

    return(
        <div className={classes.userList}>
            <h3 style={{textDecoration: "underline"}}>USER PANEL</h3>
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
                                             onClick={updateBtnHandler} 
                                             disabled={item.disableBtnDisabled}
                                             id={item.id}>Update</Button>
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