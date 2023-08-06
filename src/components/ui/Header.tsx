import React, {FunctionComponent} from 'react';
import {ReactComponent as Logo} from '../../assets/images/solo_logo.svg'
const Header:FunctionComponent = () => {
    return (
        <header>
            <Logo></Logo>
            <h2>Free online application to learn blind typing and typing tests.</h2>
        </header>
    );
};

export default Header;
