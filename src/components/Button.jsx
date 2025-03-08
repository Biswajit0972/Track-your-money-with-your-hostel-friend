import React from 'react'

const Button = ({children, className, onclick})  => {
  return (
    <button className={`${className} btn`} onClick={onclick}>{children}</button>
  )
}

export default Button