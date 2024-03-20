import React from 'react'
import { BookingTable } from '../../table'


export default function Bookings(props) {
    
    const headers = [
        'ID',
        'Event ID',
        'Customer',
        'Date',
        'Guests',
        'Status',
        'Total Price',
    ]

    const body = [
        {
            id: '#3506',
            event_id: '#3606',
            customer: {
                img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                name: 'Arthur Melo',
                email: 'authurmelo@example.com'
            },
            date: 'Jan 6, 2022',
            guests: 25,
            status: {
                title: 'Confirmed',
                type: 'success'
            },
            total_price: '$ 39.99'
        }
    ]


    return (
        <div className='flex flex-col flex-auto p-6'>
            <h1 className="sm:text-3xl w-full text-left tracking-wider text-2xl font-bold title-font px-6 my-8 mb-2 text-gray-200">Bookings</h1>
            <BookingTable headers={headers} body={body} />
        </div>
    )
}
