/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './button'

export default function Search({...attributes}) {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    

    return (
        <form className='px-8 w-full bg-gray-900 rounded-lg drop-shadow-md flex justify-between items-center' onSubmit={handleSubmit}>
            <div className='p-2 flex items-center space-x-3 bg-gray-800 rounded-lg w-2/5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input {...attributes} name='query' className='bg-gray-800 h-8 w-full rounded-lg outline-none placeholder:text-neutral-400' type="search" />
            </div>

            <div className='cursor-pointer m-8 flex bg-gray-800 divide-x divide-gray-500 w-1/5 rounded-lg'>
                <div className='flex space-x-3 p-2 justify-center items-center w-1/2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                    <span>Check in</span>
                </div>
                <div className='flex p-2 justify-center items-center w-1/2'>
                    <span>Checkout</span>
                </div>
            </div>
            
            <div className='flex w-1/6 space-x-3 p-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>
                <select className='w-full p-2 rounded-lg bg-gray-800' name="cat" id="cat" title='category'>
                    <option className='w-full' selected>Category</option>
                    <option value="wedding">Wedding</option>
                    <option value="music">Music</option>
                    <option value="business">Business</option>
                </select>
            </div>
            {/* <Button className='w-36 text-primary-text transition-colors duration-300 border-2 border-orange-800 bg-orange-800 hover:bg-black hover:bg-opacity-20 hover:text-primary rounded-lg' type='submit'>Search</Button> */}
        </form>
    )
}
