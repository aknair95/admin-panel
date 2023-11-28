import { createSlice } from "@reduxjs/toolkit";

let preFillDataInitial={
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    file: "",
    mobNo: ""
};
const preFillDataLS=localStorage.getItem("preFillData");
if(preFillDataLS!=null){
    preFillDataInitial=JSON.parse(preFillDataLS);
}

const initialState={ userData: [], preFillData: preFillDataInitial };

const userDatabaseReducer=createSlice({
    name: "userDatabase",
    initialState: initialState,
    reducers: {
        addUserData(state,action){
            state.userData=action.payload;
        },
        preFillData(state,action){
            state.preFillData=action.payload;
        }
    }
})

export const userDatabaseActions=userDatabaseReducer.actions;

export default userDatabaseReducer;