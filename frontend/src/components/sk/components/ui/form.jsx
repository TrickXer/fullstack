/* eslint-disable react/prop-types */
export function Form({children, ...attributes}) {
    

    return (
        <form className="h-[600px] w-[450px] py-4 px-12 flex flex-col space-y-8 justify-center items-center bg-white rounded-lg drop-shadow-xl"
            {...attributes}
        >
            {children}
        </form>
    )
}

export function TextInput({...attributes}) {
    

    return (
        <input className='w-full outline-none placeholder:text-slate-400 border border-gray-400 py-2 px-4 rounded-md focus:border-sky-500'
            {...attributes}
        />
    )
}
