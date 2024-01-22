import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
})
 {
  return (
    <button className= {`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props} >
        {children}
    </button>
  )
}

// the word "children" is nothing just a text or it can be called button text and is rendered in the button , just it is called children by developers

// the values used insie the function Button ({...}) are just default values if someine givs other values those will be used or else they will be used as default values

export default Button
