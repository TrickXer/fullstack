/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import DefaultAvatar from '../../assets/react.svg'
import { Form, TextInput } from '../../components/ui/form'
import { MyLink } from 'simple-react-router-x'


export default function Login(props) {
    const [loading, setLoading] = useState(false)
    const [showpwd, setShowpwd] = useState(false)
    const [data, setData] = useState(new FormData())
    
    const handleSubmit = (e) => {
        e.preventDefault()

        setLoading(true)

        const formData = new FormData(e.target)
        setData(formData)

        setTimeout(() => {
            setLoading(false)
        }, 2000);

        for(const pair of formData.entries()) console.log(pair[0] + ": " + pair[1])
    }


    return (
        <Form onSubmit={handleSubmit}>
            <img className='h-36 w-auto' src={DefaultAvatar} alt="default" />
            <TextInput name='email' type="email" placeholder='Email' required />
            <TextInput name='password' type={!showpwd ? "password" : "text"} placeholder='Password' required />

            <div className='flex space-x-4 w-full'>
                <input type="checkbox" name="show-pwd" id="show-pwd" onClick={() => setShowpwd(prev => !prev)} />
                <label htmlFor="show-pwd" className='capitalize text-slate-500'>show password</label>
            </div>

            <div className='flex flex-col space-y-2'> 
                <button className='p-1 text-center bg-green-500 py-2 px-6 text-white capitalize rounded-md' type='submit'>
                    <span className='text-lg'>login</span>
                </button>
                <MyLink to={'/auth/sign-up'} className='no-underline text-purple-800 hover:underline'>Create new account</MyLink>
            </div>
        </Form>
    )
}
