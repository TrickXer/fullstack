/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import LogoutPop from '../components/logoutPop'
import { logout } from '../state/users/userslice'
import { PanelItem, SidePanel } from '../components/sidepanel'


export default function UserDashboard({ children, ...attributes }) {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()

    const handleLogout = () => {
        window.location.pathname = '/'
        dispatch(logout())
    }


    return (
        <div className='absolute top-0 left-0 flex h-screen w-full'>
            <aside className='w-[375px] bg-gray-800'>
                <SidePanel>
                    <div className='flex flex-col space-y-2'>
                        <PanelItem to={"/user/dashboard/events"}>Events</PanelItem>
                        <PanelItem to={"/user/dashboard/tickets"}>Tickets</PanelItem>
                    </div>
                    <div>
                        <LogoutPop open={open} handleClose={() => setOpen(false)} handleLogout={handleLogout} />
                        <button onClick={() => setOpen(true)} className="border-2 transition-colors duration-300 hover:text-primary border-orange-800 bg-orange-800 hover:bg-black hover:bg-opacity-20 text-white py-2 px-6 flex justify-center items-center space-x-4 capitalize text-xl rounded-lg bg-primary text-primary-text disabled:text-neutral-500 disabled:bg-primary-disabled">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                            </svg>
                            <span className='mb-1'>Logout</span>
                        </button>
                    </div>
                </SidePanel>
            </aside>
            <main className='relative flex flex-auto bg-gray-900'>
                {children}
            </main>
        </div>
    )
}
