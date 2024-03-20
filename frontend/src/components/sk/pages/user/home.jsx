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

            <section className="text-gray-400 bg-transparent body-font flex flex-col justify-center h-[calc(100vh_-_110px)]">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold uppercase text-white">HERE TO CREATE
                            <br className="hidden lg:inline-block" /> MOMENTS THAT LAST
                            <br className="hidden lg:inline-block" /> A <span className='text-primary'>LIFETIME</span>
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

            <section id='about' className="w-full text-white bg-gray-900 body-font relative">
                <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                    <h1 className="sm:text-3xl w-full text-center text-2xl font-bold title-font mb-20 text-gray-300">About Us</h1>
                    <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                        <div className="w-full lg:w-6/12">
                            <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">We are here to make great design accessible and delightfull for everyone</h2>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire,</p>
                        </div>
                        <div className="w-full lg:w-6/12">
                            <img className="lg:block hidden w-full" src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png" alt="people discussing on board" />
                            <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png" alt="people discussing on board" />
                            <img className="sm:hidden block w-full" src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png" alt="people discussing on board" />
                        </div>
                    </div>

                    <div className="relative mt-24">
                        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                            <div className="z-20 w-12 h-12 bg-orange-800 rounded-full flex justify-center items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 5V21" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19 5V14" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5 4.99984C5.93464 4.08371 7.19124 3.57056 8.5 3.57056C9.80876 3.57056 11.0654 4.08371 12 4.99984C12.9346 5.91598 14.1912 6.42913 15.5 6.42913C16.8088 6.42913 18.0654 5.91598 19 4.99984" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5 14.0001C5.93464 13.084 7.19124 12.5708 8.5 12.5708C9.80876 12.5708 11.0654 13.084 12 14.0001C12.9346 14.9162 14.1912 15.4294 15.5 15.4294C16.8088 15.4294 18.0654 14.9162 19 14.0001" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <svg className="z-20" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="#9a3412" />
                                <path d="M26 15V19C26 19.2652 26.1054 19.5196 26.2929 19.7071C26.4804 19.8946 26.7348 20 27 20H31" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M31 30V31C31 31.5304 30.7893 32.0391 30.4142 32.4142C30.0391 32.7893 29.5304 33 29 33H19C18.4696 33 17.9609 32.7893 17.5858 32.4142C17.2107 32.0391 17 31.5304 17 31V30" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M30 26H33M15 26H18H15ZM22.5 26H25.5H22.5Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17 22V17C17 16.4696 17.2107 15.9609 17.5858 15.5858C17.9609 15.2107 18.4696 15 19 15H26L31 20V22" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <svg className="z-20 sm:block hidden" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="#9a3412" />
                                <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
                    </div>
                    <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                        <div>
                            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-300 mt-6">Founded</p>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div>
                            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-300 mt-6">50M montly enrichments</p>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className="sm:block hidden">
                            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-300 mt-6">400k User</p>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    <div className="sm:hidden block relative mt-8">
                        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                            <svg className="z-20" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="#9a3412" />
                                <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
                    </div>
                    <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                        <div>
                            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-300 mt-6">400k User</p>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>

                    <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
                        <div className="w-full lg:w-6/12">
                            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-300">Our Mission</h2>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                            <p className="font-normal text-base leading-6 text-gray-600 w-full lg:w-10/12 xl:w-9/12 mt-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                        </div>
                        <div className="w-full lg:w-6/12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                                {/* <!-- Team Card --> */}
                                <div className="flex p-4 shadow-md">
                                    <div className="mr-6">
                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 15C20.4853 15 22.5 12.9853 22.5 10.5C22.5 8.01472 20.4853 6 18 6C15.5147 6 13.5 8.01472 13.5 10.5C13.5 12.9853 15.5147 15 18 15Z" stroke="#9a3412" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M25.5 28.5C27.9853 28.5 30 26.4853 30 24C30 21.5147 27.9853 19.5 25.5 19.5C23.0147 19.5 21 21.5147 21 24C21 26.4853 23.0147 28.5 25.5 28.5Z" stroke="#9a3412" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.5 28.5C12.9853 28.5 15 26.4853 15 24C15 21.5147 12.9853 19.5 10.5 19.5C8.01472 19.5 6 21.5147 6 24C6 26.4853 8.01472 28.5 10.5 28.5Z" stroke="#9a3412" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="">
                                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-300">Team</p>
                                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                </div>

                                {/* <!-- Board Card --> */}
                                <div className="flex p-4 shadow-md">
                                    <div className="mr-6">
                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 10.5C12.1569 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 12.1569 4.5 10.5 4.5C8.84315 4.5 7.5 5.84315 7.5 7.5C7.5 9.15685 8.84315 10.5 10.5 10.5Z" stroke="#9a3412" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.5 33V25.5L6 24V18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V24L13.5 25.5V33" stroke="#9a3412" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M25.5 10.5C27.1569 10.5 28.5 9.15685 28.5 7.5C28.5 5.84315 27.1569 4.5 25.5 4.5C23.8431 4.5 22.5 5.84315 22.5 7.5C22.5 9.15685 23.8431 10.5 25.5 10.5Z" stroke="#9a3412" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22.5 33V27H19.5L22.5 18C22.5 17.6022 22.658 17.2206 22.9393 16.9393C23.2206 16.658 23.6022 16.5 24 16.5H27C27.3978 16.5 27.7794 16.658 28.0607 16.9393C28.342 17.2206 28.5 17.6022 28.5 18L31.5 27H28.5V33" stroke="#9a3412" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="">
                                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-300">Board</p>
                                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                </div>

                                {/* <!-- Press Card --> */}
                                <div className="flex p-4 shadow-md">
                                    <div className="mr-6">
                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z" stroke="#9a3412" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.5 10.5L18 19.5L31.5 10.5" stroke="#9a3412" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="">
                                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-300">Press</p>
                                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='contact' className="text-gray-400 bg-gray-900 body-font relative">
                <h1 className="sm:text-3xl w-full text-center text-2xl font-bold title-font mb-20 text-gray-300">Contact Us</h1>
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            title="map"
                            className="absolute inset-0"
                            style={{
                                width: '100%',
                                height: '100%',
                                filter: 'grayscale(1) contrast(1.2) opacity(0.16)'
                            }}
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            scrolling="no"
                            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                        ></iframe>

                        <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1 text-sm">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                                <a href='mailto:kingkrabby10@gmail.com' className="text-primary text-sm leading-relaxed">WrapIt</a>
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed text-sm">+91 9342222407</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p className="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-orange-800 focus:ring-2 focus:ring-orange-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-orange-800 focus:ring-2 focus:ring-orange-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                            <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-orange-800 focus:ring-2 focus:ring-orange-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white transition-colors duration-300 bg-orange-800 border-2 border-orange-800 hover:bg-black hover:bg-opacity-20 hover:text-primary py-2 px-6 rounded-lg text-lg">Submit</button>
                        <p className="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>
                </div>
            </section>

            {/* <section id='contact' className="w-full h-screen text-gray-400 bg-gray-900 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-300">Contact Us</h1>
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
                                <button className="flex transition-colors duration-300 mx-auto text-primary-text border-2 border-orange-800 bg-orange-800 hover:bg-black hover:bg-opacity-20 hover:text-primary py-1 px-8 focus:outline-none rounded text-lg capitalize">submit</button>
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
            </section> */}
        </div>
    )
}
