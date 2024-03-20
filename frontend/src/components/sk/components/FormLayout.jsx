import React from 'react'
import Button from './ui/button'

export default function FormLayout(props) {
    

    return (
        <div className='flex flex-col space-y-6 divide divide-y-2 px-16 divide-gray-800'>
            <div className='flex flex-auto items-center justify-center'>
                <form className='w-full flex flex-col space-y-6 bg-opacity-50 py-8 rounded-lg'>
                    <div className='pt-4 flex space-x-6'>
                        <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-gray-700 py-2 px-4 rounded-md focus:border-orange-800'
                            placeholder="Event Name" name='event_name' id='event_name' />
                        
                        <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-gray-700 py-2 px-4 rounded-md focus:border-orange-800'
                            placeholder="Event Type" name='event_type' id='event_type' />
                    </div>
                    <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-gray-700 py-2 px-4 rounded-md focus:border-orange-800'
                        placeholder="Event Description" name='description' id='description' />
                    
                    <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-gray-700 py-2 px-4 rounded-md focus:border-orange-800'
                        placeholder="Suitable For" name='suitable_for' id='suitable_for' />
                    
                    <div className='flex space-x-6'>
                        <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-gray-700 py-2 px-4 rounded-md focus:border-orange-800'
                            placeholder="Max Participants" name='max_participants' id='max_participants' />
                        
                        <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-gray-700 py-2 px-4 rounded-md focus:border-orange-800'
                        placeholder="Charges" name='charges' id='charges' />
                    </div>
                </form>
            </div>
            <div className='pt-8 w-full flex justify-end'>
                <button className="px-6 py-1 rounded-lg border-2 transition-colors duration-300 hover:text-primary border-orange-800 bg-orange-800 hover:bg-black hover:bg-opacity-20 text-white disabled:text-neutral-500 disabled:bg-primary-disabled">
                    Add
                </button>
            </div>
        </div>
    )
}
