import {ComponentPropsWithoutRef, FC} from "react";

interface ISelect extends ComponentPropsWithoutRef<'select'>{
    defaultValue:string;
    options:{
        value:string,
        name:string
    }[];
}


const Select:FC<ISelect> = ({defaultValue,options,...props}) => {
    return (
        <select className={'flex uppercase'}
        defaultValue={defaultValue}
                {...props}
        >
            {options.map(option=>{
                return (
                    <option key={option.value}
                    value={option.value}
                    >
                        {option.name}
                    </option>
                );
            })
            }
        </select>
    );
};

export default Select;
