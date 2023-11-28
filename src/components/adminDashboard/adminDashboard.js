import { ListGroup, Row, Col, Button } from "react-bootstrap";
import classes from "./adminDashboard.module.css"
import UserDetailsCustom from "../userDetailsCustom";
import { useDispatch, useSelector } from "react-redux";
import { userDatabaseActions } from "../../store/userDatabaseReducer";
import axios from "axios";
const AdminDashboard=() =>{
    const userData=useSelector((state) =>state.userDatabase.userData);
    const dispatch=useDispatch();

    const enableBtnHandler=async(e) =>{
        const updatedUserData=userData.map((item) =>{
            if(e.target.id==item.id){
                const updatedItem={...item,enableBtnDisabled:true,disableBtnDisabled:false,updateBtnDisabled:false};
                return updatedItem;
            }
            return item;
        })
        dispatch(userDatabaseActions.addUserData(updatedUserData));
         // Storing updated user data array to firebase database
         try{
            await axios.patch("https://admin-panel-bbe99-default-rtdb.firebaseio.com/database.json",{
                updatedUserData
            });
        } catch(error){
        alert("! Network Error !");
        }
    }

    const disableBtnHandler=async(e) =>{
        const updatedUserData=userData.map((item) =>{
            if(e.target.id==item.id){
                const updatedItem={...item,enableBtnDisabled:false,disableBtnDisabled:true,updateBtnDisabled:true};
                return updatedItem;
                }
            return item;
        })
        dispatch(userDatabaseActions.addUserData(updatedUserData));
         // Storing updated user data array to firebase database
         try{
            await axios.patch("https://admin-panel-bbe99-default-rtdb.firebaseio.com/database.json",{
                updatedUserData
            });
        } catch(error){
        alert("! Network Error !");
        }
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
                                             disabled={item.enableBtnDisabled}
                                             id={item.id}>ENABLE</Button>
                                            <Button 
                                             onClick={disableBtnHandler} 
                                             variant="danger"
                                             disabled={item.disableBtnDisabled}
                                             id={item.id}>DISABLE</Button>
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