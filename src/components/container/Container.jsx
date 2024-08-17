import React from 'react'

function Container({className, children}) {
  return (
    <div className={`${className}`}>
    {children}
    </div>
  )
}

export default Container