import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import { Box, Button } from '@mui/material';


export default function LogoutPop({ open, setOpen, handleClose, handleLogout }) {
    

    return (
        <Backdrop className='z-50' open={open} onClick={handleClose}>
            <Box className='bg-neutral-800 rounded-lg text-white flex flex-col justify-center items-center py-8 px-6'>
                <div className='w-full justify-center items-center'>
                    <span className='text-center text-nowrap w-full px-2'>Are you sure you want to Logout?</span>
                </div>
                <div className='mt-6 w-full flex justify-end'>
                    <div className='flex space-x-4 items-center'>
                        <Button onClick={handleClose}>cancel</Button>
                        <Button onClick={handleLogout} variant='contained' color='error'>logout</Button>
                    </div>
                </div>
            </Box>
        </Backdrop>
    )
}
