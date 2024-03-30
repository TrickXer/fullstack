import React from 'react'

export function FormLayout({children, onSubmit, handleCancel}) {
    
    return (
        <div className='flex flex-col space-y-12'>
            <div className='flex flex-auto items-center justify-center'>
                <form onSubmit={onSubmit} className='w-full flex flex-col space-y-12 divide divide-y-2 divide-gray-300 dark:divide-gray-700'>
                    {children}
                </form>
            </div>
            <div className='pt-8 w-full flex space-x-4 justify-end'>
                <button onClick={handleCancel} className="rounded-lg bg-gray-600 hover:bg-gray-700 px-6 py-2 text-sm font-medium text-gray-50">
                    cancel
                </button>
                <button className="px-6 py-1 rounded-lg border-2 transition-colors duration-300 hover:text-primary border-orange-800 bg-orange-800 hover:bg-black hover:bg-opacity-20 text-white disabled:text-neutral-500 disabled:bg-primary-disabled">
                    Add
                </button>
            </div>
        </div>
    )
}

export function FormGroup({title, children, ...rest}) {
    
    return (
        <div>
            <h2 className="capitalize sm:text-2xl text-left tracking-wider text-xl font-bold title-font my-4 mb-8 text-gray-700 dark:text-gray-300">{title}</h2>
            <div className='flex flex-col space-y-8' {...rest}>
                {children}
            </div>
        </div>
    )
}

export function FormFields({title, children}) {
    
    return (
        <fieldset className='px-6'>
            <legend className="capitalize sm:text-xl text-left tracking-wider text-lg font-bold title-font my-4 mb-8 text-gray-700 dark:text-gray-300">{ title }</legend>

            <div className="space-y-2">
                {children}
            </div>
        </fieldset>
    )
}

export function FormField({id, title, description}) {
    
    return (
        <label
            for={id}
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900 dark:has-[:checked]:bg-gray-700/10"
        >
            <div className="flex items-center">
                &#8203;
                <input
                type="checkbox"
                className="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
                id={id}
                />
            </div>

            <div>
                <strong className="font-medium text-gray-700 dark:text-gray-300">{ title }</strong>
                <p className="mt-1 text-pretty text-sm text-gray-500">{ description }</p>
            </div>
        </label>
    )
}

export function FormText({required=false, name, description, className, ...rest}) {
    
    return (
        <div className={className}>
            <label className="text-gray-700 dark:text-gray-300" for="username">{name} {required && '*'}</label>
            <input {...rest} required={required} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none" />
            <span className='text-gray-500 text-sm text-wrap'>{description}</span>
        </div>
    )
}

export function FormTextArea({required=false, name, description, className, ...rest}) {
    
    return (
        <div className={className}>
            <label className="text-gray-700 dark:text-gray-300" for="username">{name} {required && '*'}</label>
            <textarea {...rest} required={required}
                className="resize-none h-[200px] block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none"
            />
            <span className='text-gray-500 text-sm text-wrap'>{description}</span>
        </div>
    )
}