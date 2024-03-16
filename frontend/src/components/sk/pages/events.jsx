/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import Card from '../components/card'
import Button from '../components/ui/button'
import { useSelector } from 'react-redux'
import ListCard from '../components/listcard'
import Search from '../components/ui/search'

export default function Events(props) {
    const eventsRef = useRef(null)
    const [showList, setShowList] = useState(false)
    const [location, setLocation] = useState("")
    const events = useSelector(state => {
        if (location === "") return state.events.events
        return state.events.events.filter(event => event?.location.toLowerCase().split(" ").includes(location.toLowerCase()))
    })

    useEffect(() => {
        if (eventsRef.current) {
            eventsRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [])


    return (
        <div className='relative flex flex-col'>
            {
                !showList ?
                    (
                        <div ref={eventsRef} className='flex flex-col justify-center items-center'>
                            <h2 className='mt-16 uppercase text-6xl tracking-wide font-semibold'>upcoming events</h2>
                            
                            <div className='my-16 grid grid-cols-3 grid-rows-subgrid grid-flow-row gap-12'>
                                {
                                    events?.map((event, id) => (
                                        <Card key={id} event={event} />
                                    ))
                                }
                                <div className='absolute h-96 rounded-3xl top-1/2 left-0 right-0 bg-slate-200 -z-10' />
                            </div>
                            <div className='py-12 mb-6'>
                                <Button color='bg-black' onClick={() => setShowList(prev => !prev)}>Load more</Button>
                            </div>
                        </div>
                    ) : (
                        <div ref={eventsRef} className='flex flex-col w-full justify-center items-center'>
                            <Search onChange={(e) => setLocation(e.target.value)} placeholder='Location' autoFocus />

                            <div className='my-6 p-3 rounded-lg w-full flex flex-col bg-slate-100 space-y-3'>
                                {
                                    events?.map((event, id) => (
                                        <ListCard key={id} event={event} />
                                    ))
                                }
                            </div>
                        </div>
                    )
            }
        </div>
    )
}
