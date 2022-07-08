import React from 'react';
import { useState } from 'react';
import Modal from './Modal';
import Register from './Register';
import Reset from './Reset';

const Login = ({ showModalLogin, setShowModalLogin }) => {
    const [showModalReset, setShowModalReset] = useState(false);
    const [showModalRegistration, setShowModalRegistration] = useState(false);
    const register = 'Sign up';
    const reset = 'Reset password';

    return (
        <>
            {
                showModalLogin &&
                <section>
                    <div>
                        <div class="flex justify-center items-center bg-gray-100">
                            <form class="p-10 bg-white rounded flex justify-center items-center flex-col">
                                <input type="email" name="email" class="mb-5 p-3 w-80 focus:border-[#00affa] rounded border-2 outline-none" autocomplete="off" placeholder="Email" required />
                                <input type="password" name="password" class="mb-5 p-3 w-80 focus:border-[#00affa] rounded border-2 outline-none" autocomplete="off" placeholder="Password" required />
                                <div className='flex justify-between w-full mb-8'>
                                    <span className='cursor-pointer' onClick={() => setShowModalReset(true)}>Forgot password?</span>
                                    <span className='cursor-pointer' onClick={() => setShowModalRegistration(true)}>Create account.</span>
                                </div>
                                <button className='px-6 py-2 border-transparent border-2 border-white bg-[#00affa] text-white rounded hover:border-[#00affa] hover:bg-transparent hover:text-black duration-500' onClick={() => setShowModalLogin(false)}>Sign In</button>
                            </form>
                        </div>
                    </div>
                    {
                        (showModalRegistration &&
                            <Modal
                                showModal={showModalRegistration}
                                setShowModal={setShowModalRegistration}
                                title={register}
                                content={<Register
                                    showModalRegistration={showModalRegistration}
                                    setShowModalRegistration={setShowModalRegistration}
                                />}
                            />)

                        ||

                        (showModalReset &&
                            <Modal
                                showModal={showModalReset}
                                setShowModal={setShowModalReset}
                                title={reset}
                                content={<Reset
                                    showModalReset={showModalReset}
                                    setShowModalReset={setShowModalReset}
                                />}
                            />)
                    }
                </section>
            }
        </>
    );
};

export default Login;