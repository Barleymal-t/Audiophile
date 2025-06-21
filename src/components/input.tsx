import React, { FC, InputHTMLAttributes } from 'react'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?:string,
  placeholder?:string
}


const Input: FC<InputProps> = ({
    label="Hello",
    placeholder
}) => {
  return (
    <div className="group flex flex-col">
<label className='text-black font-semibold text-sm' htmlFor={label}>{label}</label>
    <div className=' border-1 group-focus-within:border-2 group-focus-within:border-orange  transition-colors p-4 rounded-md w-full  border-medium-gray focus:border-orange'>
      <input className=' focus:outline-none w-full' placeholder={placeholder?? `Insert your ${label}`} name={label} type="text" />
    </div>
    </div>
  )
}

export default Input;
