import React, { useEffect, useState } from 'react'
import Macbook from './Macbook'
import Markdown from "react-markdown"
import Syntax from "react-syntax-highlighter"
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
const Note = () => {

const [name, setname] = useState(null)
useEffect(()=>{
fetch("/note.txt").then((note)=>note.text()).then((data)=>setname(data))
},[])


  return (
    <>
    <Macbook posx={300} posy={100} aloo={"NOTES"}>
<section className='text-zinc-300 text-[10px] overflow-x-hidden bg-transparent'>
    <Syntax style={atelierDuneDark} language='typescript' >
    {name}

    </Syntax>
</section>
    </Macbook>
    </>
  )
}

export default Note