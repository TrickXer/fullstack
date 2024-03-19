/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import DefaultAvatar from '../../../../asserts/party.jpg'
import { Form, TextInput } from '../ui/form'
import { MyLink, useMyNavigate } from 'simple-react-router-x'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../state/users/userslice'


export default function Login(props) {
    const [showpwd, setShowpwd] = useState(false)
    const users = useSelector(state => state.users.users)
    const user = useSelector(state => state.users.current)
    const dispatch = useDispatch()
    const navigate = useMyNavigate()


    useEffect(() => {
        if (Object.keys(user).length !== 0) navigate("/user/events")
    }, [])

    
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const user = users.find(user => user.email === formData.get('email'))

        if (user !== undefined) {
            dispatch(login(user))
            navigate('/')
        }
    }


    return (
        <Form onSubmit={handleSubmit}>
            <img className='h-36 w-36 p-1 rounded-full border-2 border-green-500' src={DefaultAvatar} alt="default" />
            <TextInput name='email' type="email" placeholder='Email' required />
            <TextInput name='password' type={!showpwd ? "password" : "text"} placeholder='Password' required />

            <div className='flex w-full justify-between items-center'>
                <div className='flex space-x-4 items-center'>
                    <input type="checkbox" name="show-pwd" id="show-pwd" onClick={() => setShowpwd(prev => !prev)} />
                    <label htmlFor="show-pwd" className='capitalize text-neutral-400 text-sm'>show password</label>
                </div>
                <MyLink to={'/auth/forgot-password'}>
                    <span className='no-underline text-white hover:underline hover:text-primary-hover text-sm text-nowrap text-center'>Forgot Password?</span>
                </MyLink>
            </div>

            <div className='flex flex-col space-y-6 items-center'> 
                <button className='w-[280px] p-1 text-center bg-primary hover:bg-primary-hover text-primary-text py-2 px-6 capitalize rounded-md' type='submit'>
                    <span className='text-lg'>login</span>
                </button>
                <MyLink to={'/auth/sign-up'}>
                    <span className='no-underline text-white hover:underline hover:text-primary-hover text-sm'>Don't have an account? Create a new one</span>
                </MyLink>
            </div>
        </Form>
    )
}
