import {ITextState} from "@/redux/store/textSlice.tsx";
import {minutesMeter,wordsMeter} from "@/utils/utils.tsx";

const initialAccuracy='0.00'

export const accuracyCounting=(mistakes:ITextState["mistakes"], pressingCount:ITextState["pressingCount"])=>{
if(pressingCount){
    return(100-((mistakes/pressingCount)*100)).toFixed(2)
}
 return initialAccuracy
}

export const speedCounting=(correctLetters:number,seconds:number)=>{
    if(seconds){
        const words=wordsMeter(correctLetters);
        const minutes=minutesMeter(seconds)

        return (words/minutes).toFixed(2);
    }
}
