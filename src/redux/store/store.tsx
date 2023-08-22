import {configureStore} from "@reduxjs/toolkit";
import testSlice from "@/redux/store/testSlice.tsx";
import languageSlice from "@/redux/store/languageSlice.tsx";
import textSlice from "@/redux/store/textSlice.tsx";
import keyboardSlice from "@/redux/store/keyboardSlice.tsx";
import timerSlice from "@/redux/store/timerSlice.tsx";
import themeSlice from "@/redux/store/themeSlice.tsx";

const store=configureStore({
    reducer:{
        testSlice:testSlice,
        textSlice:textSlice,
        languageSlice:languageSlice,
        keyboardSlice:keyboardSlice,
        timerSlice:timerSlice,
        themeSlice:themeSlice
    },
})
export default store;
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;