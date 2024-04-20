import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Navigate, Routes, useLocation } from 'react-router-dom'
import LazyLoad from './lazyload'
import Userdb from '../pages/user/userdb'
import Admindb from '../pages/admin/admindb'


// USER
const Home = React.lazy(() => import('../pages/user/home'))
const Events = React.lazy(() => import('../pages/user/events'))
const Checkout = React.lazy(() => import('../pages/user/checkout'))
const Tickets = React.lazy(() => import('../pages/user/buytickets'))

// DASHBOARD
const DbEvents = React.lazy(() => import('../components/dashboard/events'))
const DbBookings = React.lazy(() => import('../components/dashboard/bookings'))


// ADMIN
const AdminVenues = React.lazy(() => import('../components/dashboard/admin/venues'))
const AdminPayments = React.lazy(() => import('../components/dashboard/admin/payments'))


export function ProtectedRoutes({ user, children }) {
    const location = useLocation()
    const isAuthenticated = Object.keys(user).length !== 0

    return isAuthenticated ? <Routes>{children}</Routes> : <Navigate to="/auth/login" state={{ path: location.pathname }} replace />
}

export function UserRoutes(props) {
    const user = useSelector(state => state.users.current)

    return (
        <ProtectedRoutes user={user}>
            {
                (user?.role === 'USER' || user?.role === 'ADMIN') &&
                <>
                    <Route exact path="/" element={<LazyLoad component={<Home />} />} />
                    <Route path='/user/*'>
                        <Route path='dashboard/*' element={<LazyLoad component={<Userdb />} />}>
                            <Route path='' element={<Navigate to="bookings" />} />

                            <Route path='events' element={<LazyLoad component={<DbEvents role={user?.role} />} />} />
                            <Route path='bookings' element={<LazyLoad component={<DbBookings role={user?.role} />} />} />
                        </Route>
                        <Route path='events' element={<LazyLoad component={<Events />} />} />
                        <Route path='events/ticket' element={<LazyLoad component={<Tickets />} />} />
                        <Route path='events/ticket/checkout' element={<LazyLoad component={<Checkout />} />} />
                    </Route>
                </>
            }
        </ProtectedRoutes>
    )
}

export function AdminRoutes(props) {
    const user = useSelector(state => state.users.current)

    return (
        <ProtectedRoutes user={user}>
            {
                user?.role === 'ADMIN' &&
                <Route path='dashboard/*' element={<LazyLoad component={<Admindb />} />}>
                    <Route path='' element={<Navigate to="bookings" />} />
                        
                    <Route path='events' element={<LazyLoad component={<DbEvents role={user?.role} />} />} />
                    <Route path='venues' element={<LazyLoad component={<AdminVenues />} />} />
                    <Route path='bookings' element={<LazyLoad component={<DbBookings role={user?.role} />} />} />
                    <Route path='payments' element={<LazyLoad component={<AdminPayments />} />} />
                </Route>
            }
        </ProtectedRoutes>
    )
}
