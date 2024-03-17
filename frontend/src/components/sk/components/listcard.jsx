/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import { useMyNavigate } from 'simple-react-router-x'
import { update } from '../state/tickets/ticketslice'
import Button from './ui/button'

export default function ListCard({event, button}) {
    const navigate = useMyNavigate()
    const dispatch = useDispatch()

    const navigateToTicket = () => {
        dispatch(update(event))
        navigate("/events/ticket")
    }
    

    return (
        <div className='p-4 bg-neutral-800 max-h-36 rounded-xl flex flex-auto overflow-hidden'>
            <img className='object-contain rounded-lg' src={event?.img} />
            <div className='flex flex-auto items-center bg-neutral-800'>
                <div className='flex flex-auto justify-evenly items-center py-6'>
                    <div className='flex py-8 w-1/4 text-2xl'>
                        <span>{event?.title}</span>
                    </div>
                    <div className='flex py-8 w-1/4'>
                        <span>{`${event?.time_short} | ${event?.loc_short}`}</span>
                    </div>
                </div>
                <Button className="bg-[#FFF76A] hover:bg-[#D4D056] text-black" onClick={navigateToTicket}>{button}</Button>
            </div>
        </div>
    )
}
