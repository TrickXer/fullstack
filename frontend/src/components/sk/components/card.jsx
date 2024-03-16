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
            <div className='absolute bottom-0 py-8 transition-all duration-200 h-[240px] group-hover:h-[536px] group-hover:translate-y-0 w-full flex flex-col items-center justify-between bg-slate-100'>
                <div className='flex flex-col space-y-16 items-center px-8 py-6 text-justify'>
                    <p className='flex flex-col space-y-4 items-center'>
                        <span className='text-2xl'>{event?.title}</span>
                        <span>{`${event?.time_short} | ${event?.loc_short}`}</span>
                    </p>
                    <span className='hidden transition-all delay-200 group-hover:flex'>{event?.description}</span>
                </div>
                <Button color="bg-[#dd5d5a]" onClick={navigateToTicket}>buy tickets</Button>
            </div>
        </div>
    )
}
