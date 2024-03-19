/* eslint-disable no-unused-vars */
import Ticket from '../../components/ticket'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/button'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useRef, useState } from 'react'
import { update } from '../../state/tickets/checkoutslice'
import { calculateBill, calculateServicefee, calculateSubtotal } from '../../utils/ticketsutil'


export default function BuyTickets(props) {
    const user = useSelector(state => state.users.current)
    const event = useSelector(state => state.tickets.event)
    const [tickets, setTickets] = useState(event?.tickets)
    
    const eventRef = useRef(null)
    const ticketRef = useRef(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect(() => {
        if (Object.keys(user).length === 0) navigate("/auth/login")

        if (eventRef.current) {
            eventRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [])

    const navigateToCheckout = () => {
        console.log({...event, tickets: tickets})
        dispatch(update({...event, tickets: tickets}))
        navigate("/user/events/ticket/checkout")
    }

    const scrollToTickets = () => {
        if (ticketRef.current) {
            ticketRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }


    return (
        <div ref={eventRef} className='h-full w-full flex flex-col rounded-xl text-white justify-center items-center'>
            <h1 className='flex flex-col space-y-4 mt-16 text-center text-xl'>
                <p>{`${event?.time_short} | ${event?.loc_short}`}</p>
                <p className='font-semibold text-7xl text-primary'>{event?.title}</p>
            </h1>
            <p className='mt-16 w-1/3 text-center'>{event?.description}</p>

            <div className='mt-12'>
                <Button className="bg-primary tracking-widest transition-colors duration-500 text-primary-text hover:bg-black hover:bg-opacity-10 border-2 border-transparent hover:border-2 hover:border-primary hover:text-primary" onClick={scrollToTickets}>buy tickets</Button>
            </div>

            <div className='w-2/3 mb-8 mt-16 flex justify-center items-center'>
                <img className='h-auto w-full object-center object-cover' src={event?.img} alt='dummy' />
            </div>

            <div className='w-2/3 my-8 px-16 flex'>
                <div className='flex flex-col space-y-3'>
                    <p className='text-2xl text-primary'>Time & Location</p>
                    <p className='flex flex-col'>
                        <span>{event?.time}</span>
                        <span>{event?.location}</span>
                    </p>
                </div>
            </div>

            <div className='w-2/3 my-8 px-16 flex'>
                <div className='flex flex-col space-y-3'>
                    <p className='text-2xl text-primary'>About the event</p>
                    <p>{event?.description}</p>
                </div>
            </div>

            <div ref={ticketRef} className='w-2/3 my-8 px-16 flex'>
                <div className='w-full flex flex-col space-y-6'>
                    <div className='w-full flex flex-col space-y-3'>
                        <p className='text-2xl'>Tickets</p>
                        <div className='w-full flex flex-col space-y-4'>
                            {
                                tickets?.map((ticket, id) => (
                                    <Ticket key={id} id={id} ticket={ticket} tickets={[...tickets]} setTickets={setTickets} />
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-full flex justify-end'>
                        <div className='w-2/5 flex flex-col space-y-6 justify-between'>
                            {
                                calculateBill(tickets) > 0 &&
                                    <div className='w-full flex flex-col justify-between space-y-3'>
                                        <div className='flex justify-between text-xl'>
                                            <span>Subtotal</span>
                                            <span>{`₹ ${Number(calculateSubtotal(tickets)).toFixed(2)}`}</span>
                                        </div>
                                        <div className='flex justify-between text-xl'>
                                            <span>Service Fee</span>
                                            <span>{`₹ ${Number(calculateServicefee(tickets)).toFixed(2)}`}</span>
                                        </div>
                                    </div>
                            }
                            <div className='flex justify-between text-xl'>
                                <span>Total</span>
                                <span>{`₹ ${Number(calculateBill(tickets)).toFixed(2)}`}</span>
                            </div>
                            <Button onClick={navigateToCheckout} disabled={calculateBill(tickets) === 0} className="bg-primary tracking-widest transition-colors duration-500 text-primary-text hover:bg-black hover:bg-opacity-10 border-2 border-transparent hover:border-2 hover:border-primary hover:text-primary disabled:text-neutral-300 disabled:bg-primary-disabled">
                                checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-[450px] w-2/3 my-8 flex justify-center items-center bg-neutral-700'>
                Google Map here...
            </div>
        </div>
    )
}