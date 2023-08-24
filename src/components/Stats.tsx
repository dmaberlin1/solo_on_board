import {FunctionComponent, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/redux/hooks.tsx";
import {initialAccuracy} from "@/constants/constants.tsx";
import {increaseSeconds} from "@/redux/store/timerSlice.tsx";
import {accuracyCounting, speedCounting} from "@/helpers/statsCounting.tsx";

interface IStats {
    children?:JSX.Element|JSX.Element[];
}

const Stats:FunctionComponent<IStats>=({children})=>{
    const dispatch=useAppDispatch();
    const mistakes=useAppSelector(state=>state.textSlice.mistakes);
    const pressingCount=useAppSelector(state=>state.textSlice.pressingCount)
    const seconds=useAppSelector(state=>state.timerSlice.seconds)
    const isTimerOn=useAppSelector(state=>state.timerSlice.isTimerOn);
    const [speed, setSpeed] = useState(initialAccuracy);
    const [accuracy, setAccuracy] = useState(initialAccuracy);

    useEffect(() => {
        const correctLetters:number=pressingCount-mistakes;
        setAccuracy(accuracyCounting(mistakes,pressingCount))
        setSpeed(speedCounting(correctLetters,seconds));
    }, [mistakes,pressingCount,seconds]);



    useEffect(() => {
        if(isTimerOn){
            const timer:NodeJS.Timeout=setTimeout(()=>{
                dispatch(increaseSeconds());
            },1000);
            return ()=>{
                clearTimeout(timer)
            }
        }

    }, [dispatch, isTimerOn, mistakes, pressingCount, seconds]);

    return (
        <div className={'flex'}>
        <div className={'flex'}>
            <p className={'font-bold uppercase'}>speed</p>
            <p className={'uppercase'}>{speed}</p>
        </div>
            <div className={'flex'}>
                <p className={'uppercase'}>accuracy</p>
                <p className={'uppercase'}>{accuracy} %</p>
            </div>
            {children}
        </div>
    )
};
export default Stats