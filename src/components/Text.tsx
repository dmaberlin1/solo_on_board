import React, {FunctionComponent, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "@/redux/hooks.tsx";
import {compareChars, getCurrentChar} from "@/helpers/charTransform.tsx";
import {fetchText, increasePressingCount, setCurrentCharIndex, setMistakes, setText} from "@/redux/store/textSlice.tsx";
import {setIsTimerOn} from "@/redux/store/timerSlice.tsx";
import {setIsTestFinished} from "@/redux/store/testSlice.tsx";

const Text:FunctionComponent = () => {
    const dispatch=useAppDispatch()
    const text=useAppSelector(state=>state.text.text)
    const isLoading=useAppSelector(state=>state.text.isLoading);
    const error=useAppSelector(state=>state.text.error)
    const currentCharIndex=useAppSelector(state=>state.text.currentCharIndex)
    const mistakes=useAppSelector(state=>state.text.mistakes)
    const pressingCount=useAppSelector(state=>state.text.pressingCount)
    const sentences=useAppSelector(state=>state.test.sentences);


    useEffect(() => {
        fetchText(sentences)
    }, [dispatch, sentences]);

    useEffect(() => {
        const newText=getCurrentChar(text,currentCharIndex);
        dispatch(setText(newText))
    }, [dispatch,currentCharIndex]);

    useEffect(() => {
        if(pressingCount===0 && text.length>0){
            dispatch(setIsTimerOn(true))
        }

        if(currentCharIndex<text.length){
            const keyPressHandler=(event:KeyboardEvent)=>{
                const [newText,newCurrentIndex,newMistakes]=compareChars(text, currentCharIndex,event.key,mistakes);

                dispatch(setCurrentCharIndex(newCurrentIndex));
                dispatch(setText(newText))
                dispatch(setMistakes(newMistakes));
                dispatch(increasePressingCount());

                if(newCurrentIndex === text.length){
                    dispatch(setIsTimerOn(false));
                    dispatch(setIsTestFinished(true));
                }

            }
            document.addEventListener('keypress',keyPressHandler);

            return ()=>{
                document.removeEventListener('keypress',keyPressHandler)
            }
        }
    }, [dispatch,  text]);


    return (
        <div className={'flex'}>
            {error && <p className={'text-red-300'}>{error}</p>}
            {isLoading  && <p>Loading text...</p>}
            {!isLoading &&  <div>
                {text.map((item,index)=>{
                    return (
                        <span key={index}>
                            {item.char}
                        </span>
                    )
                })}
            </div>}
        </div>
    );
};

export default Text;
