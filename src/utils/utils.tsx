import {twMerge} from 'tailwind-merge';
import {clsx,ClassValue} from 'clsx';

export function cn(...inputs:ClassValue[]){
    return twMerge(clsx(inputs))
}

export const wordsMeter=(correctLetters:number)=>{
    return  correctLetters/6
};
export const minutesMeter=(seconds:number)=>{
   return seconds/60
}