import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Breadcrumbs({current}) {

    return (
        <nav className='p-6 dark:bg-gray-900' aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                <li>
                    <NavLink to={"/admin/dashboard"} className="block transition hover:text-gray-700 dark:hover:text-gray-200"> Dashboard </NavLink>
                </li>

                {
                    current &&
                    <>
                        <li className="rtl:rotate-180">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                                />
                            </svg>
                        </li>

                        <li>
                            <NavLink to={current.path} className={({ isActive }) => `${isActive && 'dark:text-gray-200'} capitalize block transition hover:text-gray-700 dark:hover:text-gray-200`}>{ current.name }</NavLink>
                        </li>
                    </>
                }
            </ol>
        </nav>
    )
}
