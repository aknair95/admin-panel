import { createSlice } from "@reduxjs/toolkit";

const initialState={ userData: [] };

const userDatabaseReducer=createSlice({
    name: "userDatabase",
    initialState: initialState,
    reducers: {
        addUserData(state,action){
            state.userData=[...state.userData,action.payload];
        }
    }
})

export const userDatabaseActions=userDatabaseReducer.actions;

export default userDatabaseReducer;