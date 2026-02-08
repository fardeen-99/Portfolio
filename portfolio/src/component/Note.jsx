import React, { memo, useContext, useEffect, useState } from 'react'
import Macbook from './Macbook'
import Markdown from "react-markdown"
import Syntax from "react-syntax-highlighter"
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Context } from '../Context'
const Note = ({onfocus,zindex}) => {

const [name, setname] = useState(null)
useEffect(()=>{
fetch("/note.txt").then((note)=>note.text()).then((data)=>setname(data))
},[])
const{open}=useContext(Context)

  return (
    <>
    <Macbook posx={70} app={"notes"} posy={30} aloo={"NOTES"} onfocus={onfocus} zindex={zindex}>
<section style={{fontSize:open.notes.full?"16px":"10px"}} className='text-zinc-300  overflow-x-hidden bg-transparent m-4 '>
  <img src="/fardeen.jpeg" alt="" className='h-full pointer-events-none w-full mb-3' />
    <Syntax style={atelierDuneDark} language='typescript' >
    {name}

    </Syntax>
</section>
    </Macbook>
    </>
  )
}

export default memo( Note)