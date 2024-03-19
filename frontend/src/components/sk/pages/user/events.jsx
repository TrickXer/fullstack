/* eslint-disable no-unused-vars */
import Card from '../../components/card'
import { useSelector } from 'react-redux'
import Search from '../../components/ui/search'
import Button from '../../components/ui/button'
import ListCard from '../../components/listcard'
import React, { useEffect, useRef, useState } from 'react'


export default function Events(props) {
    const [location, setLocation] = useState("")
    const [showList, setShowList] = useState(false)

    const eventsRef = useRef(null)
    const events = useSelector(state => {
        console.log(state)
        if (location === "") return state.events.events.filter(event => event?.privacy === "public")
        return state.events.events.filter(event => event?.location.toLowerCase().split(" ").includes(location.toLowerCase()) && event?.privacy === "public")
    })

    console.log('events')

    
    useEffect(() => {
        if (eventsRef.current) {
            eventsRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [])


    return (
        <div ref={eventsRef} className='relative flex flex-col pt-8 text-white'>
            {
                !showList ?
                    (
                        <div className='relative flex flex-col items-center'>
                            <h2 className='pb-12 uppercase text-6xl tracking-wide font-semibold'>upcoming events</h2>
                            
                            <div className='mt-16 grid grid-cols-3 grid-rows-subgrid grid-flow-row gap-12 z-10'>
                                {
                                    events?.map((event, id) => (
                                        <Card key={id} event={event} />
                                    ))
                                }
                                <div className='absolute h-[28em] w-full rounded-3xl top-1/2 left-0 right-0 bg-black bg-opacity-50 -z-10' />
                            </div>
                            <div className='py-[1.5em] mt-[3em] z-10'>
                                <button onClick={() => setShowList(true)} className="capitalize ml-4 inline-flex text-gray-400 bg-gray-800 border-2 border-gray-800 hover:border-gray-700 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                                    load more
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-col w-full px-16 pt-12 pb-6 rounded-lg justify-center items-center'>
                            <Search onChange={(e) => setLocation(e.target.value)} placeholder='Location' autoFocus />

                            {
                                events.length > 0 &&
                                    <div className='my-6 p-3 rounded-lg w-full flex flex-col bg-gray-800 space-y-3'>
                                        {
                                            events?.map((event, id) => (
                                                <ListCard key={id} event={event} button={"buy tickets"} />
                                            ))
                                        }
                                    </div>
                            }
                        </div>
                    )
            }
        </div>
    )
}
