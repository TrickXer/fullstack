/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home(props) {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col flex-auto w-full'>
            {/* <div className='flex flex-col flex-auto text-white'>
                <div className='mt-16 text-[60px] flex flex-col justify-center items-center'>
                    <p className='text-3xl tracking-wide'>We Are Q Productions</p>
                    <h1 className='mt-8 flex flex-col text-center font-bold'>
                        <span className='text-center'>HERE TO CREATE</span>
                        <span className='text-center'>MOMENTS THAT LAST</span>
                        <span className='text-center'>A LIFETIME</span>
                    </h1>

                    <div className='mt-8'>
                        <Button className="bg-primary tracking-widest transition-colors duration-500 text-primary-text hover:bg-black hover:bg-opacity-10 border-2 border-transparent hover:border-2 hover:border-primary hover:text-primary"
                            onClick={() => navigate("/user/events")}
                        >
                            upcoming events
                        </Button>
                    </div>
                </div>
            </div> */}

            <section className="text-gray-400 bg-transparent body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold uppercase text-white">HERE TO CREATE
                            <br className="hidden lg:inline-block" />MOMENTS THAT LAST
                            <br className="hidden lg:inline-block" />A LIFETIME
                        </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <button onClick={() => navigate("/user/events")} className="inline-flex text-primary-text capitalize bg-orange-800 border-2 border-orange-800 hover:bg-black hover:bg-opacity-20 hover:text-primary py-2 px-6 focus:outline-none rounded text-lg">
                                upcoming events
                            </button>
                            <button className="capitalize ml-4 inline-flex text-gray-400 bg-gray-800 border-2 border-gray-800 hover:border-gray-700 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                                learn more
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" />
                </div>
            </section>

            <section id='contact' className="w-full h-screen text-gray-400 bg-gray-900 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Us</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm text-gray-400">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-orange-800 focus:bg-gray-900 focus:ring-2 focus:ring-orange-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="email" className="leading-7 text-sm text-gray-400">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-orange-800 focus:bg-gray-900 focus:ring-2 focus:ring-orange-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="message" className="leading-7 text-sm text-gray-400">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-orange-800 focus:bg-gray-900 focus:ring-2 focus:ring-orange-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-primary-text border-2 border-orange-800 bg-orange-800 hover:bg-black hover:bg-opacity-20 hover:text-primary py-1 px-8 focus:outline-none rounded text-lg capitalize">submit</button>
                            </div>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                                <a href='mailto:wrapit@gmail.com' className="text-primary">wrapit@gmail.com</a>
                                <p className="leading-normal my-5">49 Smith St.
                                    <br />Saint Cloud, MN 56301
                                </p>
                                <span className="inline-flex">
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-4 text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-4 text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-4 text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
