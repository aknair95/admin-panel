import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navbar/navigationBar";
import Home from "./components/homePage/home";
import Login from "./components/authentication/login";
import ResetPassword from "./components/authentication/resetPassword";
import SignUp from "./components/authentication/signUp";
import RegistrationForm from "./components/registrationForm/registrationForm";
import AdminDashboard from "./components/adminDashboard/adminDashboard";
import UserDashboard from "./components/userDashboard/userDashboard";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userDatabaseActions } from "./store/userDatabaseReducer";

function App() {

  const dispatch=useDispatch();

  // To fetch user data from firebase
  useEffect(() =>{
      const getFirebaseUserData=async() =>{
        try{
            const response=await axios.get("https://admin-panel-bbe99-default-rtdb.firebaseio.com/database.json");
            if(!!response.data){
              dispatch(userDatabaseActions.addUserData(response.data.updatedUserData));
            }
        }catch(error){
            alert("! Network Error !");
        }}
      getFirebaseUserData();
    },[]);

  return (
    <div className="app">
      <BrowserRouter>
          <NavigationBar/>
          <div className="app_body">
            <Routes >
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signUp" element={<SignUp/>}/>
              <Route path="/forgotPswd" element={<ResetPassword/>}/>
              <Route path="/registrationForm" element={<RegistrationForm/>}/>
              <Route path="/adminDashboard" element={<AdminDashboard/>}/>
              <Route path="/userDashboard" element={<UserDashboard/>}/>
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
