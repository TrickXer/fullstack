import Lottie from 'lottie-react'
import React, { useEffect, useRef, useState } from 'react'
import animationData from '../../../assets/loading-screen.json'

export default function LoadingScreen({isLoading}) {
    const animationRef = useRef()
    const loopUntilFrame = 49
    const totalFrames = 72

    const [play, canPlay] = useState(false)

    useEffect(() => {
        canPlay(isLoading)
    }, [isLoading])
    
    // This function will be called when the animation reaches the end
    const handleAnimationComplete = () => {
        // Check if the animation should loop until a certain frame
        if (isLoading) {
            // Continue looping
            animationRef.current.playSegments([0, loopUntilFrame], true);
        } else {
            // Play the finishing animation
            animationRef.current.playSegments([loopUntilFrame, totalFrames])
            canPlay(false)
        }
    }
    

    return (
        <>
            {
                play &&
                    <div className='absolute flex justify-center items-center bg-black bg-opacity-25 h-full w-full'>
                        <div className='w-72 h-72'>
                            <Lottie
                                lottieRef={animationRef}
                                animationData={animationData}
                                loop={false}
                                autoplay={true}
                                onComplete={handleAnimationComplete}
                            />
                        </div>
                    </div>
            }
        </>
    )
}
