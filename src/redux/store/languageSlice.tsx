import {Languages} from "@/constants/constants.tsx";
import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";


type languageState={
    language:Languages
}

const initialState:languageState={
    language:Languages.ru
}

const languageSlice:Slice<languageState>=createSlice({
    name:'languageSlice',
    initialState,
    reducers:{
        setLanguage(state,action:PayloadAction<Languages>){
            state.language=action.payload
        }
    }
})

export const {setLanguage}=languageSlice.actions
export default languageSlice.reducer