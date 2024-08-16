import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData : null,
    status : false
};

const authSlice = createSlice({
    name : Auth,
    initialState,
    reducers : {
        authLogin : function(state, action){
            state.userData = action.payload;
            state.status = true;
        },
        authLogout : function(state) {
            state.userData = null;
            state.status = false;
        }
    }
});

export const {authLogin, authLogout} = authSlice.actions;
export default authSlice;