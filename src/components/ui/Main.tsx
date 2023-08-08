import React, {FunctionComponent} from 'react';

type MainProps={
    children:JSX.Element |JSX.Element[]
}
const Main:FunctionComponent<MainProps> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Main;
