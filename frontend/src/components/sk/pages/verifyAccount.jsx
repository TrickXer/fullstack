import React, { useState } from 'react'
import Lottie from 'lottie-react'
import verify from '../../../assets/WrapIt check.json'
import { useNavigate, useLocation } from 'react-router-dom'
import Api from '../utils/api'


export default function VerifyAccount(props) {
    const navigate = useNavigate()
    const location = useLocation()

    const searchParams = new URLSearchParams(location.search)
    const token = searchParams.get("token")

    const [error, setError] = useState(false)

    Api.verify(token)
        .then(res => {
            console.log(res)
            setError(false)
        })
        .catch(error => {
            console.log(error)
            setError(true)
        })

    return (
        <div className='bg-gray-300 flex flex-col justify-center items-center h-screen dark:bg-gray-900'>
            {
                !error ?
                    <>
                        <Lottie className='-mt-24 h-80' animationData={verify} loop={false} onComplete={() => navigate('/auth/login')} />
                        <span className='text-gray-700 dark:text-gray-400 mt-4 text-lg'>Account verification is successful</span>
                    </>
                    :
                    <span className='text-gray-700 dark:text-gray-400 mt-4 text-lg'>Invalid verification token</span>
            }
        </div>
    )
}
