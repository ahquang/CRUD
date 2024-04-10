import React from 'react'
import '../../styles/components/_pagebar.scss'

const PageBar = ({children}) => {
  return (
    <div className="page-bar">
          {children}
    </div>
  )
}

export default PageBar