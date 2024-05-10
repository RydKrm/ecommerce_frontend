import Link from "next/link";
import React from "react";
import { useForm } from 'react-hook-form';

const Registration = () => {
    // const { register, handleSubmit, reset, formState: { errors }, watch } = useForm;
    return <div className="mb-4 mt-5 w-4/5 mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Create Your Account</h1>
        <div className="card flex-shrink-0 shadow-2xl bg-base-100">
            <div className="card-body">
                <form className="">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                type="text"
                                id="name"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                type="email"
                                id="email"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                type="password"
                                id="password"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                type="password"
                                id="confirmPassword"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="photoUrl">
                                Photo
                            </label>
                            <input
                                className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                type="file"
                                id="photoUrl"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">
                                Phone Number
                            </label>
                            <input
                                className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                type="text"
                                id="phoneNumber"
                            />
                        </div>

                    </div>
                    <div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                                Address
                            </label>
                            <textarea
                                className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                id="address"
                            />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <button
                            className="bg-[#408697] hover:bg-[#52D6F4] text-white font-bold py-4 mt-4 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                    <div>
                        <p className="mb-0 mt-2 pt-1 text-xl font-bold">
                            Already Have an account ?
                            <Link
                                href='/login'
                                className="text-red-700 transition duration-150 ease-in-out hover:text-danger-600 focus:text-red-600 active:text-red-700"
                            >  Login
                            </Link>
                        </p>
                    </div>

                    <div>
                        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">OR</p>
                        </div>
                    </div>

                </form>


            </div>
        </div>
    </div>
};

export default Registration;
