
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import userDatabaseReducer from "./userDatabaseReducer";

const storeReducer= configureStore({
    reducer: { authentication: authReducer.reducer, userDatabase: userDatabaseReducer.reducer }
});

export default storeReducer;