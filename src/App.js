import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navbar/navigationBar";
import Home from "./components/homePage/home";
import Login from "./components/authentication/login";
import ResetPassword from "./components/authentication/resetPassword";
import SignUp from "./components/authentication/signUp";

function App() {
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
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
