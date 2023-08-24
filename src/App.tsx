import {FC, useState} from "react";
import {Routes,Route,Link} from 'react-router-dom'
import Footer from "@/components/ui/Footer.tsx";
import Header from "@/components/ui/Header.tsx";
import Main from "@/components/ui/Main.tsx";
import Text from "@/components/Text.tsx";
import {useAppDispatch, useAppSelector} from "@/redux/hooks.tsx";
import {setIsTestStarted, setSentences} from "@/redux/store/testSlice.tsx";
import ModalWindow from "@/components/ui/ModalWindow.tsx";
import Button from "@/components/ui/Button.tsx";
import Select from "@/components/ui/Select.tsx";
import {sentencesOptions} from "@/constants/constants.tsx";
import Wrapper from "@/components/Wrapper.tsx";
import ThemeToggler from "@/components/ui/ThemeToggler.tsx";

import LoginPage from "@/pages/LoginPage.tsx";
import SignUpPage from "@/pages/SignUpPage.tsx";
import HomePage from "@/pages/HomePage.tsx";
import NotFoundPage from "@/pages/NotFoundPage.tsx";

export enum PathPages {
    home='/',
    login='/login',
    signup='/signup',

}

const App: FC = () => {
    const dispatch = useAppDispatch()


        //switch > Routes
       //

    return (
        <>
            <Wrapper>
                <Header></Header>
                <Routes>
                    <Route path={PathPages.home}>
                    <Route path={PathPages.home} element={<HomePage/>}></Route>
                    <Route path={PathPages.login} element={<LoginPage/>}></Route>
                    <Route path={PathPages.signup} element={<SignUpPage/>}></Route>
                    <Route path={'*'} element={<NotFoundPage/>}></Route>
                    </Route>
                </Routes>


            </Wrapper>
            <div className={'w-full fixed bottom-0'}><Footer/></div>
        </>
    )
};

export default App;
