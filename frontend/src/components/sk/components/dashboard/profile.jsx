/* eslint-disable no-unused-vars */
import React from 'react'
import DummyImg from '../../../../asserts/party.jpg'
import Button from '../ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../../state/users/userslice'


export default function Profile(props) {
    const user = useSelector(state => state.users.current)
    const dispatch = useDispatch()
    

    const handleUpdate = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const userUpdates = {
            fname: null,
            lname: null,
            username: null,
            email: null,
            password: null,
            country: null,
            phone: null,
        }
        for (const pair of formData.entries()) userUpdates[pair[0]] = pair[1] === "" ? null : pair[1]
        dispatch(update({ ...user, ...userUpdates, password: user.password }))
    }


    return (
        <div className='flex flex-auto bg-black bg-opacity-50'>
            <div className='flex flex-col items-center justify-center m-10 w-full '>
                <form onSubmit={handleUpdate} className='w-2/5 flex flex-col space-y-6 bg-black bg-opacity-50 p-8 px-16 rounded-lg text-white'>
                    <div className='flex justify-center items-center w-full'>
                        <div className='h-40 w-40 p-1 bg-transparent rounded-[50%] border-[4px] border-green-400'>
                            <img className='h-full w-full rounded-[50%]' src={DummyImg} alt="dummy" />
                        </div>
                    </div>
                    <div className='pt-4 flex space-x-6'>
                        <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-neutral-700 py-2 px-4 rounded-md focus:border-sky-500'
                            defaultValue={user?.fname} placeholder="Firstname" name='fname' id='firstname' />
                        
                        <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-neutral-700 py-2 px-4 rounded-md focus:border-sky-500'
                            defaultValue={user?.lname} placeholder="Lastname" name='lname' id='lastname' />
                    </div>
                    <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-neutral-700 py-2 px-4 rounded-md focus:border-sky-500'
                        defaultValue={user?.username} placeholder="Username" name='username' id='username' />
                    
                    <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-neutral-700 py-2 px-4 rounded-md focus:border-sky-500'
                        defaultValue={user?.email} placeholder="Email" name='email' id='email' />
                    
                    <div className='flex space-x-6'>
                        <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-neutral-700 py-2 px-4 rounded-md focus:border-sky-500'
                            defaultValue={user?.country} placeholder="Country" name='country' id='country' />
                        
                        <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-neutral-700 py-2 px-4 rounded-md focus:border-sky-500'
                            defaultValue={user?.phone} placeholder="Phone No" name='phone' id='phone' />
                    </div>
                    
                    <div className='pt-4 flex flex-col space-y-6'>
                        <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-neutral-700 py-2 px-4 rounded-md focus:border-sky-500'
                            placeholder="Current Password" name='current-password' id='password' />
                        
                        <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-neutral-700 py-2 px-4 rounded-md focus:border-sky-500'
                            placeholder="New Password" name='new-password' id='password' />
                        
                        <input className='bg-transparent w-full outline-none placeholder:text-neutral-400 border border-neutral-700 py-2 px-4 rounded-md focus:border-sky-500'
                            placeholder="Confirm Password" name='confirm-password' id='password' />
                    </div>
                    <Button className="bg-[#FFF76A] hover:bg-[#D4D056] text-black disabled:text-neutral-500 disabled:bg-[#FFFDAE]">Update</Button>
                </form>
            </div>
        </div>
    )
}
