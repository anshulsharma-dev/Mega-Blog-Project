import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label ,
    className = "",
    type = "text",
  ...props

} , ref ){
    const id = useId();
    
    return (
        <div className='width-full'>
            { label && <label
            className= {`inline-block mb-1 pl-1 ${className}`}
            htmlFor={id}>
                {label}
            </label>
            }
            <input 
            type= {type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none
             focus:bg-gray-50 duration-200 border border-gray-200 w-full  
             ${className} `} 
             {...props}
             id={id}
             ref = {ref} 
             // This ref = {ref} is the thing which gives reference to the parent component and for this only we used forwardRef hook , to use the state ..
             />
        </div>
    )
})

export default Input;