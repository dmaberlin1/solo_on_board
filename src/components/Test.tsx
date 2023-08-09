import React, {FunctionComponent} from 'react';
import Text from "@/components/Text.tsx";
import Stats from "@/components/Stats.tsx";
import {useAppDispatch, useAppSelector} from "@/redux/hooks.tsx";
import {resetSeconds} from "@/redux/store/timerSlice.tsx";
import {resetTextState, setText} from "@/redux/store/textSlice.tsx";
import {restoreText} from "@/helpers/charTransform.tsx";
import {resetTestState, setIsTestFinished} from "@/redux/store/testSlice.tsx";
import Button from "@/components/ui/Button.tsx";
import ModalWindow from "@/components/ui/ModalWindow.tsx";

const Test:FunctionComponent = () => {
    const dispatch=useAppDispatch();
    const isTestFinished=useAppSelector(state=>state.testSlice.isTestFinished);
    const text=useAppSelector(state=>state.textSlice.text)

    function restart() {
        dispatch(resetSeconds())
        dispatch(resetTextState());
        dispatch(setText(restoreText(text)))

        if(isTestFinished){
            dispatch(setIsTestFinished(false))
        }
    }

    function newTest() {
        dispatch(resetTextState())
        dispatch(resetTestState())
        dispatch(resetSeconds())
    }

    return (
        <div>
            <section className={'flex'}>
                <Text/>
                <Stats>
                <Button btnText={'restart'}
                        onClick={restart}
                        onFocus={(event)=>event.target.blur()}
                />
                </Stats>
                {isTestFinished && <ModalWindow title={'Test Completed!'}>
                    <Stats></Stats>
                    <Button btnText={'restart'} onClick={restart}></Button>
                    <Button btnText={'new test'} onClick={newTest}></Button>
                </ModalWindow>
                }
            </section>
        </div>
    );
};

export default Test;
