import React, { useContext, useEffect, useState } from 'react'
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
  <img src="https://scontent-del3-1.cdninstagram.com/v/t51.82787-15/521216683_18071473001487223_1317937346537791099_n.webp?_nc_cat=102&ig_cache_key=MzY4MDIwNzUyMDE5MjA0NDIyMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=lvrpgTFYjpUQ7kNvwGLYMpV&_nc_oc=Adkj3sY_6s0zSuL5r0t5ShkcBt7osvjfRdXdyIJ9MBP1rWKSo5NsmuBTNG-NF53UqoY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-del3-1.cdninstagram.com&_nc_gid=oTI5Vddt0CjLSqEiAfm5yw&oh=00_Afs28D36i0haImgE8OGSCvMyEMMyO0u350wtDcx8F6JGEA&oe=69883CB1" alt="" className='h-full pointer-events-none w-full mb-3' />
    <Syntax style={atelierDuneDark} language='typescript' >
    {name}

    </Syntax>
</section>
    </Macbook>
    </>
  )
}

export default Note