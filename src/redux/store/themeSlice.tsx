import {Themes} from "@/constants/constants.tsx";
import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";


interface IThemeSlice {
    theme:Themes
}

const initialState:IThemeSlice={
    theme:Themes.dark
}

const themeSlice:Slice<IThemeSlice>=createSlice({
    name:'themeSlice',
    initialState,
    reducers:{
        setTheme(state,action:PayloadAction<Themes>){
            state.theme=action.payload
        }
    }
})

export const {setTheme}=themeSlice.actions
export default themeSlice.reducer