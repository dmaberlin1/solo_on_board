import {FunctionComponent} from "react";
import Footer from "@/components/ui/Footer.tsx";
import Header from "@/components/ui/Header.tsx";
import Main from "@/components/ui/Main.tsx";
import Text from "@/components/Text.tsx";
import {useAppDispatch, useAppSelector} from "@/redux/hooks.tsx";
import {setIsTestStarted} from "@/redux/store/testSlice.tsx";
import ModalWindow from "@/components/ui/ModalWindow.tsx";
import Button from "@/components/ui/Button.tsx";

const App:FunctionComponent = () => {
    const dispatch=useAppDispatch()
    const isTestStarted=useAppSelector(state => state.testSlice.isTestStarted)

    const testStateToggle=()=>dispatch(setIsTestStarted(true))


    return (
        <div className="">
           <Header></Header>
           <Main>
             <>
                 {isTestStarted &&  <Text></Text> }
                {!isTestStarted &&  <ModalWindow title={'Take a typing test'}>
                    <Button btnText={'start test'} onClick={testStateToggle}></Button>
                    <Button className={'bg-gray-400'} btnText={'start test two'} onClick={testStateToggle}></Button>
                </ModalWindow> }
             </>
           </Main>
            <Footer/>
        </div>
    );
};

export default App;
