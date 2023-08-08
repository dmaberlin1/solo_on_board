import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ITimerSlice {
    isTimerOn:boolean;
    seconds:number;
}

const initialState:ITimerSlice={
    isTimerOn:false,
    seconds:0
}

const timerSlice=createSlice({
    name:'timerSlice',
    initialState,
    reducers:{
        setIsTimerOn(state,action:PayloadAction<boolean>){
            state.isTimerOn=action.payload;
        },
        increaseSeconds(state){
            state.seconds=state.seconds+1;
        },
        resetSeconds(state){
            state.seconds=initialState.seconds;
        }
    }
})
export const {setIsTimerOn,increaseSeconds,resetSeconds}=timerSlice.actions
export default timerSlice.reducer;
