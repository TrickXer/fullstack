/* eslint-disable no-unused-vars */
import React from 'react'
import Dashboard from '../../layouts/Dashboard'
import { Outlet, NavLink } from 'react-router-dom'
import { SidePanel } from '../../components/sidepanel'


export default function Userdb(props) {

    return (
        <Dashboard
            aside={
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
            }

            main={<Outlet />}
        />
    )
}
