/* eslint-disable no-unused-vars */
import React from 'react'
import SearchBox from '../components/searchBox'
import Featured from './events'
import Button from '../components/ui/button'
import { useMyNavigate } from 'simple-react-router-x'

export default function Home(props) {
    const navigate = useMyNavigate()
    const navigatoToEvents = () => {
        navigate("/events")
    }
    

    return (
        <div className='flex flex-col flex-auto text-white'>
            <div className='mt-16 text-[60px] flex flex-col justify-center items-center'>
                <p className='text-3xl tracking-wide'>We Are Q Productions</p>
                <h1 className='mt-8 flex flex-col text-center font-semibold'>
                    <span className='text-center'>HERE TO CREATE</span>
                    <span className='text-center'>MOMENTS THAT LAST</span>
                    <span className='text-center'>A LIFETIME</span>
                </h1>

                <div className='mt-8'>
                    <Button className="bg-[#FFF76A] transition-colors duration-500 text-black hover:bg-black hover:bg-opacity-50 hover:border-2 hover:border-[#FFF76A] hover:text-[#FFF76A]" onClick={navigatoToEvents}>upcoming events</Button>
                </div>
            </div>
        </div>
    )
}
