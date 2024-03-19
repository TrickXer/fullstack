/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/button'

export default function Home(props) {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col flex-auto text-white'>
            <div className='mt-16 text-[60px] flex flex-col justify-center items-center'>
                <p className='text-3xl tracking-wide'>We Are Q Productions</p>
                <h1 className='mt-8 flex flex-col text-center font-bold'>
                    <span className='text-center'>HERE TO CREATE</span>
                    <span className='text-center'>MOMENTS THAT LAST</span>
                    <span className='text-center'>A LIFETIME</span>
                </h1>

                <div className='mt-8'>
                    <Button className="bg-primary tracking-widest transition-colors duration-500 text-primary-text hover:bg-black hover:bg-opacity-10 border-2 border-transparent hover:border-2 hover:border-primary hover:text-primary"
                        onClick={() => navigate("/user/events")}
                    >
                        upcoming events
                    </Button>
                </div>
            </div>
        </div>
    )
}
