/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import { calculateBill, calculateServicefee, calculateSubtotal } from '../utils/ticketsutil'


export default function Checkout(props) {
    const event = useSelector(state => state.checkout.event)
    const tickets = event?.tickets.filter(ticket => ticket.quantity > 0)

    const initializePayment = () => {
        const options = {
            key: "rzp_test_GTwBF1De47y31T",
            key_secret: "tLLvrz6XQpQgIouL8gUHdfsJ",
            amount: calculateBill(tickets) * 100,
            currency: "INR",
            name: "WrapIt",
            description: "Test Transcations",
            image: "/frontend/src/assets/react.svg",
            handler: (response) => {
                alert(response.razorpay_payment_id)
            },
            prefill: {
                name: 'SK',
                email: 'sk@gmail.com',
                contact: 9342222407
            },
            theme: {
                color: "#fff76a"
            }
        }

        const rzp = new window.Razorpay(options)
        rzp.open()

        // console.log(rzp)
    }
    

    return (
        <div className='w-full flex flex-col flex-auto py-16 bg-black bg-opacity-60'>
            <div className='flex flex-col text-white h-full w-full items-center'>
                <div className='w-[500px] bg-neutral-800 flex flex-col items-center rounded-lg'>
                    <div className='p-6 flex flex-col w-full divide divide-y-2 divide-neutral-700'>
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
                                        <div className='text-neutral-400'>
                                            <span>{`Price: ₹ ${Number(ticket?.price).toFixed(2)}`}</span>
                                            <div className='flex justify-between'>
                                                <span>{`Qty: ${ticket?.quantity}`}</span>
                                                <span className='text-white'>{`₹ ${Number(ticket?.price * ticket?.quantity).toFixed(2)}`}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        <div className='py-3'>
                            <div className='flex justify-between'>
                                <span>Subtotal</span>
                                <span>{`₹ ${Number(calculateSubtotal(tickets)).toFixed(2)}`}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span>Service fee</span>
                                <span>{`₹ ${Number(calculateServicefee(tickets)).toFixed(2)}`}</span>
                            </div>
                        </div>
                        <div className='py-3 flex justify-between text-2xl'>
                            <span>Total</span>
                            <span>{`₹ ${Number(calculateBill(tickets)).toFixed(2)}`}</span>
                        </div>
                    </div>
                    <div className='w-full px-3 pb-3'>
                        <button onClick={initializePayment} className="py-3 px-6 w-full flex justify-center items-center space-x-2 capitalize text-xl text-black rounded-lg bg-[#FFF76A] hover:bg-[#D4D056]">
                            <span>Continue</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-2 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
