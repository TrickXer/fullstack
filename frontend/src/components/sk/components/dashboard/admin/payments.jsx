import React from 'react'
import Table from '../../table'


export default function Payments(props) {
    
    const headers = [
        'name',
        'location',
        'type',
        'max capcity',
        'suitable for',
        'actions',
    ]

    const body = []


    return (
        <div className='flex flex-auto p-6'>
            <Table headers={headers} body={body} />
        </div>
    )
}
