/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Search from '../ui/search'
import ListCard from '../listcard'
import { useSelector } from 'react-redux'
import Button from '../ui/button'
import Backdrop from '../ui/backdrop'

export default function Events(props) {
    const [location, setLocation] = useState("")
    const [open, setOpen] = useState(false)

    const events = useSelector(state => {
        if (location === "") return state.events
        return state.events.filter(event => event?.location.toLowerCase().split(" ").includes(location.toLowerCase()))
    })

    return (
        <div className='flex flex-auto bg-black bg-opacity-50'>
            <Backdrop open={open}>
                <div className='h-[700px] w-1/2 bg-white rounded-lg'>
                    <div className='w-full flex justify-end'>
                        <button title='close' className='p-2 hover:text-red-500' onClick={() => setOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </Backdrop>
            <div className='flex flex-col w-full items-center m-5 text-white'>
                <div className='mb-8 px-8 h-16 w-full flex items-center justify-end'>
                    <button onClick={() => setOpen(true)} className="py-2 px-6 transition-all duration-300 flex justify-center items-center space-x-3 capitalize text-xl rounded-lg border-2 border-[#FFF76A] bg-transparent hover:text-black hover:bg-[#FFF76A] text-[#FFF76A]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 flex">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                        <span className='mb-1'>host</span>
                    </button>
                </div>
                <div className='my-6 p-3 rounded-lg w-full flex flex-col bg-neutral-700 space-y-3 overflow-y-auto'>
                    {
                        events?.map((event, id) => (
                            <ListCard key={id} event={event} button={"view"} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
