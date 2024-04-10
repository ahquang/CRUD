import React from 'react'
import '../../styles/components/_mybutton.scss'

const MyButton = ({ onClick, className, children}) => {
  return (
    <button onClick={onClick} className={className} type='submit'>
        {children}
    </button>
  )
}

export default MyButton