import { createSlice } from "@reduxjs/toolkit";

const initialState={ token: null,emailID: null,isLoggedIn: false};

const authReducer=createSlice({
    name: "authentication",
    initialState: initialState,
    reducers: {
        setToken(state,action){
            state.token=action.payload;
        },
        setEmailID(state,action){
            state.emailID=action.payload;
        },
        login(state){
            state.isLoggedIn=true;
        },
        logout(state){
            state.isLoggedIn=false;
        }  
    }
})

export const authActions=authReducer.actions;

export default authReducer;