import {FunctionComponent} from "react";
import Footer from "@/components/ui/Footer.tsx";
import Header from "@/components/ui/Header.tsx";
import Main from "@/components/ui/Main.tsx";

const App:FunctionComponent = () => {

    return (
        <div className="">
           <Header></Header>
           <Main></Main>
            <Footer></Footer>
        </div>
    );
};

export default App;
