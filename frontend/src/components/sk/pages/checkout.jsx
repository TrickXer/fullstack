/* eslint-disable no-unused-vars */
import React from 'react'
import Button from '../components/ui/button'
import { useSelector } from 'react-redux'
import { calculateBill, calculateServicefee, calculateSubtotal } from '../utils/ticketsutil'

export default function Checkout(props) {
    const event = useSelector(state => state.checkout.event)
    const tickets = event?.tickets.filter(ticket => ticket.quantity > 0)
    

    return (
        <div className='flex flex-col w-full items-center'>
            <div className='w-[500px] bg-slate-100 flex flex-col items-center rounded-lg'>
                <div className='p-6 flex flex-col w-full divide divide-y-2 divide-slate-200'>
                    <div className='py-6'>
                        <span className='text-3xl capitalize'>{event?.title}</span>
                    </div>
                    <div className='py-3 flex flex-col'>
                        <span>{event?.time}</span>
                        <span>{event?.loc_short}</span>
                    </div>
                        {
                            tickets?.map((ticket, id) => (
                                <div key={id} className='py-3 flex flex-col'>
                                    <span className='uppercase font-semibold'>{ticket?.type}</span>
                                    <div className='text-gray-600'>
                                        <span>{`Price: $${Number(ticket?.price).toFixed(2)}`}</span>
                                        <div className='flex justify-between'>
                                            <span>{`Qty: ${ticket?.quantity}`}</span>
                                            <span className='text-black'>{`$${Number(ticket?.price * ticket?.quantity).toFixed(2)}`}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    <div className='py-3'>
                        <div className='flex justify-between'>
                            <span>Subtotal</span>
                            <span>{`$${Number(calculateSubtotal(tickets)).toFixed(2)}`}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Service fee</span>
                            <span>{`$${Number(calculateServicefee(tickets)).toFixed(2)}`}</span>
                        </div>
                    </div>
                    <div className='py-3 flex justify-between text-2xl'>
                        <span>Total</span>
                        <span>{`$${Number(calculateBill(tickets)).toFixed(2)}`}</span>
                    </div>
                </div>
                <div className='w-full px-3 pb-3'>
                    <button className="py-3 px-6 w-full capitalize text-xl text-white rounded-lg bg-[#dd5d5a]">Continue</button>
                </div>
            </div>
        </div>
    )
}
