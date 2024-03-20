import React from 'react'
import { PaymentTable } from '../../table'


export default function Payments(props) {
    
    const headers = [
        'ID',
        'Date',
        'Method',
        'Amount',
        'Transaction ID',
        'Status',
    ]

    const body = [
        {
            id: '#3360',
            date: 'Jan 6, 2022',
            method: 'UPI',
            amount: '$ 29.99',
            transaction_id: '#3066',
            status: {
                title: 'Paid',
                type: 'success'
            }
        }
    ]


    return (
        <div className='flex flex-col flex-auto p-6'>
            <h1 className="sm:text-3xl w-full text-left tracking-wider text-2xl font-bold title-font px-6 my-8 mb-2 text-gray-200">Payments</h1>
            <PaymentTable headers={headers} body={body} />
        </div>
    )
}
