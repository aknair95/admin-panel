import { createSlice } from "@reduxjs/toolkit";

const initialState={ userData: [] };

const userDatabaseReducer=createSlice({
    name: "userDatabase",
    initialState: initialState,
    reducers: {
        addUserData(state,action){
            state.userData.push({...action.payload});
        }
    }
})

export const userDatabaseActions=userDatabaseReducer.actions;

export default userDatabaseReducer;