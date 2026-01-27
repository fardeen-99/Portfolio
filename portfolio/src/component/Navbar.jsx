import React, { useEffect, useState } from 'react'
const Navbar = ({open,setopen}) => {

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


  return (
    <>
      <nav className='flex justify-between  px-3 py-1 mac-dock text-white  fixed  w-full'>
        <div className='flex  capitalize'>
          <img src="/apple.svg" alt="appe" />
          <p className="text-sm px-2 " >fardeen khan</p>
          <p className="text-sm hidden md:block phover" >file</p>
          <p className="text-sm hidden md:block phover" >Window</p>
          <p className="text-sm hidden md:block phover"
          
          onClick={()=>{

     setopen((prev)=>({...prev,cli:{...prev.cli,window:!prev.cli.window}}))

          }}
          
          >Terminal</p>
        </div>

        <div className='flex gap-2'>
          <img src="/wifi.svg" alt="wifi" />
          <p className='text-sm capitalize'>{date.replace(/,/g, "")}</p>
        </div>


        
      </nav>
    </>
  )
}

export default Navbar