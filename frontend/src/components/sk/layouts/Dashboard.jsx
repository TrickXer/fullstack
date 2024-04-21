/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import LogoutPop from '../components/logoutPop'
import { logout } from '../state/users/userslice'
import Breadcrumbs from '../components/dashboard/breadcrumbs'



export default function AdminDashboard({ aside, main, ...attributes }) {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const location = useLocation()

    const handleLogout = () => {
        dispatch(logout())
        localStorage.removeItem('token')
        window.location.pathname = '/'
    }

    return (
        <div className='flex flex-col h-screen w-full'>
            <div className='flex flex-auto w-full'>
                <aside className="flex flex-col h-screen w-64 px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                    {aside}
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
                <main className='relative flex flex-col flex-auto h-screen bg-white dark:bg-gray-900'>
                    <Breadcrumbs current={{
                        path: location.pathname,
                        name: location.pathname.split('/')[location.pathname.split('/').length-1]
                    }} />
                    {main}
                </main>
            </div>
        </div>
    )
}
