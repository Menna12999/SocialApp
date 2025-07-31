import { Token } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const initialState :initialStateType={
    token:null
}

const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        clearUserData:function(prevState){
        prevState.token = null;
        },
        setUserToken :function(state,action){
            state.token = action.payload;
        }
    }

})

export const {clearUserData, setUserToken} = authSlice.actions;

export default authSlice.reducer