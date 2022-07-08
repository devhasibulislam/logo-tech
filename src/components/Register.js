import React, { useState } from 'react';
import Login from './Login';
import Modal from './Modal';

const Register = ({ showModalRegistration, setShowModalRegistration }) => {
    const [showModalLogin, setShowModalLogin] = useState(false);
    const login = 'Sign in';
    
    return (
        <>
            {
                showModalRegistration &&
                <section>
                    <div>
                        <div class="flex justify-center items-center bg-gray-100">
                            <form class="p-10 bg-white rounded flex justify-center items-center flex-col">
                                <input type="text" name="name" class="mb-5 p-3 w-80 focus:border-[#00affa] rounded border-2 outline-none" autocomplete="off" placeholder="Name" required />
                                <input type="email" name="email" class="mb-5 p-3 w-80 focus:border-[#00affa] rounded border-2 outline-none" autocomplete="off" placeholder="Email" required />
                                <input type="password" name="password" class="mb-5 p-3 w-80 focus:border-[#00affa] rounded border-2 outline-none" autocomplete="off" placeholder="Password" required />
                                <div className='flex justify-between w-full mb-8'>
                                    <span className='cursor-pointer' onClick={() => setShowModalLogin(true)}>Have account?</span>
                                </div>
                                <button className='px-6 py-2 border-transparent border-2 border-white bg-[#00affa] text-white rounded hover:border-[#00affa] hover:bg-transparent hover:text-black duration-500' onClick={() => setShowModalRegistration(false)}>Sign Up</button>
                            </form>
                        </div>
                    </div>
                    {
                        showModalLogin &&
                        <Modal
                            showModal={showModalLogin}
                            setShowModal={setShowModalLogin}
                            title={login}
                            content={<Login
                                showModalLogin={showModalLogin}
                                setShowModalLogin={setShowModalLogin}
                            />}
                        />
                    }
                </section>
            }
        </>
    );
};

export default Register;