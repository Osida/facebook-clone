import React, {FC} from 'react';
import {msg_fb_icons} from "../assets";
import {EyeIcon, EyeSlashIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import useForm from "../components/input/hooks/useForm";
import MyInput from "../components/input/ui/MyInput";

const Register: FC<any> = (props) => {
    const {
        email,
        firstname,
        lastName,
        password,
        hidePassword,
        passwordInputType,
        handleInputChange,
        isPasswordShown
    } = useForm();

    return (
        <main className={`bg-primary min-h-screen w-full text-center pt-9 pb-2`}>
            <img src={msg_fb_icons.src} alt="msg_fb_icons" className={`w-40 h-auto mx-auto mb-4`}/>
            <h1 className={`text-2xl font-bold mb-7 `}>Register</h1>

            <div className={`space-y-5 flex flex-col items-center`}>
                <MyInput
                    id={'firstName'}
                    type={'text'}
                    placeholder={`Your First Name`}
                    value={firstname}
                    onChange={handleInputChange}
                />

                <MyInput
                    id={'lastName'}
                    type={'text'}
                    placeholder={`Your Last Name`}
                    value={lastName}
                    onChange={handleInputChange}
                />

                <MyInput
                    id={'email'}
                    type={'email'}
                    placeholder={`Your Email Address`}
                    value={email}
                    onChange={handleInputChange}
                />

                <div className={`bg-gray-700 text-white w-4/5 rounded-xl min-h-[2rem] flex space-x-2 items-center px-4 py-3`}>
                    <input
                        id={'password'}
                        type={passwordInputType}
                        placeholder={`Your Password`}
                        value={password}
                        onChange={handleInputChange}
                        className={`w-full h-full border-none outline-none bg-transparent`}
                    />
                    <span onClick={isPasswordShown} className={`cursor-pointer`}>
                        {hidePassword ? <EyeSlashIcon className={`w-6`}/> : <EyeIcon className={`w-6`}/>}
                    </span>
                </div>
            </div>

            <button className={`mt-9 bg-system-blue px-5 py-3 text-base text-white font-bold rounded-xl w-4/5`}>
                Create Account
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

            <Link href="/login">
                <p className={`text-sm mt-8 font-semibold cursor-pointer`}>
                    Already have an account? <span className={`text-system-blue`}>Login now</span>
                </p>
            </Link>
        </main>
    );
};

export default Register;
