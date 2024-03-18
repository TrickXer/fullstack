/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './ui/button'
import { useDispatch } from 'react-redux'
import { update } from '../state/tickets/ticketslice'
import { useMyNavigate } from 'simple-react-router-x'

export default function Card({ event }) {
    const navigate = useMyNavigate()
    const dispatch = useDispatch()

    const navigateToTicket = () => {
        dispatch(update(event))
        navigate("/events/ticket")
    }
    

    return (
        <div className='group relative h-[536px] w-[290px] bg-slate-500 rounded-xl flex flex-col overflow-hidden'>
            <img className='h-3/5 hover:h-0 object-cover object-top' src={event?.img} />
            <div className='absolute bottom-0 py-8 transition-all duration-300 h-[240px] group-hover:h-[536px] w-full flex flex-col items-center bg-black'>
                <div className='flex flex-col space-y-16 items-center px-8 py-6 text-justify'>
                    <p className='flex flex-col space-y-4 items-center'>
                        <span className='text-xl text-nowrap'>{event?.title}</span>
                        <span className='text-sm'>{`${event?.time_short} | ${event?.loc_short}`}</span>
                    </p>
                    <span className='invisible transition-all delay-0 group-hover:delay-200 group-hover:visible'>{event?.description}</span>
                </div>
                <div className='absolute py-8 bottom-0'>
                    <Button className="bg-[#FFF76A] hover:bg-[#D4D056] text-black" onClick={navigateToTicket}>buy tickets</Button>
                </div>
            </div>
        </div>
    )
}
