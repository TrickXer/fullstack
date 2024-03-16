/* eslint-disable no-unused-vars */
import React from 'react'
import Button from '../components/ui/button'
import { useSelector } from 'react-redux'

export default function Checkout(props) {
    const event = useSelector(state => state.checkout.event)
    console.log(event?.tickets)
    

    return (
        <div className='flex flex-col w-full items-center'>
            <div className='w-[500px] bg-slate-100 flex flex-col items-center'>
                <h1 className='p-6 text-5xl font-semibold'>Checkout</h1>
                <div className='p-6 flex flex-col w-full divide divide-y-2 divide-slate-200'>
                    <div className='py-6'>
                        <span className='text-xl capitalize'>{event?.title}</span>
                    </div>
                    <div className='py-6 flex flex-col'>
                        <span>{event?.time}</span>
                        <span>{event?.loc_short}</span>
                    </div>
                    <div className='py-6 flex flex-col'>
                        <span>ticket type</span>
                        <span>price</span>
                        <div className='flex justify-between'>
                            <span>quantity</span>
                            <span>amount</span>
                        </div>
                    </div>
                    <div className='py-6'>
                        <div className='flex justify-between'>
                            <span>Subtotal</span>
                            <span>cost</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Service fee</span>
                            <span>cost</span>
                        </div>
                    </div>
                    <div className='py-6 flex justify-between'>
                        <span>Total</span>
                        <span>cost</span>
                    </div>
                </div>
                <div className='w-full'>
                    <button className="py-3 px-6 w-full capitalize text-xl text-white rounded-lg bg-[#dd5d5a]">Continue</button>
                </div>
            </div>
        </div>
    )
}
