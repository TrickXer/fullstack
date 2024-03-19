/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Search from '../ui/search'
import ListCard from '../listcard'
import { useSelector } from 'react-redux'
import Button from '../ui/button'
import Backdrop from '../ui/backdrop'

export default function Events(props) {
    const [open, setOpen] = useState(false)
    const events = useSelector(state => state.events.events.filter(event => event?.privacy === "private"))
    

    return (
        <div className='flex flex-auto bg-black bg-opacity-30'>
            <Backdrop open={open}>
                <div className=' pb-10 w-full mx-5 bg-neutral-900 rounded-lg'>
                    <div className='w-full flex justify-end'>
                        <button title='close' className='p-2 text-white hover:text-primary-hover' onClick={() => setOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className='flex w-full divide divide-x-2 divide-neutral-800'>
                        <div className='flex flex-auto items-center justify-center px-8'>
                            <form className='w-full flex flex-col space-y-6 bg-opacity-50 p-8 rounded-lg'>
                                <div className='pt-4 flex space-x-6'>
                                    <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-neutral-700 py-2 px-4 rounded-md focus:border-sky-500'
                                        placeholder="Firstname" name='firstname' id='firstname' />
                                    
                                    <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-neutral-700 py-2 px-4 rounded-md focus:border-sky-500'
                                    placeholder="Lastname" name='lastname' id='lastname' />
                                </div>
                                <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-neutral-700 py-2 px-4 rounded-md focus:border-sky-500'
                                    placeholder="Username" name='username' id='username' />
                                
                                <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-neutral-700 py-2 px-4 rounded-md focus:border-sky-500'
                                    placeholder="Email" name='email' id='email' />
                                
                                <div className='flex space-x-6'>
                                    <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-neutral-700 py-2 px-4 rounded-md focus:border-sky-500'
                                        placeholder="Country" name='country' id='country' />
                                    
                                    <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-neutral-700 py-2 px-4 rounded-md focus:border-sky-500'
                                    placeholder="Phone No" name='phone' id='phone' />
                                </div>
                                
                                <div className='pt-8 flex flex-col space-y-6'>
                                    <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-neutral-700 py-2 px-4 rounded-md focus:border-sky-500'
                                        placeholder="Current Password" name='password' id='password' />
                                    
                                    <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-neutral-700 py-2 px-4 rounded-md focus:border-sky-500'
                                        placeholder="New Password" name='password' id='password' />
                                    
                                    <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-neutral-700 py-2 px-4 rounded-md focus:border-sky-500'
                                        placeholder="Confirm Password" name='password' id='password' />
                                </div>
                            </form>
                        </div>
                        <div className='flex w-[600px] px-16'>
                            <div className='pt-8 w-full'>
                                <Button className="w-full bg-primary hover:bg-primary-hover text-black disabled:text-neutral-500 disabled:bg-primary-disabled">Book</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Backdrop>
            <div className='flex flex-col w-full items-center m-5 text-white'>
                <div className='mb-8 px-2 h-16 w-full flex items-center justify-end'>
                    <button onClick={() => setOpen(true)} className="bg-black bg-opacity-30 py-2 px-6 transition-all duration-300 flex justify-center items-center space-x-3 capitalize text-xl rounded-lg border-2 border-primary hover:text-primary-text hover:bg-primary-hover text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 flex">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                        <span className='mb-1'>host</span>
                    </button>
                </div>
                {
                    events.length > 0 &&
                        <div className='my-6 p-3 rounded-lg w-full flex flex-col bg-neutral-700 space-y-3 overflow-y-auto'>
                            {
                                events?.map((event, id) => (
                                    <ListCard key={id} event={event} button={"view"} />
                                ))
                            }
                        </div>
                }
            </div>
        </div>
    )
}
