/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export function Select({title, defaultValue, type, range, children, ...attributes}) {
    const count = [...Array(range+1).keys()]

    const Icon = () => {
        if (type === 'tag') {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                    </svg>
                )
        }
        if (type === 'person') {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
            )
        }
    }


    return (
        <div className='flex space-x-3 p-2 items-center'>
            <div className='flex space-x-3 items-center'>
                
                <Icon />
                <select {...attributes} className='w-full p-2 px-4 rounded-lg bg-primary border border-black' name="cat" id="cat" title={title}>
                    <option value="none" selected hidden>{title}</option>
                    {
                        type === 'tag' ? children
                            : (
                                count.filter(num => num>0).map(num => (
                                    <option className='w-full bg-primary hover:bg-primary-hover' key={num}>{num}</option>
                                ))
                            )
                    }
                </select>
            </div>
        </div>
    )
}


export function SelectItem(props) {

    return (
        <div>
        </div>
    )
}