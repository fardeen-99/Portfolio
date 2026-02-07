import React, { memo, useContext, useEffect, useState } from 'react'
import { Context } from '../Context'
import { Rnd } from "react-rnd"
const Folder = () => {


const{pop,setpop,count,setcount,setopen}=useContext(Context)
const [folder, setfolder] = useState([])
useEffect(()=>{
    if(count===6) {
        setcount(0)
        setfolder([])
        return
    }
if(count===0){
    return
}
    // const size=Math.floor((Math.random()*150)+count)
    const newFolder=(
 <Rnd
 
 default={{
  x:25,
  y:100*(count/1.5),
  height:70,
  width:70
  
 }}
 style={{cursor:"grab"}}
 >

<div className="z-[999] h-13">
  <div className="relative h-full"
  onDoubleClick={()=>setopen((prev)=>({...prev,"folder":{...prev["folder"],window:true}}))}
  
  >
  <img src="/folder.svg" alt="" className="h-full pointer-events-none"/>
<p className=" absolute bottom-0 left-1.5 text-white uppercase text-[10px] font-lg translate-y-3">{"folder "+count}</p>
  </div>
</div>
 
 </Rnd>
    )

    setfolder((prev)=>[...prev,newFolder])
  
},[count])

console.log(count)




  return (
     <div className='h-full w-full overflow-hidden'>

{folder}
 </div>
  )
}

export default memo( Folder)