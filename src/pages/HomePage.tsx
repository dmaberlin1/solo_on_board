import React from 'react';
import ModalWindow from "@/components/ui/ModalWindow.tsx";
import Select from "@/components/ui/Select.tsx";
import {sentencesOptions} from "@/constants/constants.tsx";
import Button from "@/components/ui/Button.tsx";
import Main from "@/components/ui/Main.tsx";
import ThemeToggler from "@/components/ui/ThemeToggler.tsx";
import {useAppDispatch, useAppSelector} from "@/redux/hooks.tsx";
import {setIsTestStarted, setSentences} from "@/redux/store/testSlice.tsx";
import Text from "@/components/Text.tsx";
import {useAuth} from "@/hooks/use-auth.tsx";

const HomePage = () => {
    const dispatch = useAppDispatch()
    const {isAuth,email}=useAuth()
    const isTestStarted: boolean = useAppSelector(state => state.test.isTestStarted)
    const sentences = useAppSelector(state => state.test.sentences);
    const testStateToggle = () => dispatch(setIsTestStarted(true))
    const changeSentences = (value: string) => dispatch(setSentences(value));


    return (
        <div>
            <Main>
                <>
                    <ThemeToggler/>
                    {isTestStarted && <Text/>}
                    {!isTestStarted &&
                        <ModalWindow title={'Take a typing test'}>
                            <label className={'font-bold text-sm'} htmlFor={'select-sentences'}>
                                Choose amount of sentences
                            </label>
                            <Select id={'select-sentences'}
                                    defaultValue={sentences}
                                    options={sentencesOptions}
                                    onChange={(event) => changeSentences(event.target.value)}
                            />


                            <Button btnText={'start test'} className={'bg-gray-400'}
                                    onClick={testStateToggle}></Button>
                        </ModalWindow>
                    }
                </>
            </Main>
        </div>
    );
};

export default HomePage;
