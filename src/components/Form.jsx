import React from 'react'

const Form = ({children, onsubmit}) => {
  return (
    <form className='w-full relative flex-col gap-3 p-2 card-bg rounded-md' onSubmit={onsubmit}>{children}</form>
  )
}

export default Form