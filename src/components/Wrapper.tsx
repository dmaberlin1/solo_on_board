import React, {FC, FunctionComponent} from 'react';

interface IWrapper {
    children:JSX.Element|JSX.Element[];
}
const Wrapper:FC<IWrapper> = ({children}) => {
    return (
        <div className={'flex flex-col min-h-screen w-full bg-white mx-auto container rounded-lg shadow dark:bg-gray-900'}>
            {children}
        </div>
    );
};

export default Wrapper;
