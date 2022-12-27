import React, {FC} from 'react';
import {msg_fb_icons} from "../assets";
import {EyeIcon, EyeSlashIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import useForm from "../components/input/hooks/useForm";
import MyInput from "../components/input/ui/MyInput";
import {motion} from "framer-motion";

const tapProps = {
    scale: [1, 0.95],
    transition: {duration: 0.25, ease: 'easeInOut'}
}
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
        <main className={`bg-primary min-h-screen w-full text-center pt-11`}>
            <img src={msg_fb_icons.src} alt="msg_fb_icons" className={`w-40 h-auto mx-auto mb-4 lg:w-48`}/>
            <h1 className={`text-2xl font-bold mb-7 lg:text-3xl`}>Register</h1>

            <div className={`space-y-5 flex flex-col items-center`}>
                <div className={`space-y-5 flex flex-col items-center w-full lg:flex-row lg:space-x-3 lg:max-w-lg lg:items-end`}>
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
                </div>

                <MyInput
                    id={'email'}
                    type={'email'}
                    placeholder={`Your Email Address`}
                    value={email}
                    onChange={handleInputChange}
                />

                <div
                    className={`bg-gray-700 text-white w-4/5 rounded-xl min-h-[2rem] flex space-x-2 items-center px-4 py-3 sm:max-w-lg`}>
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

            <motion.button whileTap={tapProps}
                           className={`bg-system-blue px-5 py-3 text-white font-bold rounded-xl w-4/5 my-8 sm:max-w-lg lg:text-lg`}>
                Create Account
            </motion.button>

            <p className={`text-sm font-semibold text-gray-500 lg:text-base`}>
                --- Or continue with ---
            </p>

            <div className={`flex flex-1 items-center justify-evenly mt-8`}>
                <motion.div whileTap={tapProps} className={`bg-secondary px-5 py-3 rounded-md cursor-pointer`}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="google icon"
                        className={`lg:w-8`}
                    />
                </motion.div>
            </div>

            <Link href="/login">
                <motion.p whileTap={tapProps} className={`text-sm mt-8 font-semibold cursor-pointer lg:text-base`}>
                    Already have an account? <span className={`text-system-blue`}>Login now</span>
                </motion.p>
            </Link>
        </main>
    );
};

export default Register;
