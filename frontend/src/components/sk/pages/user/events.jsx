/* eslint-disable no-unused-vars */
import Card from '../../components/card'
import { useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import Api from '../../utils/api'


export default function Events(props) {
    const [location, setLocation] = useState("")
    const events = useSelector(state => {
        console.log(state)
        if (location === "") return state.events.events.filter(event => event?.privacy === "public")
        return state.events.events.filter(event => event?.location.toLowerCase().split(" ").includes(location.toLowerCase()) && event?.privacy === "public")
    })
    Api.refreshToken()


    return (
        <div className='relative flex flex-col pt-8 text-white'>
            <div className='relative flex flex-col items-center'>
                <h2 className='pb-12 uppercase text-6xl tracking-wide font-semibold'>upcoming events</h2>
                
                <div className='my-16 grid grid-cols-3 grid-rows-subgrid grid-flow-row gap-12 z-10'>
                    {
                        events?.map((event, id) => (
                            <Card key={id} event={event} />
                        ))
                    }
                    <div className='absolute h-[28em] w-full rounded-t-3xl top-1/2 left-0 right-0 bg-black bg-opacity-50 -z-10' />
                </div>
            </div>
        </div>
    )
}
