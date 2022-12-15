import {createSlice,createAsyncThunk, isFulfilled} from "@reduxjs/toolkit"

import axios from "axios"

import { Tmusics } from "../../type/musics"
type listMusic ={
    musics:Tmusics[]
    music:Tmusics|{}
}
const initialState :listMusic={
    music:{},
    musics:[]
}
export const getList = createAsyncThunk("getList", async()=>{
    const list = await axios({
        method: 'get',
        url: 'https://api.dev.bkplus.tech/ringtone/rings',
        headers: { 'Content-Type': 'application/json','Access-Control-Allow-Headers':'privatekey',"Access-Control-Allow-Origin":"*Access-Control-Allow-Origin"},
        withCredentials: false,
      });
    
 
    return list
})
const musicSlice = createSlice({
    name :"musics",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getList.fulfilled,(state,{payload})=>{
            state.musics=payload as any
        })
    }

    
})
export default musicSlice