import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import { Box } from '@mui/material';


export default function LogoutPop({ open, handleClick }) {
    

    return (
        <Backdrop open={open} onClick={handleClick}>
            <Box className='bg-neutral-700' sx={{ height: '100px', width: "300px" }}>
                <span>test</span>
            </Box>
        </Backdrop>
    )
}
