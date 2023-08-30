import React, {ComponentPropsWithoutRef, FunctionComponent} from 'react';
import {cn} from "@/utils/utils.tsx";
interface ButtonProps extends ComponentPropsWithoutRef<'button'>{
    btnText:string
    fill?:boolean
    className?:string

}
const Button:FunctionComponent<ButtonProps> = ({className,btnText,fill=false,...props}) => {
    return (
        <button
        className={cn('rounded bg-gray-200 flex uppercase',className,{'bg-gray-500':fill==true})}
        {...props}
        >
            {btnText}
        </button>
    );
};

export default Button;
