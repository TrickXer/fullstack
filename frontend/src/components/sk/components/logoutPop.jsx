import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import { Box, Button } from '@mui/material';


export default function LogoutPop({ open, setOpen, handleClose, handleLogout }) {
    

    return (
        <Backdrop className='z-50' open={open} onClick={handleClose}>
            <div className="rounded-lg bg-white dark:bg-gray-900 p-8 shadow-2xl">
                <h2 className="text-lg text-white font-bold">Are you sure you want to logout?</h2>

                <p className="mt-2 text-sm text-gray-500">
                    Doing that will log you out, are you 100% sure it's OK?
                </p>

                <div className="mt-4 flex gap-2">
                    <button onClick={handleLogout} type="button" className="rounded transition-colors duration-300 bg-orange-800 border-2 border-orange-800 hover:bg-black hover:bg-opacity-20 hover:text-primary px-4 py-2 text-sm font-medium text-white">Yes, I'm sure</button>
                    <button onClick={handleClose} type="button" className="rounded bg-gray-600 hover:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-50">No, go back</button>
                </div>
            </div>
        </Backdrop>
    )
}
