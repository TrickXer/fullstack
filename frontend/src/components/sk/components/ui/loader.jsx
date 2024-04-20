/* eslint-disable no-unused-vars */
import React from 'react'
import Lottie from 'lottie-react'
import loader from '../../../../assets/WrapIt Loading.json'


export default function Loader(props) {


    return (
        <div className='absolute top-0 left-0 right-0 h-screen flex flex-col justify-center items-center bg-gray-900 z-30'>
            <Lottie className='-mt-24 h-96' animationData={loader} />
            <h1 className='text-xl text-center text-gray-400'>Loading...</h1>
        </div>
    )
}
