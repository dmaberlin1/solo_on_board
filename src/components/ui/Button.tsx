import React, {ComponentPropsWithoutRef, FunctionComponent} from 'react';
import {cn} from "@/utils/utils.tsx";
interface ButtonProps extends ComponentPropsWithoutRef<'button'>{
    btnText:string
    fill?:boolean
}
const Button:FunctionComponent<ButtonProps> = ({className,btnText,fill=false,...props}) => {
    return (
        <button
        className={cn('flex uppercase',className,{'border-y-gray-500':fill==true})}
        {...props}
        >
            {btnText}
        </button>
    );
};

export default Button;
