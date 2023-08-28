import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "@/redux/hooks.tsx";
import { getAuth, createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {setUser} from "@/redux/store/userSlice.tsx";
import {PathPages} from "@/App.tsx";
import  * as firebase from "firebase/app";
import 'firebase/auth'

interface ISignUpFormData{
    email:string
    password:string
    name:string
}
const SignUpForm = () => {
    const navigate=useNavigate()
    const auth=getAuth()
    const formData: ISignUpFormData = {email: '', password: '',name:''}
    const [responseBody, setResponseBody] = useState<ISignUpFormData>(formData)
    const dispatch=useAppDispatch()



    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setResponseBody({...responseBody, [name]: value})
    }

    const onSubmitHandlerSignUp = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        //Form submission here

        console.log(responseBody)
        createUserWithEmailAndPassword(auth,responseBody.email,responseBody.password)
            .then((userCredential)=>{
                const user=userCredential.user
                updateProfile(user,{
                    displayName:responseBody.name
                })
                return user
            })
            .then((user)=>{
                // const user=userCredential.user

                console.log(user);
                dispatch(setUser({
                    email:user.email,
                    id:user.uid,
                    token:user.refreshToken,
                    displayName:user.displayName
                }));
                navigate(PathPages.home)
            })
            .catch(console.error)

    }


    return (

        <form onSubmit={onSubmitHandlerSignUp}>
            <div className="relative z-0 w-full mb-6 group">
                <input type="email" name="email" id="floating_email"
                       onChange={(e)=>inputChangeHandler(e)}
                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder=" " required/>
                <label htmlFor="floating_email"
                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Email address</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="password" name="password" id="floating_password"
                       onChange={(e)=>inputChangeHandler(e)}
                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder=" " required/>
                <label htmlFor="floating_password"
                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Password</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="password" name="repeat_password" id="floating_repeat_password"
                       onChange={(e)=>inputChangeHandler(e)}
                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder=" " required/>
                <label htmlFor="floating_repeat_password"
                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm
                    password</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text"
                           onChange={(e)=>inputChangeHandler(e)}
                           name="name" id="name"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_first_name"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                        name</label>
                </div>
                {/*last name not user*/}
                {/*<div className="relative z-0 w-full mb-6 group">*/}
                {/*    <input type="text" name="floating_last_name" id="floating_last_name"*/}
                {/*           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"*/}
                {/*           placeholder=" " required/>*/}
                {/*    <label htmlFor="floating_last_name"*/}
                {/*           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last*/}
                {/*        name</label>*/}
                {/*</div>*/}
            </div>

            <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
            </button>
        </form>

    );
};

export default SignUpForm;