import React, {FC} from 'react';
import {EyeIcon, EyeSlashIcon} from '@heroicons/react/24/solid'
import Link from "next/link";
import {msg_fb_icons} from '../assets';
import useForm from "../components/input/hooks/useForm";
import MyInput from "../components/input/ui/MyInput";
import {motion} from "framer-motion";
import {signIn, useSession, signOut} from "next-auth/react"

const tapProps = {
    scale: [1, 0.95],
    transition: {duration: 0.25, ease: 'easeInOut'}
}

const Login: FC<any> = (props) => {
    const {data: session} = useSession();
    const {password, username, hidePassword, passwordInputType, handleInputChange, isPasswordShown} = useForm();

    return (
        <>
            {session ?
                <>
                    <h1 className={`text-3xl`}>Signed in</h1>
                    <button onClick={() => signOut()}>Sign in</button>
                </>
                :
                <>
                    <main className={`bg-primary min-h-screen w-full text-center pt-11`}>
                        <img src={msg_fb_icons.src} alt="msg_fb_icons" className={`w-40 h-auto mx-auto mb-4 lg:w-48`}/>
                        <h1 className={`text-2xl font-bold lg:text-3xl`}>Hello Again!</h1>
                        <p className={`mt-2 mb-7 text-lg font-light max-w-[60%] mx-auto lg:text-xl`}>
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
                            <div
                                className={`bg-gray-700 text-white w-4/5 rounded-xl min-h-[2rem] flex space-x-2 items-center px-4 py-3 sm:max-w-lg`}>
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

                        <motion.p
                            whileTap={tapProps}
                            className={`w-4/5 mx-auto text-sm font-semibold text-gray-500 text-right mt-4 cursor-pointer sm:max-w-lg lg:text-base`}
                        >
                            Recovery Password
                        </motion.p>

                        <motion.button
                            whileTap={tapProps}
                            onClick={() => signIn()}
                            className={`bg-system-blue px-5 py-3 text-white font-bold rounded-xl w-4/5 mt-7 mb-8 sm:max-w-lg lg:text-lg`}
                        >
                            Sign In
                        </motion.button>

                        <p className={`text-sm font-semibold text-gray-500 lg:text-base`}>
                            --- Or continue with ---
                        </p>

                        <div className={`flex flex-1 items-center justify-evenly my-8`}>
                            <motion.div
                                whileTap={tapProps}
                                className={`bg-secondary px-5 py-3 rounded-md cursor-pointer`}
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                    alt="google icon"
                                    className={`lg:w-8`}
                                />
                            </motion.div>
                        </div>

                        <Link href="/register">
                            <motion.p whileTap={tapProps}
                                      className={`text-sm font-semibold cursor-pointer lg:text-base`}>
                                Not a member? <span className={`text-system-blue`}>Register now</span>
                            </motion.p>
                        </Link>
                    </main>
                </>
            }
        </>
    );
}

export default Login;