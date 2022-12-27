import React, {FC} from 'react';
import {EyeIcon, EyeSlashIcon} from '@heroicons/react/24/solid'
import Link from "next/link";
import {msg_fb_icons} from '../assets';
import useForm from "../components/input/hooks/useForm";
import MyInput from "../components/input/ui/MyInput";

const Login: FC<any> = (props) => {
    const {password, username, hidePassword, passwordInputType, handleInputChange, isPasswordShown} = useForm();

    return (
        <main className={`bg-primary min-h-screen w-full text-center pt-9 pb-2`}>
            <img src={msg_fb_icons.src} alt="msg_fb_icons" className={`w-40 h-auto mx-auto mb-4`}/>
            <h1 className={`text-2xl font-bold`}>Hello Again!</h1>
            <p className={`mt-2 mb-7 text-lg font-light max-w-[60%] mx-auto`}>
                Welcome back you have been missed!
            </p>

            <div className={`space-y-5 flex flex-col items-center`}>
                <MyInput
                    id={'username'}
                    type={'text'}
                    placeholder={`Enter username`}
                    value={username}
                    onChange={handleInputChange}
                />
                <div className={`bg-gray-600 w-4/5 rounded-xl min-h-[2rem] flex space-x-2 items-center px-4 py-3`}>
                    <input
                        id={'password'}
                        type={passwordInputType}
                        placeholder={`Password`}
                        value={password}
                        onChange={handleInputChange}
                        className={`w-full h-full border-none outline-none bg-transparent`}
                    />
                    <span onClick={isPasswordShown} className={`cursor-pointer`}>
                        {hidePassword ? <EyeSlashIcon className={`w-6`}/> : <EyeIcon className={`w-6`}/>}
                    </span>
                </div>
            </div>

            <p className={`text-sm font-semibold text-gray-500 text-right mx-10 mt-4 mb-7 cursor-pointer`}>
                Recovery Password
            </p>
            <button className={`bg-system-blue px-5 py-3 text-sm text-white font-bold rounded-xl w-4/5`}>
                Sign In
            </button>
            <p className={`text-sm font-semibold mt-8 text-gray-500 cursor-pointer`}>
                --- Or continue with ---
            </p>

            <div className={`flex flex-1 items-center justify-evenly mt-8`}>
                <div className={`bg-secondary px-5 py-3 rounded-md cursor-pointer`}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                         alt="google icon"/>
                </div>
            </div>

            <Link href="/register">
                <p className={`text-sm mt-8 font-semibold cursor-pointer`}>
                    Not a member? <span className={`text-system-blue`}>Register now</span>
                </p>
            </Link>
        </main>
    );
}

export default Login;