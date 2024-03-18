/* eslint-disable react/prop-types */
export function Form({children, ...attributes}) {
    

    return (
        <form className="w-[450px] py-6 px-12 flex flex-col space-y-8 justify-center items-center bg-black bg-opacity-75 rounded-xl drop-shadow-xl"
            {...attributes}
        >
            {children}
        </form>
    )
}

export function TextInput({...attributes}) {
    

    return (
        <input className='w-full outline-none text-white bg-neutral-800 bg-opacity-75  placeholder:text-neutral-400 py-2 px-4 rounded-md focus:border focus:border-sky-500'
            {...attributes}
        />
    )
}
