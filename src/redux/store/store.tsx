import {configureStore} from "@reduxjs/toolkit";
import testSlice from "@/redux/store/testSlice.tsx";

const store=configureStore({
    reducer:{
        testSlice:testSlice
    },
})
export default store;
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;