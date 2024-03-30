/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import LogoutPop from '../components/logoutPop'
import { logout } from '../state/users/userslice'
import { SidePanel } from '../components/sidepanel'


export default function UserDashboard({ children, ...attributes }) {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        window.location.pathname = '/'
    }


    return (
        <div className='absolute top-0 left-0 flex h-screen w-full'>
            <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                <SidePanel>
                    <NavLink className={({ isActive }) => `flex items-center px-4 py-2 mt-5 ${isActive ? 'text-gray-700 dark:text-gray-200' : 'text-gray-600 dark:text-gray-400'} transition-colors duration-300 transform rounded-lg ${isActive && 'bg-gray-100 dark:bg-gray-800'} hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`} to={"/user/dashboard/events"}>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className="mx-4 font-medium">My Events</span>
                    </NavLink>

                    <NavLink className={({ isActive }) => `flex items-center px-4 py-2 mt-5 ${isActive ? 'text-gray-700 dark:text-gray-200' : 'text-gray-600 dark:text-gray-400'} transition-colors duration-300 transform rounded-lg ${isActive && 'bg-gray-100 dark:bg-gray-800'} hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`} to={"/user/dashboard/bookings"}>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className="mx-4 font-medium">My Bookings</span>
                    </NavLink>
                </SidePanel>
                <div className='w-full flex justify-center'>
                    <LogoutPop open={open} handleClose={() => setOpen(false)} handleLogout={handleLogout} />
                    <button onClick={() => setOpen(true)} className="border-2 transition-colors duration-300 hover:text-primary border-orange-800 bg-orange-800 hover:bg-black hover:bg-opacity-20 text-white py-1 px-6 flex justify-center items-center space-x-4 capitalize text-xl rounded-lg text-primary-text disabled:text-neutral-500 disabled:bg-primary-disabled">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                        </svg>
                        <span className='mb-1'>Logout</span>
                    </button>
                </div>
            </aside>
            <main className='relative flex flex-auto bg-white dark:bg-gray-900'>
                {children}
            </main>
        </div>
    )
}
