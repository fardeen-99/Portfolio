import React from 'react'

const Screen = ({show,children}) => {
  return (
    <div className={`fixed inset-0 z-[999] flex justify-center items-center transition-opacity duration-1000 ease-in  ${show ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
{children}
    </div>
  )
}

export default Screen