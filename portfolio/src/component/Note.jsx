import React, { useEffect, useState } from 'react'
import Macbook from './Macbook'
import Markdown from "react-markdown"
import Syntax from "react-syntax-highlighter"
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
const Note = ({onfocus,zindex}) => {

const [name, setname] = useState(null)
useEffect(()=>{
fetch("/note.txt").then((note)=>note.text()).then((data)=>setname(data))
},[])


  return (
    <>
    <Macbook posx={70} app={"notes"} posy={30} aloo={"NOTES"} onfocus={onfocus} zindex={zindex}>
<section className='text-zinc-300 text-[10px] overflow-x-hidden bg-transparent m-4'>
    <Syntax style={atelierDuneDark} language='typescript' >
    {name}

    </Syntax>
</section>
    </Macbook>
    </>
  )
}

export default Note