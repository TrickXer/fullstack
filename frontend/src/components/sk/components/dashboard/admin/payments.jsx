import React, { useEffect, useState } from 'react'
import { PaymentTable } from '../../table'
import Api from '../../../utils/api'


export default function Payments(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        Api.paymentAll().then(res => {
            setData(res.data?.data)
        })
        .catch(error => console.log(error))
    }, [])
    
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
