/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Backdrop({ open, children }) {
    

    return (
        <>
            {
                open && 
                    <div className='absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black bg-opacity-60'>
                       {children} 
                    </div>
            }
        </>
    )
}
