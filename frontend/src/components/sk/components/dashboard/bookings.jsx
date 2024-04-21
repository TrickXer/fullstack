import Api from '../../utils/api'
import { BookingTable } from '../table'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FormGroup, FormLayout, FormSelect, FormText, FormTextArea } from '../FormLayout'


export default function Bookings(props) {
    const user = useSelector(state => state.users.current)
    const [open, setOpen] = useState(false)
    const [venues, setVenues] = useState([])
    const [bookings, setBookings] = useState([])
    Api.refreshToken()

    useEffect(() => {
        Api.venueAll()
            .then(res => setVenues(res.data?.data))
            .catch(error => console.log(error))
        
        Api.bookingAll()
            .then(res => setBookings(res.data?.data))
            .catch(error => console.log(error))
    }, [])

    const handleCancel = () => setOpen(false)
    
    const headers = [
        'ID',
        'Event',
        'Venue',
        'Customer',
        'Date',
        'Status',
        'Total Price',
    ]


    const initializePayment = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = {
            eventName: formData.get('EventName'),
            eventType: formData.get('EventType'),
            eventDescription: formData.get('EventDescription'),
            eventDate: formData.get('EventDate'),
            eventDuration: formData.get('EventDuration'),
            eventOrganizer: formData.get('EventOrganizer'),
            eventLocation: formData.get('EventLocation'),
            eventPricing: formData.get('Pricing')
        }

        Api.venueGet(data.eventLocation)
            .then(res => {
                const amount = parseInt(data.eventPricing) + parseInt(res.data?.data?.venuePricing)
                const options = {
                    key: "rzp_test_GTwBF1De47y31T",
                    key_secret: "tLLvrz6XQpQgIouL8gUHdfsJ",
                    amount: amount,
                    currency: "INR",
                    name: "WrapIt",
                    description: "Test Transcations",
                    image: "/frontend/src/assets/react.svg",
                    handler: (response) => {
                        console.log(response)
                        handleSubmit(data, response.razorpay_payment_id)
                    },
                    prefill: {
                        name: user.name,
                        email: user.email,
                    },
                    theme: {
                        color: "#df3311"
                    }
                }
        
                const rzp = new window.Razorpay(options)
                rzp.open()
            })

    }

    const handleSubmit = (data, transactionId) => {
        Api.eventAdd(data)
            .then(res => {
                const booking = {
                    eventId: res.data?.data,
                    venueId: data.eventLocation,
                    eventDate: data.eventDate
                }

                Api.bookingAdd(booking)
                    .then(res => {
                        const paymentId = res.data?.data
                        const payment = {
                            paymentId: paymentId,
                            transactionId: transactionId,
                        }

                        console.log(payment)

                        Api.paymentPatch(payment)
                            .then(res => console.log(res))
                            .catch(error => console.log(error))
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }


    return (
        <div className='flex flex-col flex-auto p-6 overflow-y-auto'>
            {
                (user?.role === 'USER' && open) ?
                    <div className='flex flex-col flex-auto divide divide-y-2 px-8 space-y-6 divide-gray-300 dark:divide-gray-700'>
                        <h1 className="sm:text-3xl text-left tracking-wider text-2xl font-bold title-font my-8 mb-2 text-gray-700 dark:text-gray-300">{ user?.role === 'ADMIN' ? '' : 'My'} Bookings</h1>
                        <FormLayout button='Book' onSubmit={initializePayment} handleCancel={handleCancel}>
                            <FormGroup title="Event Details">
                                <div className='flex justify-between sm:w-2/5'>
                                    <FormText required id="event-name" type="text" name="Event Name" description="Name of the event." />
                                    <FormText className="sm:w-2/5" required id="event-type" type="text" name="Event Type" description="Type of event (e.g., Wedding, Birthday Party, Corporate Event, Concert)." />
                                </div>
                                <FormTextArea required id="event-description" type="text" name="Event Description" description="A detailed description of the event, including its theme, purpose, and any special considerations." />
                                <div className='flex space-x-16'>
                                    <div className='sm:w-[20%]'>
                                        <FormText required id="event-datatime" type="date" name="Event Date" description="Select the date and time of the event." />
                                    </div>
                                    <div className='sm:w-[20%]'>
                                        <FormText required id="event-duration" type="number" name="Event Duration" description="Duration of the event (e.g., number of hours)." />
                                    </div>
                                </div>
                                <div className='sm:w-2/5 flex flex-col space-y-8'>
                                    <div className='sm:w-1/2 space-y-8'>
                                        <FormSelect required options={venues} id="event-location" name="Event Location" description="Select the venue where the event will take place." />
                                        <FormText required id="event-organizer" type="text" name="Event Organizer" description="Specify the name of the organization or individual organizing the event." />
                                    </div>
                                </div>
                            </FormGroup>

                            {/* <FormGroup title="Event Requirements">
                                <FormFields title='Entertainments'>
                                    {
                                        entertainments?.map((entertainment, id) => (
                                            <FormField key={id} id={`entertainment${id}`} title={entertainment.name} description={entertainment.description} />
                                        ))
                                    }
                                </FormFields>
                                
                                <FormFields title='Caterings'>
                                    {
                                        caterings?.map((catering, id) => (
                                            <FormField key={id} id={`catering${id}`} title={catering.name} description={catering.description} />
                                        ))
                                    }
                                </FormFields>
                            </FormGroup>

                            <FormGroup title="Additional Services">
                                <FormFields title='Photography/Videography'>
                                    {
                                        photographies?.map((photography, id) => (
                                            <FormField key={id} id={`photography${id}`} title={photography.name} description={photography.description} />
                                        ))
                                    }
                                </FormFields>

                                <FormFields title='Decoration'>
                                    {
                                        decorations?.map((decoration, id) => (
                                            <FormField key={id} id={`decoration${id}`} title={decoration.name} description={decoration.description} />
                                        ))
                                    }
                                </FormFields>

                                <FormFields title='Transportation'>
                                    {
                                        transportations?.map((transportation, id) => (
                                            <FormField key={id} id={`transportation${id}`} title={transportation.name} description={transportation.description} />
                                        ))
                                    }
                                </FormFields>
                            </FormGroup> */}

                            <FormGroup title="Event Budget and Pricing">
                                <div className='sm:w-[20%]'>
                                    <FormText required id="charges" type="number" name="Pricing" description="Text fields for the contact person's name, email address, and phone number." />
                                </div>
                            </FormGroup>
                        </FormLayout>
                    </div>
                    :
                    <div className='flex flex-col flex-auto'>
                        <div className='flex justify-between items-center'>
                            <h1 className="sm:text-3xl text-left tracking-wider text-2xl font-bold title-font px-6 my-8 mb-2 text-gray-700 dark:text-gray-300">{ user?.role === 'ADMIN' ? '' : 'My ' }Bookings</h1>
                            {
                                user?.role === 'USER' &&
                                    <button onClick={() => setOpen(true)} className='flex items-center space-x-4 mx-6 px-6 py-2 transition-colors duration-300 border-2 border-orange-800 hover:bg-orange-800 bg-black bg-opacity-20 text-primary hover:text-primary-text rounded-lg'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        <span>Book</span>
                                    </button>
                            }
                        </div>
                        <BookingTable headers={headers} body={bookings} />
                    </div>
            }
        </div>
    )
}
