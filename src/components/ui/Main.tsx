import React, {FunctionComponent} from 'react';

type MainProps={
    children:JSX.Element |JSX.Element[]
}
const Main:FunctionComponent<MainProps> = ({children}) => {
    return (
        <div className={'dark:bg-lime-50'}>
            {children}
        </div>
    );
};

export default Main;
