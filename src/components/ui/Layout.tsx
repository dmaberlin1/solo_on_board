import React from 'react';
import Header from "@/components/ui/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "@/components/ui/Footer.tsx";

const Layout = () => {
    return (
        <>
        <Header></Header>
            <main className={'container'}>
            <Outlet></Outlet>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;
