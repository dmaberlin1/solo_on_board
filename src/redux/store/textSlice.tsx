import {TextType} from "@/types/types.tsx";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import getText from "@/api/getText.tsx";

interface TextState{
    text:TextType[]
    isLoading:boolean
    error:string|null
    currentCharIndex:number;
    mistakes:number;
    pressingCount:number;
}

export const fetchText=createAsyncThunk<string,string,{rejectValue:string}>(
  'textSlice/fetchText',
  async function (sentences:string,{rejectWithValue}) {
        try{
            const response=await getText(sentences);
            return response.data
        }
        catch (e) {
            return rejectWithValue((e as Error).message);
        }
  }
);

const initialState:TextState={
    text:[],
    isLoading:false,
    error:null,
    currentCharIndex:0,
    mistakes:0,
    pressingCount:0
}

const textSlice=createSlice({
    name:'textSlice',
    initialState,
    reducers:{
        setText(state,action:PayloadAction<TextType[]>){
            state.text=action.payload;
        },
        setCurrentCharIndex(state,action:PayloadAction<number>){
            state.currentCharIndex=action.payload
        },
        setMistakes(state,action:PayloadAction<number>){
            state.mistakes=action.payload
        },
        increasePressingCount(state){
            state.pressingCount=state.pressingCount+1;
        },
        resetTextState(state){
            state.currentCharIndex=0;
            state.mistakes=0;
            state.pressingCount=0;
        },
    },
    extraReducers
})