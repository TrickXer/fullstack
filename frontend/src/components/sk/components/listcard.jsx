/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import { useMyNavigate } from 'simple-react-router-x'
import { update } from '../state/tickets/ticketslice'
import Button from './ui/button'

export default function ListCard({event}) {
    const navigate = useMyNavigate()
    const dispatch = useDispatch()

    const navigateToTicket = () => {
        dispatch(update(event))
        navigate("/events/ticket")
    }
    

    return (
        <div className='px-8 bg-white h-36 w-full rounded-xl flex overflow-hidden'>
            <img className='object-contain' src={event?.img} />
            <div className='bottom-0 p-8 w-full flex items-center justify-between bg-white'>
                <div className='flex flex-auto justify-evenly items-center px-8 py-6'>
                    <div className='flex py-8 w-1/4 text-2xl'>
                        <span>{event?.title}</span>
                    </div>
                    <div className='flex py-8 w-1/4'>
                        <span>{`${event?.time_short} | ${event?.loc_short}`}</span>
                    </div>
                </div>
                <Button color="bg-[#dd5d5a]" onClick={navigateToTicket}>buy tickets</Button>
            </div>
        </div>
    )
}
