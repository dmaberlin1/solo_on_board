import React from 'react';
import {ReactComponent as GitWhite} from "../../assets/images/github-mark-white.svg";
import {ReactComponent as GitBlack} from "../../assets/images/github-mark.svg";

const Footer = () => {
    return (
        <footer className={'flex'}>
            <div>Made by
                <div>
                    <span>Frontend</span>
                    <a href="https://github/dmaberlin1">
                        <GitWhite/> dmaberlin1
                    </a>
                </div>
                <div>
                    <span>Backend</span>
                    <GitBlack/>
                    <a href="https://github.com/Koekto-code">Koekto-code</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
