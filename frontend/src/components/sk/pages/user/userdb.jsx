/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import UserDashboard from '../../layouts/UserDashboard'


export default function Userdb(props) {

    return (
        <UserDashboard>
            <Outlet />
        </UserDashboard>
    )
}
