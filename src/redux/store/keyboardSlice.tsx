import {Keyboards} from "@/constants/constants.tsx";
import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";

type keyboardSlice={
    keyboard:Keyboards
}

const initialState:keyboardSlice={
    keyboard:Keyboards.ryzer
}

const keyboardSlice:Slice<keyboardSlice>=createSlice({
    name:'keyboardSlice',
    initialState,
    reducers:{
        setKeyboard(state,action:PayloadAction<Keyboards>){
            state.keyboard=action.payload
        }
    }
})

export const {setKeyboard}=keyboardSlice.actions
export default keyboardSlice.reducer