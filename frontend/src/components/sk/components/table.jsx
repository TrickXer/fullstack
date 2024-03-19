import { Table, TableBody, TableRow, TableCell, TableHead, TableContainer, Paper } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

export default function Bookings({ headers, body }) {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        '&.MuiTableCell-root': {
            textTransform: 'capitalize',
            color: 'white'
        },
    }))

    const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
        '&.MuiTableContainer-root': {
            padding: '6px 12px 12px 6px',
            borderRadius: '12px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
    }))


    return (
        <StyledTableContainer component={Paper}>
            <Table className='max-h-screen bg-neutral-900 bg-opacity-75'>
                <TableHead>
                    <TableRow>
                        {
                            headers?.map((header, id) => (
                                <StyledTableCell align={id == 0 ? 'left' : 'right'}>{header}</StyledTableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {
                            body?.map((data, id) => (
                                <StyledTableCell align={id == 0 ? 'left' : 'right'}>{data}</StyledTableCell>
                            ))
                        }
                    </TableRow>
                </TableBody>
            </Table>
        </StyledTableContainer>
    )
}
