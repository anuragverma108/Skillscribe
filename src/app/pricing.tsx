"use client";
import React from 'react'

const Pricing = () => {
    return (

        <section className='bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]'>
            <div className='py-8'>
                <h1 className='font-bold text-center text-6xl py-6 text-gray-200'>Pricing</h1>
                <h4 className='font-bold text-center text-gray-400 text-xl'>Use it for free for yourself, upgrade when your team needs advanced control.</h4>
            </div>
            <div className="relative items-center w-full mx-auto md:px-12 lg:px-16 max-w-7xl">
                <div>
                    <div className="relative p-10 space-y-12 overflow-hidden lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 rounded-xl">
                        <div className="relative flex flex-col p-8 bg-white rounded-xl">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-neutral-600">Freelancer</h3>
                                <p className="flex items-baseline mt-4 text-neutral-600">
                                    <span className="text-5xl font-extrabold tracking-tight">$24</span>
                                    <span className="ml-1 text-xl font-semibold">/month</span>
                                </p>
                                <p className="mt-6 text-gray-500">The essentials to provide your best work for clients.</p>


                                <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                                    <span className="text-lg font-semibold text-neutral-600">What's included?</span>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">Up to 10 credit cards</span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">Up to 1,000 credits</span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">Tacky wallet</span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">Personal profile only</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6 rounded-lg">
                                <a href="#" type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Get Started </a>
                            </div>
                        </div>
                        <div className="relative flex flex-col p-8 bg-blue-600 rounded-2xl">
                            <div className="relative flex-1">
                                <h3 className="text-xl font-semibold text-white">Startup</h3>

                                <p className="flex items-baseline mt-4 text-white">
                                    <span className="text-5xl font-extrabold tracking-tight">$32</span>
                                    <span className="ml-1 text-xl font-semibold">/month</span>
                                </p>
                                <p className="mt-6 text-white text-solitud">A plan that scales with your rapidly growing business.</p>


                                <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                                    <span className="text-lg font-semibold text-white">What's included?</span>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-white">Up to 10 credit cards</span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-white">Up to 10,000 credits</span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-white">Less tacky wallet </span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-white">Profile and portafolio</span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-white">Support</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="z-50 mt-6 rounded-lg">
                                <a href="/pricing" type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Get started </a>
                            </div>
                        </div>
                        <div className="relative flex flex-col p-8 bg-white rounded-xl">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-neutral-600">Enterprise</h3>
                                <p className="flex items-baseline mt-4 text-neutral-600">
                                    <span className="text-5xl font-extrabold tracking-tight">$48</span>
                                    <span className="ml-1 text-xl font-semibold">/month</span>
                                </p>
                                <p className="mt-6 text-gray-500">Dedicated support and infrastructure for your company.</p>


                                <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                                    <span className="text-lg font-semibold text-neutral-600">What's included?</span>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">Unlimited credit cards</span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">Unlimited credits</span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">A super wallet</span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">Shout out </span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">Better support</span>
                                    </li>

                                    <li className="flex">
                                        <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-neutral-600">Custom integrations</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-6 rounded-lg">
                                <a href="#" type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Get Started </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Pricing