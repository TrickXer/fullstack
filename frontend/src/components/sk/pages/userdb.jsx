/* eslint-disable no-unused-vars */
import React from 'react'
import Dashboard from '../layouts/dashboard'
import { MyRoute } from 'simple-react-router-x'
import LazyLoad from '../handlers/lazyload'


const LazyUProfile = React.lazy(() => import('../components/dashboard/profile'))
const LazyUEvents = React.lazy(() => import('../components/dashboard/events'))


export default function Userdb(props) {

    return (
        <Dashboard>
            {/* <MyRoute path={"/user/profile"} component={<LazyLoad component={<LazyUProfile />} />} /> */}
            <MyRoute path={"/user/events"} component={<LazyLoad component={<LazyUEvents />} />} />
        </Dashboard>
    )
}
