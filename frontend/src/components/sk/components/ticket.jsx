/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Select } from './ui/select'

export default function Ticket({id, ticket, tickets, setTickets}) {
    const handleQuantity = (e) => {
        let quant = parseInt(e.target.value)
        if (isNaN(quant)) quant = 0

        ticket = { ...ticket, quantity: quant }
        tickets[id] = ticket
        setTickets(tickets)
    }
    

    return (
        <div className='flex py-8 w-full text-primary-text bg-primary justify-between divide-primary-text divide-x-2'>
            <div className='px-8 py-4 flex flex-col justify-center space-y-1 w-1/2'>
                <span>Ticket type</span>
                <span className='uppercase text-3xl font-semibold tracking-wide'>{ticket?.type}</span>
            </div>

            <div className='px-8 py-4 flex items-center justify-between w-1/2'>
                <div className='flex flex-col space-y-1'>
                    <span>Price</span>
                    <span className='uppercase text-3xl font-semibold tracking-wide'>{`₹ ${Number(ticket?.price).toFixed(2)}`}</span>
                    <span>{`+ ₹ ${Number(ticket?.service_fee).toFixed(2)}`} service fee</span>
                </div>
                <div className='flex'>
                    <Select onChange={handleQuantity} defaultValue={ticket?.quantity} type="person" title={"Quantity"} range={10} />
                </div>
            </div>
        </div>
    )
}
