import Image from "next/image";
import Link from "next/link";
import React from "react";
const image = 'https://i.ibb.co/7zK7vyj/larm-rmah-AEa-TUnvneik-unsplash.jpg';

const Login = () => {
  return (
    <div>
    <section className="h-screen">
        <div className="h-full">
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                <div className="hidden md:hidden lg:block md:shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                    <Image
                        src= {image}
                        className="w-full"
                        alt="Sample image"
                        width={400}
                        height={400}
                    />
                </div>

                <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                    <div className="flex flex-row items-center justify-center lg:justify-start">
                        <p className="mb-0 mr-4 text-lg">Sign in with</p>
                    </div>

                    <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p className="mx-4 mb-0 text-center font-semibold dark:text-white">Or</p>
                    </div>


                    <form className="px-8 py-6">
                        <div className="mb-4">
                            <label className="block mb-2 text-lg font-semibold text-gray-800" htmlFor="username">
                                User Email
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                type="email"
                                id="email"
                                placeholder="Enter your Email"
                                name='email'
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-lg font-semibold text-gray-800" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                name='password'
                            />
                        </div>

                        <button className="btn btn-success w-full" type='submit'> Log In</button>
                    </form>

                    <div className="text-center lg:text-left">
                        <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                            Do not have an account ?
                            <Link
                                href="/registration"
                                className="text-red-400 transition duration-150 ease-in-out hover:text-danger-600 focus:text-rdd-600 active:text-red-700 ms-2"
                            >
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
  
  )
};

export default Login;
