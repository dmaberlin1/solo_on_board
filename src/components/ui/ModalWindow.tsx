import React, {FunctionComponent} from 'react';
type ModalWindowProps={
    children:JSX.Element|JSX.Element[];
    title:string;
}

const ModalWindow:FunctionComponent<ModalWindowProps> = ({children,title}) => {
    return (
        <div className={'container '}>
        <h2>{title}</h2>
            {children}
        </div>
    );
};

export default ModalWindow;
