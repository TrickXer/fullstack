import React, { useEffect, useState } from 'react'
import { PaymentTable } from '../../table'
import Api from '../../../utils/api'


export default function Payments(props) {
    const [data, setData] = useState([])
    Api.refreshToken()

    useEffect(() => {
        Api.paymentAll().then(res => {
            setData(res.data?.data)
            console.log(res.data?.data)
        })
        .catch(error => console.log(error))
    }, [])
    
    const headers = [
        'ID',
        'Date',
        'Transaction ID',
        'Amount',
        'Status',
    ]


    return (
        <div className='flex flex-col flex-auto p-6'>
            <h1 className="sm:text-3xl w-full text-left tracking-wider text-2xl font-bold title-font px-6 my-8 mb-2 text-gray-200">Payments</h1>
            <PaymentTable headers={headers} body={data} />
        </div>
    )
}
