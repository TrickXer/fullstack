/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Form, TextInput } from '../ui/form'
import React, { useEffect, useState } from 'react'
import { login } from '../../state/users/userslice'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import DefaultAvatar from '../../../../assets/party.jpg'
import Alert from '../alert'


export default function Login(props) {
    const [showpwd, setShowpwd] = useState(false)
    const users = useSelector(state => state.users.users)
    const user = useSelector(state => state.users.current)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [logined, setLogined] = useState(false)


    useEffect(() => {
        if (Object.keys(user).length !== 0) navigate("/user/events")
    }, [])

    
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const user = users.find(user => user.email === formData.get('email'))

        if (user !== undefined) {
            dispatch(login(user))
            setLogined(true)
            const timeout = setTimeout(() => {
                setLogined(false)

                user.role.toLowerCase() !== 'admin' ?
                    navigate('/')
                    :
                    navigate('/admin/dashboard/events')
            }, 1.5 * 1000)

            return () => clearInterval(timeout)
        }
    }


    return (
        <>
            {
                logined &&
                <div className='absolute top-0 right-0 mt-32 mx-16 pointer-events-none'>
                    <Alert handleClick={() => setLogined(false)} title={"Login sucessfull"} description={"We have found your account details."} />
                </div>
            }
            <Form onSubmit={handleSubmit}>
                <img className='h-36 w-36 p-1 rounded-full border-2 border-green-500' src={DefaultAvatar} alt="default" />
                <TextInput name='email' type="email" placeholder='Email' required />
                <TextInput name='password' type={!showpwd ? "password" : "text"} placeholder='Password' required />

                <div className='flex w-full justify-between items-center'>
                    <div className='flex space-x-4 items-center'>
                        <input type="checkbox" name="show-pwd" id="show-pwd" onClick={() => setShowpwd(prev => !prev)} />
                        <label htmlFor="show-pwd" className='capitalize text-neutral-400 text-sm'>show password</label>
                    </div>
                    <Link to={'/auth/forgot-password'}>
                        <span className='no-underline text-white hover:underline hover:text-primary-hover text-sm text-nowrap text-center'>Forgot Password?</span>
                    </Link>
                </div>

                <div className='flex flex-col space-y-6 items-center'> 
                    <button className='w-[280px] p-1 text-center bg-primary transition-colors duration-300 tracking-widest hover:bg-transparent border-2 border-transparent hover:border-2 hover:border-primary hover:text-primary text-primary-text py-2 px-6 capitalize rounded-md' type='submit'>
                        <span className='text-lg'>login</span>
                    </button>
                    <Link to={'/auth/sign-up'}>
                        <span className='no-underline text-white hover:underline hover:text-primary-hover text-sm'>Don't have an account? Create a new one</span>
                    </Link>
                </div>
            </Form>
        </>
    )
}
