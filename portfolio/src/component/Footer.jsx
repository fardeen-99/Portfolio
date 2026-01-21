import { useEffect, useRef, useState } from "react"


const Footer = () => {
const[auto,setauto]=useState(false)
  const refu=useRef()

  
  const setting=()=>{
   setauto(prev=>{
    if(prev){
      refu.current.pause()
      return false
    }else{
      refu.current.play()
      return true

    }
   })
  }

  useEffect(()=>{
const chalao=(e)=>{
  if(e.code==="Space"){
  e.preventDefault()
  
  setting()
  console.log(e);
}

}

document.addEventListener("keydown",chalao)
return()=>{
  document.removeEventListener("keydown",chalao)
}

},[])
const wasPlayingRef = useRef(false)
useEffect(() => {
  const handleVisibilityChange = () => {
    if (!refu.current) return

    if (document.hidden) {
      // remember state
      wasPlayingRef.current = !refu.current.paused

      refu.current.pause()
      setauto(false)
    } else {
      // resume ONLY if it was playing before
      if (wasPlayingRef.current) {
        refu.current.play()
        setauto(true)
      }
    }
  }

  document.addEventListener("visibilitychange", handleVisibilityChange)

  return () => {
    document.removeEventListener(
      "visibilitychange",
      handleVisibilityChange
    )
  }
}, [])


  
  return (
    <>
    <audio src="/audio.mp4" ref={refu} loop></audio>
      <footer className='mac-dock flex gap-2  absolute bottom-5 left-[50%] transform translate-x-[-50%] px-2 sm:px-4 py-1 rounded-xl sm:w-fit w-[90%] overflow-x-auto sm:overflow-x-visible  no-scrollbar' >
        <img className='px-3 py-2 rounded-xl git hover:scale-[1.25] hover:-translate-y-[20%] transition-transform duration-200 icon' src="/src/icons/github.svg" alt="" />
        <img className='px-3 py-2 rounded-xl note hover:scale-[1.25] hover:-translate-y-[20%] transition-transform duration-200 icon' src="/src/icons/note.svg" alt="" />
        <img className='px-3 py-2 rounded-xl pdf hover:scale-[1.25] hover:-translate-y-[20%] transition-transform duration-200 icon' src="/src/icons/pdf.svg" alt="" />
        <img className='px-3 py-2 rounded-xl calen hover:scale-[1.25] hover:-translate-y-[20%] transition-transform duration-200 icon' src="/src/icons/calender.svg" alt="" />
        <img className='px-3 py-2 rounded-xl spot hover:scale-[1.25] hover:-translate-y-[20%] transition-transform duration-200 icon' src="/src/icons/spotify.svg" alt="" />
        <img className='px-3 py-2 rounded-xl mail hover:scale-[1.25] hover:-translate-y-[20%] transition-transform duration-200 icon' src="/src/icons/mail.svg" alt="" />
        <img className='px-3 py-2 rounded-xl link hover:scale-[1.25] hover:-translate-y-[20%] transition-transform duration-200 icon' src="/src/icons/link.svg" alt="" />
        <img className='px-3 py-2 rounded-xl cli hover:scale-[1.25] hover:-translate-y-[20%] transition-transform duration-200 icon' src="/src/icons/cli.svg" alt="" />
         <button
        
          onClick={setting}
          className="px-3 py-2 rounded-xl cli hover:scale-[1.25] hover:-translate-y-[20%] transition-transform duration-200 icon text-amber-50"
        >
          {auto ? "⏸" : "▶"}
        </button>
      </footer>
    </>
  )
}

export default Footer