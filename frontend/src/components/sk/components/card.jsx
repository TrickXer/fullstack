/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './ui/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { update } from '../state/tickets/ticketslice'


export default function Card({ event }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const navigateToTicket = () => {
        dispatch(update(event))
        navigate("/user/events/ticket")
    }
    

    return (
        <div className='group relative h-[35em] w-[20em] bg-gray-500 rounded-xl flex flex-col overflow-hidden'>
            <img className='h-3/5 hover:h-0 object-cover object-top' src={event?.img} />
            <div className='absolute bottom-0 py-8 transition-all duration-300 h-[240px] group-hover:h-[35em] w-full flex flex-col items-center bg-gray-900'>
                <div className='flex flex-col space-y-16 items-center px-8 py-6 text-justify'>
                    <p className='flex flex-col space-y-4 items-center'>
                        <span className='text-xl text-nowrap'>{event?.title}</span>
                        <span className='text-sm text-gray-500'>{`${event?.time_short} | ${event?.loc_short}`}</span>
                    </p>
                    <span className='invisible text-gray-400 transition-all delay-0 group-hover:delay-200 group-hover:visible'>{event?.description}</span>
                </div>
                <div className='absolute py-8 bottom-0'>
                    <Button className="bg-orange-800 tracking-widest transition-colors duration-500 text-primary-text hover:bg-black hover:bg-opacity-10 border-2 border-transparent hover:border-2 hover:border-orange-800 hover:text-primary" onClick={navigateToTicket}>
                        buy tickets
                    </Button>
                </div>
            </div>
        </div>
    )
}
