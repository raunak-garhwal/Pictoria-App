import React, {forwardRef, useId} from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {
    const id = useId();
  return (
    <div className='w-full'>
        { label &&
        <label className='inline-block mb-1 pl-1'
        htmlFor={id}>
            {label}
        </label> }
        <select
        className={`px-3 py-2 rounded-lg w-full bg-white text-black outline-none duration-200 border border-gray-200 focus:bg-gray-50 ${className}`}
        id={id}
        ref={ref}
        {...props}
        >
            {options?.map((option) => (
                <option key={option} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
  )
}

export default forwardRef(Select)