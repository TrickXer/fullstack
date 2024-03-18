/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Suspense } from 'react'
import Loader from '../components/ui/loader'

export default function LazyLoad({component}) {
    

    return (
        <Suspense fallback={<Loader />}>
            {component}
        </Suspense>
    )
}

