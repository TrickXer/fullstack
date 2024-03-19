/* eslint-disable no-unused-vars */
import { Backdrop } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/button'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clear } from '../../state/tickets/checkoutslice'
import { calculateBill, calculateServicefee, calculateSubtotal } from '../../utils/ticketsutil'


export default function Checkout(props) {
    const [payment, setPayment] = useState(null)
    const event = useSelector(state => state.checkout.event)
    const tickets = event?.tickets.filter(ticket => ticket.quantity > 0)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    useEffect(() => {
        if (Object.keys(event).length === 0) navigate('/')
    }, [])

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
                setPayment(response.razorpay_payment_id)
            },
            prefill: {
                name: 'SK',
                email: 'sk@gmail.com',
                contact: 9342222407
            },
            theme: {
                color: "#df3311"
            }
        }

        const rzp = new window.Razorpay(options)
        rzp.open()
    }

    const handlePostPayment = () => {
        setPayment(null)
        navigate('/user/dashboard/events')
        dispatch(clear())
    }
    

    return (
        <div className='w-full flex flex-col flex-auto py-16 rounded-xl'>
            {
                payment &&
                    <Backdrop className='flex justify-center items-center' open={payment}>
                        {/* <div className='py-6 px-4 w-[28em] bg-neutral-800 flex flex-col space-y-4'>
                            <span className='text-2xl p-6 tracking-wide text-white font-normal capitalize text-center'>Payment Successfull</span>
                            <Button onClick={handlePostPayment} className="bg-primary tracking-widest transition-colors duration-500 text-primary-text hover:bg-black hover:bg-opacity-10 border-2 border-transparent hover:border-2 hover:border-primary hover:text-primary">
                                ok
                            </Button>
                        </div> */}
                        <section className="rounded-3xl dark:bg-gray-900 shadow-2xl">
                            <div className="p-8 text-center sm:p-12">
                                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                                    Your order is on the way
                                </p>

                                <h2 className="mt-6 text-3xl text-white font-bold">Thanks for your purchase, we're getting it ready!</h2>

                                <button onClick={handlePostPayment} className="mt-8 inline-block w-full rounded-full bg-orange-800 border-2 border-orange-800 hover:bg-black hover:bg-opacity-20 hover:text-primary py-4 text-sm font-bold text-white shadow-xl">
                                    Track Order
                                </button>
                            </div>
                        </section>
                    </Backdrop>
            }
            <div className='flex flex-col text-white h-full w-full items-center'>
                <div className='w-[500px] bg-gray-900 flex flex-col items-center rounded-lg'>
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
                        <button onClick={initializePayment} className="py-3 px-6 w-full flex justify-center items-center space-x-2 capitalize text-xl text-primary-text rounded-lg bg-orange-800 tracking-widest transition-colors duration-300 hover:bg-black hover:bg-opacity-10 border-2 border-transparent hover:border-2 border-orange-800 hover:text-primary">
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
