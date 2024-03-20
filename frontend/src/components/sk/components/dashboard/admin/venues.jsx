import React from 'react'
import { VenueTable } from '../../table'


export default function Venues(props) {
    const headers = [
        'ID',
        'Name',
        'Location',
        'Suitable For',
        'Max Capcity',
        'Status',
    ]

    const body = [
        {
            venue_id: "#3306",
            venue_name: "#3306",
            location: 'Chennai',
            type: 'Music Concert',
            max_capacity: 75,
            status: {
                title: 'Available',
                type: 'success'
            }
        }
    ]


    return (
        <div className='flex flex-col flex-auto p-6'>
            <div className='flex justify-between items-center'>
                <h1 className="sm:text-3xl text-left tracking-wider text-2xl font-bold title-font px-6 my-8 mb-2 text-gray-200">Venues</h1>
                <button className='flex items-center space-x-4 mx-6 px-6 py-2 transition-colors duration-300 border-2 border-orange-800 hover:bg-orange-800 bg-black bg-opacity-20 text-primary hover:text-primary-text rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span>Venues</span>
                </button>
            </div>
            <VenueTable headers={headers} body={body} />
        </div>
    )
}
