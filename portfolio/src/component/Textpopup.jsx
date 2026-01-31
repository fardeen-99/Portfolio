import React from 'react'

const Textpopup = ({children,text}) => {
  return (
    <>
    <div className='relative group icon'>

    {children}
    <p className='absolute bottom-full left-1/2 -translate-x-1/2  mt-1  -translate-y-4  transition-all duration-200 font-bold opacity-0 scale-9 0 group-hover:opacity-100   group-hover:scale-100         group-hover:-translate-y-7 text-stone-200'>{text}</p>
    </div>
    </>
  )
}

export default Textpopup