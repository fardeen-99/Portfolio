import React, { memo, useContext, useEffect, useRef, useState } from 'react'
import Macbook from './Macbook'
import { Context } from '../Context'

const Filescreen = ({ onfocus, zindex }) => {
const{open}=useContext(Context)
  const textRef = useRef(null)
const [text, settext] = useState(JSON.parse(localStorage.getItem("text"))||"    ")
  const autoResize = (e) => {
    settext(e.target.value)

   
}
useEffect(()=>{
    localStorage.setItem("text",JSON.stringify(text))
},[open])
useEffect(() => {
  if (textRef.current) {
    textRef.current.style.height = "auto"
    textRef.current.style.height = textRef.current.scrollHeight + "px"
  }
}, [text])

  return (
    <Macbook aloo={"FolderScreen"} app={"folder"} posx={100} posy={200} onfocus={onfocus} zindex={zindex}>
      <section className='h-full w-full mb-7 '>
        <textarea
          ref={textRef}
          onChange={(e)=>autoResize(e)}
          value={text}
          
          placeholder="summarise your thoughts.."
          rows={1}
          className="p-4 font-semibold outline-none border-0 text-white bg-transparent w-full resize-none break-words overflow-hidden"
        />
      </section>
    </Macbook>
  )
}

export default memo(Filescreen)