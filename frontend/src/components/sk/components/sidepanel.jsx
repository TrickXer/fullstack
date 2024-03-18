/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { MyLink } from 'simple-react-router-x'

export function SidePanel({children}) {
    
    return (
        <div className='w-full h-full py-16 pt-48 flex flex-col items-center justify-between'>
            {children}
        </div>
    )
}

export function PanelItem({ to, children, ...attributes }) {

    return (
        <div className={`cursor-pointer w-full p-3 capitalize tracking-widest hover:text-[#FFF76A] text-white`}>
            <MyLink to={to}>{children}</MyLink>
        </div>
    )
}