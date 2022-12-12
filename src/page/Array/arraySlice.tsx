import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Tuser } from "../../type/users";

type arrayUser = {
    users: Tuser[];
    user: Tuser | {}
}
const initialState: arrayUser = {
    users: [],
    user: {}

}
// const getList= createAsyncThunk(()=>{

// })
const arraySlice = createSlice({
    name: "array",
    initialState,
    reducers: {
        addUser(state, {payload}){
            state.users = [...state.users, payload]
        },
        delUser(state,{payload}){
            console.log("!")
            console.log(payload)
            state.users = state.users.filter((item) => item.id !== payload);                      
        }
    }
})
export const {addUser ,delUser} = arraySlice.actions     
export default arraySlice.reducer