import React from 'react'
import { MyRoute } from 'simple-react-router-x'
import LazyLoad from '../handlers/lazyload'


const LazyLogin = React.lazy(() => import('../components/auth/Login'))
const LazyRegister = React.lazy(() => import('../components/auth/Register'))
const LazyForgotPassword = React.lazy(() => import('../components/auth/ForgotPassword'))


export default function Authentication(props) {
    

    return (
        <div className='flex w-full justify-center items-center mt-[100px]'>
            <MyRoute path={"/auth/login"} component={<LazyLoad component={<LazyLogin />} />} />
            <MyRoute path={"/auth/sign-up"} component={<LazyLoad component={<LazyRegister />} />} />
            <MyRoute path={"/auth/forgot-password"} component={<LazyLoad component={<LazyForgotPassword />} />} />
        </div>
    )
}
