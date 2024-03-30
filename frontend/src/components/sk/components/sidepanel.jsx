/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'

export function SidePanel({children}) {
    
    return (
        <>
            <a href="/" className="flex items-center space-x-3 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-auto h-8 sm:h-10 text-white p-2 bg-primary rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className='dark:text-gray-200 text-gray-600 text-2xl'>WrapIt</span>
            </a>

            <div className="flex flex-col items-center mt-6 -mx-2">
                <img className="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">John Doe</h4>
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">john@example.com</p>
            </div>

            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav>
                    {children}
                </nav>
            </div>
        </>
    )
}

export function PanelItem({ to, children }) {

    return (
        <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200" href={to}>
            {children}
        </a>
    )
}