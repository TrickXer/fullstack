/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'

export function SidePanel({children}) {
    
    return (
        <div className='w-full h-full py-16 flex flex-col items-center justify-between'>
            {children}
        </div>
    )
}

export function PanelItem({ to, children }) {

    return (
        <div className="cursor-pointer w-full p-3">
            <NavLink className="capitalize tracking-widest text-primary-text hover:text-primary active:text-primary" to={to}>{children}</NavLink>
        </div>
    )
}