import {configureStore} from "@reduxjs/toolkit";
import testSlice from "@/redux/store/testSlice.tsx";
import languageSlice from "@/redux/store/languageSlice.tsx";
import textSlice from "@/redux/store/textSlice.tsx";
import keyboardSlice from "@/redux/store/keyboardSlice.tsx";
import timerSlice from "@/redux/store/timerSlice.tsx";
import themeSlice from "@/redux/store/themeSlice.tsx";
import userSlice from "@/redux/store/userSlice.tsx";

const store=configureStore({
    reducer:{
        test:testSlice,
        text:textSlice,
        language:languageSlice,
        keyboard:keyboardSlice,
        timer:timerSlice,
        theme:themeSlice,
        user:userSlice,
    },
})
export default store;
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;