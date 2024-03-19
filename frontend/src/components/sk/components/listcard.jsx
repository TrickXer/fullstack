/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import { useMyNavigate } from 'simple-react-router-x'
import { update } from '../state/tickets/ticketslice'

export default function ListCard({event, button}) {
    const navigate = useMyNavigate()
    const dispatch = useDispatch()

    const navigateToTicket = () => {
        dispatch(update(event))
        navigate("/events/ticket")
    }
    

    return (
        <div className='p-4 bg-neutral-800 max-h-24 rounded-xl flex flex-auto overflow-hidden'>
            <img className='w-[7em] object-contain rounded-lg' src={event?.img} />
            <div className='flex flex-auto items-center bg-neutral-800'>
                <div className='flex flex-auto justify-evenly items-center py-6'>
                    <div className='flex py-8 w-1/4 text-2xl'>
                        <span>{event?.title}</span>
                    </div>
                    <div className='flex py-8 w-1/4'>
                        <span>{`${event?.time_short} | ${event?.loc_short}`}</span>
                    </div>
                </div>
                <button className="py-2 px-6 capitalize text-xl rounded-lg bg-primary hover:bg-primary-hover text-primary-text flex space-x-3 items-center justify-center" onClick={navigateToTicket}>
                    {
                        button.toLowerCase() === 'view' &&
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mt-1">
                                <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" clipRule="evenodd" />
                            </svg>
                    }
                    <span>{button}</span>
                </button>
            </div>
        </div>
    )
}
