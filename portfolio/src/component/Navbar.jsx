import React, { useEffect, useState } from 'react'
const Navbar = () => {

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
      <nav className='flex justify-between  px-3 py-1 mac-dock text-white z-50 fixed  w-full'>
        <div className='flex gap-3 capitalize'>
          <img src="/public/icons/apple.svg" alt="appe" />
          <p className="text-sm " >fardeen khan</p>
          <p className="text-sm hidden md:block" >file</p>
          <p className="text-sm hidden md:block" >Window</p>
          <p className="text-sm hidden md:block" >Terminal</p>
        </div>

        <div className='flex gap-2'>
          <img src="/public/icons/wifi.svg" alt="wifi" />
          <p className='text-sm capitalize'>{date.replace(/,/g, "")}</p>
        </div>


      </nav>
    </>
  )
}

export default Navbar