/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { PanelItem, SidePanel } from '../components/sidepanel'


export default function Dashboard({ children, ...attributes }) {


    return (
        <div className='absolute top-0 left-0 flex h-screen w-full'>
            <div className='w-[300px] bg-black'>
                <SidePanel>
                    <div className='flex flex-col space-y-2'>
                        <PanelItem to={"/user/profile"}>Profile</PanelItem>
                        <PanelItem to={"/user/events"}>Events</PanelItem>
                    </div>
                    <div>
                        <PanelItem to={"/"}>
                            <button className="py-2 px-6 flex justify-center items-center space-x-4 capitalize text-xl rounded-lg bg-[#FFF76A] text-black disabled:text-neutral-500 disabled:bg-[#FFFDAE]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                </svg>
                                <span className='mb-1'>Logout</span>
                            </button>
                        </PanelItem>
                    </div>
                </SidePanel>
            </div>
            <div className='flex flex-auto'>
                {children}
            </div>
        </div>
    )
}
