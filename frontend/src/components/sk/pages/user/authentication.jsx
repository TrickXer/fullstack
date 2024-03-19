import React from 'react'
import { Outlet } from 'react-router-dom'


export default function Authentication(props) {
    

    return (
        <div className='flex w-full justify-center items-center'>
            <Outlet />
        </div>
    )
}
