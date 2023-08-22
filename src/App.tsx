import {FC, useState} from "react";
import Footer from "@/components/ui/Footer.tsx";
import Header from "@/components/ui/Header.tsx";
import Main from "@/components/ui/Main.tsx";
import Text from "@/components/Text.tsx";
import {useAppDispatch, useAppSelector} from "@/redux/hooks.tsx";
import {setIsTestStarted, setSentences} from "@/redux/store/testSlice.tsx";
import ModalWindow from "@/components/ui/ModalWindow.tsx";
import Button from "@/components/ui/Button.tsx";
import Select from "@/components/ui/Select.tsx";
import {sentencesOptions} from "@/constants/constants.tsx";
import Wrapper from "@/components/Wrapper.tsx";
import ThemeToggler from "@/components/ui/ThemeToggler.tsx";

const App: FC = () => {
    const dispatch = useAppDispatch()
    const isTestStarted: boolean = useAppSelector(state => state.testSlice.isTestStarted)
    const sentences = useAppSelector(state => state.testSlice.sentences);
    const testStateToggle = () => dispatch(setIsTestStarted(true))
    const changeSentences = (value: string) => dispatch(setSentences(value));

    return (
        <>
            <Wrapper>
                <Header></Header>
                <Main>
                    <>
                        <ThemeToggler/>
                        {isTestStarted &&
                            <Text/>
                        }
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

            </Wrapper>
            <div className={'w-full fixed bottom-0'}><Footer/></div>
        </>
    )
};

export default App;
