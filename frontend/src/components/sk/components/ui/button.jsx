/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Button({children, className, ...attributes}) {
    

    return (
        <button {...attributes} className={`py-3 px-6 capitalize text-xl rounded-lg ${className}`}>
            {children}
        </button>
    )
}
