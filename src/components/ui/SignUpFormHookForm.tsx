import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "@/redux/hooks.tsx";
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {setUser} from "@/redux/store/userSlice.tsx";
import {PathPages} from "@/App.tsx";
import 'firebase/auth'
import Button from "@/components/ui/Button.tsx";
import ReactSelect from 'react-select'
import {regexpMail} from "@/constants/constants.tsx";

interface ISignUpFormData {
    email: string
    password: string
    name: string
    address:IAddress
}

interface IAddress {
    country:string
    city:string
    street?:string
}
interface IOptions {
    value: string,
    label: string
}

const options: IOptions[] = [
    {
        value: 'ukraine',
        label: 'Ukraine'
    },
    {
        value: 'germany',
        label: 'Germany'
    },
    {
        value: 'france',
        label: 'France'
    },
    {
        value: 'italy',
        label: 'Italy'
    },
    {
        value: 'spain',
        label: 'Spain'
    },
    {
        value: 'netherlands',
        label: 'Netherlands'
    },
    {
        value: 'sweden',
        label: 'Sweden'
    },
    {
        value: 'usa',
        label: 'United States'
    },
]



const SignUpForm = () => {
    const navigate = useNavigate()
    const auth = getAuth()
    const formData: ISignUpFormData = {email: '', password: '', name: '',address:{city:'',country:''}}
    const [responseBody, setResponseBody] = useState<ISignUpFormData>(formData)
    const dispatch = useAppDispatch()
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset,
        getValues,
        getFieldState,
        setValue,
        control,
    } = useForm<ISignUpFormData>({
        mode: "onBlur",
        reValidateMode: 'onChange'
    })


    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setResponseBody({...responseBody, [name]: value})
    }

    const onSubmitHandlerSignUp: SubmitHandler<ISignUpFormData> = (data) => {
        // event.preventDefault()
        //Form submission here
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user
                updateProfile(user, {
                    displayName: data.name
                }).then(() => {
                    // const user=userCredential.user
                    console.log(user);
                    dispatch(setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.refreshToken,
                        displayName: user.displayName
                    }));
                    reset()
                    navigate(PathPages.home)
                })
                    .catch((e) => {
                        alert('Invalid user')
                        console.log(Error(e))
                    })

            })
    }


    const getValue=(value:string)=>
        value ? options.find((option)=>option.value===value) :''


    return (
        <>
            <form onSubmit={handleSubmit(onSubmitHandlerSignUp)}>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="email"
                        // name="email"
                           id="email"
                           {...register('email', {
                               required: 'field is required',
                               minLength: {value: 8, message: 'email so short'},
                               maxLength: {value: 40, message: 'email so long'},
                               pattern: {
                                   value: regexpMail,
                                   message: 'Enter valid email'

                               }
                           })}
                           onChange={(e) => inputChangeHandler(e)}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder="name@gmail.com" required/>
                    <label htmlFor="floating_email"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Email address</label>
                    <div className={'h-0.5'}>
                        {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
                    </div>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="password"
                        // name="password"
                           id="password"
                           {...register('password', {
                               required: 'field is required',
                               minLength: {value: 8, message: 'password so short'},
                               maxLength: {value: 40, message: 'password so long'}

                           })}
                           onChange={(e) => inputChangeHandler(e)}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="password"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Password</label>
                    <div className={'h-0.5'}>
                        {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
                    </div>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="password" name="repeat_password" id="repeat_password"
                           onChange={(e) => inputChangeHandler(e)}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="repeat_password"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Confirm password
                    </label>
                    {/*<div className={'h-0.5'}>*/}
                    {/*    {errors?.repeat_password && <p>Error!</p>}*/}
                    {/*</div>*/}
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text"
                               onChange={(e) => inputChangeHandler(e)}
                               name="name" id="name"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="name"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >name</label>
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
                <Controller control={control}  name={'address.country'}
                            rules={{
                                required:'Country is required!'
                            }}
                            render={({field:{onChange,value},fieldState:{error}})=>(
                                <div>
                                    <ReactSelect
                                        className={'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
                                        classNamePrefix={'custom-select'}
                                        placeholder={'Countries'}
                                        options={options}
                                        value={getValue(value)}
                                        onChange={(newValue)=>onChange((newValue as IOptions).value)}

                                    />
                                    {error &&(
                                        <div className={'bg-red-200 font-bold'}>{error.message}</div>
                                    )}
                                </div>
                            )}
                />
                <button type="submit"
                        disabled={!isValid}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                </button>
            </form>

            <Button btnText={'fill data'} onClick={() => {
                setValue('name', 'defaultName')
                setValue('email', 'example@gmail.com')
            }
            }/>



        </>
    );
};

export default SignUpForm;
