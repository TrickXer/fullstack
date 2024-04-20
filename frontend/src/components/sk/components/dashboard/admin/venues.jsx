import Api from '../../../utils/api'
import React, { useState } from 'react'
import { VenueTable } from '../../table'
import { FormField, FormFields, FormGroup, FormLayout, FormText, FormTextArea } from '../../FormLayout'


export default function Venues(props) {
    const [open, setOpen] = useState(false)

    Api.venueAll().then(res => {
        console.log(res)
    })
    .catch(error => console.log(error))

    const handleCancel = () => setOpen(false)

    const headers = [
        'ID',
        'Name',
        'Location',
        'Suitable For',
        'Max Capcity',
        'Status',
    ]

    const body = [
        {
            venue_id: "#3306",
            venue_name: "#3306",
            location: 'Chennai',
            type: 'Music Concert',
            max_capacity: 75,
            status: {
                title: 'Available',
                type: 'success'
            }
        }
    ]

    const amenities = [
        { name: 'Parking', description: 'On-site parking available for guests' },
        { name: 'Wi-Fi', description: 'High-speed internet access available throughout the venue' },
        { name: 'Catering Services', description: 'Option for catering services provided by the venue or preferred vendors' },
        { name: 'Audio/Visual Equipment', description: 'State-of-the-art audio and visual equipment available for presentations and entertainment' },
        { name: 'Wheelchair Accessibility', description: 'Wheelchair ramps and accessible facilities for guests with mobility needs' },
        { name: 'Outdoor Space', description: 'Spacious outdoor area for ceremonies, receptions, or outdoor events' },
        { name: 'Restrooms', description: 'Clean and well-maintained restroom facilities available for guests' },
        { name: 'Security', description: 'Professional security staff or surveillance systems to ensure the safety of guests and belongings' }
    ]

    const features = [
        { name: "Indoor/Outdoor Space", description: "Venue offers both indoor and outdoor event spaces." },
        { name: "Dance Floor", description: "Venue includes a designated area for dancing." },
        { name: "Stage", description: "Venue has a stage for performances or presentations." },
        { name: "Bar", description: "Venue has a bar or beverage service available." },
        { name: "Kitchen Facilities", description: "Venue provides kitchen facilities for catering or food preparation." },
        { name: "Lounge Area", description: "Venue features a comfortable lounge area for relaxation or informal gatherings." },
        { name: "Projector/Screen", description: "Venue offers audiovisual equipment such as projectors and screens for presentations." }
    ]

    
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        console.log(formData)
    }


    return (
        <div className='flex flex-col flex-auto p-6 overflow-y-auto'>
            {
                open ?
                    <div className='flex flex-col divide divide-y-2 px-8 space-y-6 divide-gray-100 dark:divide-gray-800'>
                        <h1 className="sm:text-3xl text-left tracking-wider text-2xl font-bold title-font my-8 mb-2 text-gray-700 dark:text-gray-200">Add Venue</h1>
                        <FormLayout onSubmit={handleSubmit} handleCancel={handleCancel}>
                            <FormGroup title="Venue Details">
                                <div className='flex justify-between sm:w-2/5'>
                                    <FormText required id="venue-name" type="text" name="Venue Name" description="Name of the venue." />
                                    <FormText className="sm:w-2/5" required id="venue-type" type="text" name="Venue Type" description="e.g., Banquet Hall, Hotel, Restaurant, Outdoor Space." />
                                </div>
                                <FormTextArea required id="venue-description" type="text" name="Venue Description" description="A brief description of the venue, including its features, ambiance, and any unique selling points." />
                                <div className='sm:w-2/5 flex flex-col space-y-8'>
                                    <div className='sm:w-1/2'>
                                        <FormText required id="venue-capacity" type="number" name="Venue Capacity" description="Maximum capacity of the venue (number of guests it can accommodate)." />
                                    </div>
                                    <FormText required id="venue-address" type="text" name="Venue Address" description="Street address, city, state/province, country, and postal/ZIP code." />
                                    <FormText required id="venue-contact-info" type="text" name="Venue Contact Information" description="Contact person's name, email address, and phone number." />
                                </div>
                            </FormGroup>

                            {/* <FormGroup title="Venue Amenities">
                                <FormFields title='Amenities Checklist'>
                                    {
                                        amenities?.map((amenity, id) => (
                                            <FormField key={id} id={`amentity${id}`} title={amenity.name} description={amenity.description} />
                                        ))
                                    }
                                </FormFields>
                            </FormGroup>

                            <FormGroup title="Venue Images">
                                <FormText required id="image-upload" type="text" name="Image Upload"
                                    description="Upload multiple images of the venue to showcase its appearance and ambiance."
                                />
                            </FormGroup>

                            <FormGroup title="Venue Features">
                                <FormFields title='Features Checklist'>
                                    {
                                        features?.map((feature, id) => (
                                            <FormField key={id} id={`feature${id}`} title={feature.name} description={feature.description} />
                                        ))
                                    }
                                </FormFields>
                            </FormGroup> */}

                            <FormGroup title="Pricing and Booking Information">
                                <div className='sm:w-[20%]'>
                                    <FormText required id="charges" type="number" name="Pricing" description="Text fields for the contact person's name, email address, and phone number." />
                                </div>
                            </FormGroup>
                        </FormLayout>
                    </div>
                    :
                    <div className='flex flex-col flex-auto'>
                        <div className='flex justify-between items-center'>
                            <h1 className="sm:text-3xl text-left tracking-wider text-2xl font-bold title-font px-6 my-8 mb-2 text-gray-700 dark:text-gray-200">Venues</h1>
                            <button onClick={() => setOpen(true)} className='flex items-center space-x-4 mx-6 px-6 py-2 transition-colors duration-300 border-2 border-orange-800 hover:bg-orange-800 bg-black bg-opacity-20 text-primary hover:text-primary-text rounded-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <span>Venues</span>
                            </button>
                        </div>
                        <VenueTable headers={headers} body={body} />
                    </div>
            }
        </div>
    )
}
