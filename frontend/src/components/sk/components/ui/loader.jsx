/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Lottie from 'lottie-react'
import loader from '../../../../assets/WrapIt Loading.json'


export default function Loader(props) {


    return (
        <div className='absolute top-0 left-0 right-0 h-screen bg-gray-900 flex flex-col justify-center items-center z-30'>
            <Lottie animationData={loader} />
            <h1 className='text-xl text-gray-400'>Loading...</h1>
        </div>
    )
}
