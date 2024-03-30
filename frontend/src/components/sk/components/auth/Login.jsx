/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Alert from '../alert'
import React, { useEffect, useState } from 'react'
import { login } from '../../state/users/userslice'
import { useDispatch, useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'


export default function Login(props) {
    const [showpwd, setShowpwd] = useState(false)
    const users = useSelector(state => state.users.users)
    const user = useSelector(state => state.users.current)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const [pop, setPop] = useState(false)


    useEffect(() => {
        if (Object.keys(user).length !== 0) navigate("/user/events")
    }, [])

    
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const user = users.find(user => user.email === formData.get('email'))

        if (user !== undefined) {
            dispatch(login(user))
            setPop(true)
            const timeout = setTimeout(() => {
                setPop(false)

                user.role.toLowerCase() !== 'admin' ?
                    navigate(location.state?.path || '/', { replace: true })
                    :
                    navigate(location.state?.path || '/admin/dashboard/events', { replace: true })
            }, 1 * 1000)

            return () => clearInterval(timeout)
        }
    }


    return (
        <>
            <AnimatePresence>
                {
                    pop &&
                        <motion.div className='absolute top-0 left-0 m-16'
                            initial={{ x: -450 }}
                            animate={{ x: 0 }}
                            exit={{ x: -450 }}
                        >
                            <Alert handleClick={() => setPop(false)} title={"Login sucessfull"} description={"We have found your account details."} />
                        </motion.div>
                }
            </AnimatePresence>
            <form onSubmit={handleSubmit}>
                <div class="relative flex items-center mt-8">
                    <span class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>

                    <input name='email' type="email" class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-orange-700 dark:focus:border-orange-600 focus:ring-orange-600 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" required />
                </div>

                <div class="relative flex items-center mt-4">
                    <span class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </span>

                    <input name='password' type="password" class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-orange-700 dark:focus:border-orange-600 focus:ring-orange-600 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" required />
                </div>

                <div class="flex w-full justify-end mt-3">
                    <a href="#" class="text-sm text-gray-400 focus:text-primary hover:text-primary hover:underline">Forgot password?</a>
                </div>

                <div class="mt-6">
                    <button type='submit' class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white hover:text-primary capitalize transition-colors duration-300 transform bg-orange-800 border-2 border-orange-800 rounded-lg hover:bg-black hover:bg-opacity-20 focus:outline-none focus:ring focus:ring-orange-600 focus:ring-opacity-50">
                        Sign in
                    </button>

                    <p class="mt-4 text-center text-gray-600 dark:text-gray-400">or sign in with</p>

                    <a href="#" class="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <svg class="w-6 h-6 mx-2" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                        </svg>

                        <span class="mx-2">Sign in with Google</span>
                    </a>
                </div>
            </form>
        </>
    )
}
