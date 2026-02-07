import React, { memo, useContext, useEffect, useState } from 'react'
import { Context } from '../Context'
const Navbar = () => {


const{pop,setpop,count,setcount,setopen}=useContext(Context)

  const [date, setdate] = useState("")
  const getdate = () => {

let date=new Date()
let time=date.toLocaleString("en-US",{
weekday:'short',
month:'short',
day:'numeric',
hour:'numeric',
minute:'2-digit',
second:'2-digit',
hour12:true
    })
    setdate(time)

  }
  useEffect(() => {
    getdate()

    let timeInterval = setInterval(getdate, 1000)
    return () => {
      clearInterval(timeInterval)
    }
  }, [])

const [fullscreen, setFullscreen] = useState(false)

const toggleFullscreen = () => {
  setFullscreen(prev => !prev)
  const ele=document.documentElement
  if(!fullscreen){
    ele.requestFullscreen()
  }else{
    document.exitFullscreen()
  }
}

  return (
    <>
      <nav className='flex justify-between items-center  px-3 py-1 mac-dock text-white  fixed  w-full'>
        <div className='flex  capitalize'>
          <img src="/apple.svg" alt="appe" />
          <p className="text-sm px-2 " >fardeen khan</p>
          <p className="text-sm hidden md:block phover" 
          
          onClick={()=>{setcount(prev=>prev+1)
          }}
          >file</p>
          <p className="text-sm hidden md:block phover"
          onClick={()=>setopen(prev=>({...prev,window:{...prev["window"],window:!prev.window.window }   }))}
          
           >Window</p>
          <p className="text-sm hidden md:block phover"
          
          onClick={()=>{

     setopen((prev)=>({...prev,cli:{...prev.cli,window:!prev.cli.window}}))

          }}
          
          >Terminal</p>
        </div>



        <div className='flex gap-2 items-center justify-center '>
         
          <i
  onClick={toggleFullscreen}
  className={`${
    fullscreen ? "ri-fullscreen-exit-line" :  "ri-fullscreen-line" 
  } cursor-pointer text-sm transition-transform duration-200 active:scale-90 hover:scale-110 hidden md:block`}
/>     <div className=' hidden md:flex items-center justify-center gap-1 cursor-pointer active:scale-95' onClick={()=>alert("This Mac-OS is 100% Charged Just like your energy and hardwork")}>
           <img src="/battery.png" alt="" className='h-4'/>
          </div>
          <img src="/wifi.svg" alt="wifi" />
          <p className='text-sm capitalize poin pointer-events-none'>{date.replace(/,/g, "")}</p>
      
        </div>


        
      </nav>
    </>
  )
}

export default memo( Navbar)