/* eslint-disable no-unused-vars */
import { Backdrop } from '@mui/material'
import Button from '../../ui/button'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { EventTable } from '../../table'
import FormLayout from '../../FormLayout'

export default function Events(props) {
    const [open, setOpen] = useState(false)
    const events = useSelector(state => state.events.events)

    const headers = [
        'ID',
        'Date',
        'Time',
        'Name',
        'Type',
        'Location',
        'Status'
    ]

    const body = [
        {
            id: '#3366',
            date: 'Jan 6, 2022',
            time: '7:00 PM',
            name: 'Cocktail Party',
            type: 'Club Party',
            location: 'Chennai',
            status: {
                title: 'On-Going',
                type: 'success'
            }
        }
    ]
    

    return (
        <>
            <Backdrop open={open}>
                <div className=' pb-10 w-[50em] mx-5 bg-gray-900 rounded-lg'>
                    <div className='w-full flex justify-end'>
                        <button title='close' className='p-2 text-white hover:text-primary-hover' onClick={() => setOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <FormLayout />
                </div>
            </Backdrop>

            <div className='flex flex-col flex-auto p-6'>
                <div className='flex justify-between items-center'>
                    <h1 className="sm:text-3xl text-left tracking-wider text-2xl font-bold title-font px-6 my-8 mb-2 text-gray-200">Events</h1>
                    <button onClick={() => setOpen(true)} className='flex items-center space-x-4 mx-6 px-6 py-2 transition-colors duration-300 border-2 border-orange-800 hover:bg-orange-800 bg-black bg-opacity-20 text-primary hover:text-primary-text rounded-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span>Events</span>
                    </button>
                </div>
                <EventTable headers={headers} body={body} />
            </div>
        </>
    )
}
