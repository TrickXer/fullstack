import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            hasError: false,
        }
    }
    
    componentDidCatch(error, errorInfo) {
        console.error('Error caught by ErrorBoundary:', error, errorInfo)
        this.setState({ hasError: true })
    }


    render() {
        if (this.state.hasError) {
            return (
                <div className="grid h-screen place-content-center bg-white px-4 dark:bg-gray-900 z-50">
                    <div className="text-center">
                        <h1 className="text-9xl font-black text-gray-200 dark:text-gray-700">404</h1>

                        <p className="capitalize text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                            oops!
                        </p>

                        <p className="mt-4 text-gray-500 dark:text-gray-400">We can't find that page.</p>

                        <button onClick={() => window.location.pathname = '/'} className="mt-6 inline-block rounded-lg px-5 py-3 text-sm font-medium bg-orange-800 border-2 border-orange-800 text-primary-text hover:bg-black hover:bg-opacity-15 hover:text-primary">
                            Go Back Home
                        </button>
                    </div>
                </div>
            )
        }
            
        return this.props.children
    }
}
