import React, { useState } from 'react'
import DefaultAvatar from '../../../../asserts/party.jpg'
import { Form, TextInput } from '../ui/form'
import { MyLink } from 'simple-react-router-x'


export default function ForgotPassword(props) {
    const [loading, setLoading] = useState(false)
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
            <img className='h-36 w-36 p-1 rounded-full border-2 border-green-500' src={DefaultAvatar} alt="default" />
            <TextInput name='email' type="email" placeholder='Email' required />
            {/* <TextInput name='password' type={!showpwd ? "password" : "text"} placeholder='Password' required />

            <div className='flex w-full justify-between items-center'>
                <div className='flex space-x-4 items-center'>
                    <input type="checkbox" name="show-pwd" id="show-pwd" onClick={() => setShowpwd(prev => !prev)} />
                    <label htmlFor="show-pwd" className='capitalize text-neutral-400 text-sm'>show password</label>
                </div>
                <MyLink to={'/auth/forgot-password'}>
                    <span className='no-underline text-white hover:underline hover:text-[#D4D056] text-sm text-nowrap text-center'>Forgot Password?</span>
                </MyLink>
            </div> */}

            <div className='flex flex-col space-y-6 items-center'> 
                <button className='w-[280px] p-1 text-center bg-primary hover:bg-[#D4D056] text-black py-2 px-6 capitalize rounded-md' type='submit'>
                    <span className='text-lg'>send link</span>
                </button>
                <MyLink to={'/auth/login'}>
                    <span className='no-underline text-white hover:underline hover:text-[#D4D056] text-sm text-center'>back to login</span>
                </MyLink>
            </div>
        </Form>
    )
}
