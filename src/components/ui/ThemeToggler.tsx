import React from 'react';
import {useAppDispatch, useAppSelector} from "@/redux/hooks.tsx";
import {Themes} from "@/constants/constants.tsx";
import {ReactComponent as ThemeLightIcon} from "../../assets/images/theme-light.svg";
import {ReactComponent as ThemeDarkIcon} from "../../assets/images/theme-dark.svg";
import {setTheme} from "@/redux/store/themeSlice.tsx";

const ThemeToggler = () => {
    const currentTheme = useAppSelector(state => state.themeSlice.theme)
    const dispatch = useAppDispatch()
    const changeTheme=(value:Themes)=>dispatch(setTheme(value))
    console.log(currentTheme)


        function toggleTheme() {

        if(currentTheme===Themes.dark){
            changeTheme(Themes.light)
            document.documentElement.classList.remove(Themes.dark)
        }
        else {
            changeTheme(Themes.dark)
            document.documentElement.classList.add(Themes.light)
        }

    }


    return (
            <>
            <button
                id="theme-toggle"
                onClick={toggleTheme}
                type="button"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >
                <>
                {currentTheme==Themes.dark  && <ThemeLightIcon/>}
                {currentTheme==Themes.light && <ThemeDarkIcon/>}
                </>
            </button>
            </>
    );
};

export default ThemeToggler;
