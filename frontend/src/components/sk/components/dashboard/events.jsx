/* eslint-disable no-unused-vars */
import Api from '../../utils/api'
import { EventTable } from '../table'
import React, { useEffect, useState } from 'react'
import { FormFields, FormField, FormGroup, FormLayout, FormSelect, FormText, FormTextArea } from '../FormLayout'

export default function Events({ role }) {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState([])
    const [venues, setVenues] = useState([])
    Api.refreshToken()
    
    useEffect(() => {
        Api.venueAll()
            .then(res => setVenues(res.data?.data))
            .catch(error => console.log(error))
        
        Api.eventAll().then(res => {
            setData(res.data?.data)
        })
        .catch(error => console.log(error))
    }, [])

    const handleCancel = () => setOpen(false)

    const headers = [
        'Name',
        'Type',
        'Venue',
        'Date',
        'Duration',
        'Organizer',
        'Pricing',
    ]

    const entertainments = [
        { name: 'DJ', description: 'Professional DJ services to provide music and entertainment throughout the event.' },
        { name: 'Live Band', description: 'Talented live band to perform a variety of music genres and engage the audience.' },
        { name: 'Performers', description: 'Entertainers such as dancers, magicians, or acrobats to provide captivating performances.' },
        { name: 'Photo Booth', description: 'Interactive photo booth for guests to capture fun and memorable moments during the event.' }
    ]

    const caterings = [
        { name: 'Buffet', description: 'Variety of dishes served buffet-style, allowing guests to choose their preferred items.' },
        { name: 'Plated Meal', description: 'Elegant dining experience with pre-selected courses served directly to guests at their tables.' },
        { name: 'Cocktail Reception', description: 'Stylish and social dining option featuring a selection of hors d\'oeuvres and beverages.' },
        { name: 'Food Stations', description: 'Interactive dining experience with multiple food stations offering different cuisines or specialties.' },
        { name: 'Dessert Bar', description: 'Indulgent display of sweet treats and desserts for guests to enjoy throughout the event.' }
    ]

    const photographies = [
        { name: 'Photography', description: 'Professional photographers to capture still images of the event.' },
        { name: 'Videography', description: 'Videographers to record videos of the event, capturing moments and highlights.' }
    ]
    
    const decorations = [
        { name: 'Floral Arrangements', description: 'Beautiful floral decorations to enhance the ambiance of the event venue.' },
        { name: 'Lighting', description: 'Specialized lighting effects to create the desired mood and atmosphere.' },
        { name: 'Decor Setup', description: 'Decorators to set up and arrange decorative elements according to the event theme.' }
    ]
    
    const transportations = [
        { name: 'Shuttle Service', description: 'Transportation service to shuttle guests between venues or from designated locations.' },
        { name: 'Limousine', description: 'Luxurious limousine service for VIP guests or special arrivals/departures.' },
        { name: 'Bus/Coach Rental', description: 'Rental of buses or coaches to transport large groups of guests to and from the event venue.' }
    ]
    

    const handleSubmit = (e) => {
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

        Api.eventAdd(data)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='flex flex-col flex-auto p-6 overflow-y-auto'>
            {
                (role === 'ADMIN' && open) ?
                    <div className='flex flex-col flex-auto divide divide-y-2 px-8 space-y-6 divide-gray-300 dark:divide-gray-700'>
                        <h1 className="sm:text-3xl text-left tracking-wider text-2xl font-bold title-font my-8 mb-2 text-gray-700 dark:text-gray-300">Add Event</h1>
                        <FormLayout onSubmit={handleSubmit} handleCancel={handleCancel}>
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

                            <FormGroup title="Event Requirements">
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
                            </FormGroup>

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
                            <h1 className="sm:text-3xl text-left tracking-wider text-2xl font-bold title-font px-6 my-8 mb-2 text-gray-700 dark:text-gray-300">{ role === 'ADMIN' ? '' : 'My ' }Events</h1>
                            {
                                role === 'ADMIN' &&
                                    <button onClick={() => setOpen(true)} className='flex items-center space-x-4 mx-6 px-6 py-2 transition-colors duration-300 border-2 border-orange-800 hover:bg-orange-800 bg-black bg-opacity-20 text-primary hover:text-primary-text rounded-lg'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        <span>Add</span>
                                    </button>
                            }
                        </div>
                        <EventTable headers={headers} body={data} />
                    </div>
            }
        </div>
    )
}
