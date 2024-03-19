/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminDashboard from '../../layouts/AdminDashboard'


export default function Admindb(props) {

    return (
        <AdminDashboard>
            <Outlet />
        </AdminDashboard>
    )
}
