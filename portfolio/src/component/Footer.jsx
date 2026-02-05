import { memo, useContext, useEffect, useRef, useState } from "react"
import { FaPlay } from "react-icons/fa";

import { IoMdPause } from "react-icons/io";
import Textpopup from "./Textpopup";
import { Context } from "../Context";


const Footer = ({setopen,open}) => {
const[auto,setauto]=useState(false)
  const refu=useRef()

  const{player,setplayer,defaulter,setzindex}=useContext(Context)
  
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
const chalega=()=>{
  setplayer((prev)=>!prev)
}
  useEffect(()=>{

const chalao=(e)=>{

 // 👇 check karo user typing kar raha hai ya nahi
    const tag = e.target.tagName.toLowerCase()
    const isTyping =
      tag === "input" ||
      tag === "textarea" ||
      e.target.isContentEditable

    if (isTyping) return   // ❌ shortcut disable while typing

  if(e.code==="Space"){
  e.preventDefault()
  
  chalega()
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
      // wasPlayingRef.current = !refu.current.paused

      // refu.current.pause()
      // setauto(false)
      setplayer(false)
    // } else {
    //   // resume ONLY if it was playing before
    //   if (!player) {
    //     // refu.current.play()
    //     // setauto(true)
    //     setplayer(true)
    //   }
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


  
  //   const goFullscreen = () => {
  //   const elem = document.documentElement; // poora page
  
  //   if (elem.requestFullscreen) {
  //     elem.requestFullscreen();
  //   }
  // };

  return (
    <>
    {/* <audio src="/audio.mp4" ref={refu} loop></audio> */}
      <footer className='mac-dock flex gap-2 z-50 items-center justify-center  absolute bottom-5 left-[50%] transform translate-x-[-50%] px-2 sm:px-4 py-1 rounded-xl   w-[90%] overflow-x-auto sm:overflow-x-visible  no-scrollbar' >
        {/* <button onClick={goFullscreen} >
  Full Screen
</button> */}
<Textpopup text={"Github"}>

        <img className='px-3 py-2.5 rounded-xl git lg:hover:scale-[1.25] lg:hover:-translate-y-[20%] transition-transform duration-200 icon relative' src="/github.svg" alt=""
        
        
        onClick={()=>setopen(prev=>({...prev,github:{...prev.github,window:!prev.github.window}}))}
        />
        
        </Textpopup>
    
       <Textpopup text={"Notes"}>

        <img
                onClick={()=>setopen(prev=>({...prev,notes:{...prev.notes,window:!prev.notes.window}}))}
                
                className='px-3 py-2 rounded-xl note lg:hover:scale-[1.25] lg:hover:-translate-y-[20%] transition-transform duration-200 icon' src="/note.svg" alt="" />
        </Textpopup>
<Textpopup text={"Music"}>
        <div

        onClick={chalega}
        className="h-[53px] md:px-3.5 flex justify-center items-center rounded-xl cli lg:hover:scale-[1.25] lg:hover:-translate-y-[20%] transition-transform duration-200 icon text-amber-50 music"
        >
          <div className="hidden md:block">

          {player ?<img src="https://img.icons8.com/?size=30&id=xErxpbkwhtZv&format=png" alt="" /> : <img src="https://img.icons8.com/?size=30&id=6ttPxGphzG67&format=png" alt="" />  }
          </div>

          <div className="md:hidden mt-1.5">
          {auto ?<IoMdPause className=" text-xl font-extrabold text-blue-100" />
: <FaPlay className=" text-xl font-extrabold text-blue-100" />
}

          </div>

        </div>
</Textpopup>


<Textpopup text={"PDF"}>
        <img
                onClick={()=>setopen(prev=>({...prev,pdf:{...prev.pdf,window:!prev.pdf.window}}))}

        className='px-3 py-[9px] rounded-xl pdf lg:hover:scale-[1.25] lg:hover:-translate-y-[20%] transition-transform duration-200 icon' src="/pdf.svg" alt="" />
</Textpopup>

<Textpopup text={"Calendar"}>
        <img
                onClick={()=>setopen(prev=>({...prev,calender:{...prev.calender,window:!prev.calender.window}}))}
        className='px-4 py-[11px] rounded-xl calen lg:hover:scale-[1.25] lg:hover:-translate-y-[20%] transition-transform duration-200 icon' src="/calender.svg" alt="" />
</Textpopup>
<Textpopup text={"Calculator"}>
  <img src="https://cdn.jim-nielsen.com/macos/512/calculator-2025-11-13.png?rf=1024" alt=""
  onClick={()=>setopen(prev=>({...prev,calculator:{...prev.calculator,window:!prev.calculator.window}}))}
  className="h-13 bg-[#dad0d0] rounded-xl hover:-translate-y-[20%] hover:scale-[1.25] transition-transform duration-200 icon" 

  />
  
</Textpopup>
<Textpopup text={"Spotify"}>
        <img
                        onClick={()=>setopen(prev=>({...prev,spotify:{...prev.spotify,window:!prev.spotify.window}}))}
        className='px-3 py-[9px] rounded-xl spot lg:hover:scale-[1.25] lg:hover:-translate-y-[20%] transition-transform duration-200 icon' src="/spotify.svg" alt="" />
</Textpopup>
<Textpopup text={"Google"}>
<img src="https://www.google.com/favicon.ico" 
onClick={()=>setopen(prev=>({...prev,google:{...prev.google,window:!prev.google.window,full:true}}))}
className=" bg-white p-1 h-13 rounded-xl hover:-translate-y-[20%] hover:scale-[1.25] transition-transform duration-200 icon" alt="" />

</Textpopup>
<Textpopup text={"Mail"}>
        <img
         className='px-2.5 py-[7px] rounded-xl mail lg:hover:scale-[1.25] lg:hover:-translate-y-[20%] transition-transform duration-200 icon' src="/mail.svg" alt=""
        onClick={()=>{
          window.open("https://mail.google.com/mail/?view=cm&fs=1&to=fardeenkhan63574@gmail.com","_blank")


        }} />
</Textpopup>
<Textpopup text={"Maps"}>
  <img src="https://img.icons8.com/?size=60&id=wMWhDma1XrM8&format=png" alt=""
  onClick={()=>setopen(prev=>({...prev,map:{...prev.map,window:!prev.map.window}}))}
  className="  rounded-xl hover:-translate-y-[20%] hover:scale-[1.25] transition-transform duration-200 icon" 

  />
  
</Textpopup>
<Textpopup text={"LinkedIn"}>
        <img className='px-2 py-2 h-13 w-15 object-cover rounded-xl link lg:hover:scale-[1.25] lg:hover:-translate-y-[20%] transition-transform duration-200 icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAYFBMVEUAfrv///8AdrebvtsAeLgAfLoAcrV4qtDX5PBamsj1+fzw9vrZ6fKox+BGjsIAerkQgr1Vk8WCr9RAksXC1+kAbbSOttfj7/az0OVlncpupc4mhr8pgr1mos280ubP4O1OPelOAAADqUlEQVR4nO2c3XLyIBCGCQHyZ0LzY9So9f7v8ktStYlh2yLfsHvAe9DpTBn7ZFmWZYnLoqfytEzaD4agjzYp0/ybhD1/K2uphJQYUFIKJetyA9VJhcKzIFOyW0M1HBlpxuLNAirPFDbQl1SWP6EygU3zkMgeUA0RO01SzRdUx7FJluLdDIUTBiBJOUGVhCZvkiojltekDDWaqs5ZSoxppEoZtdmb5o8lZGLUQyJhLb3pa9kHPSiU9CnImwTnXGhsioUk37Ohj/vkvKeQA87i5+Zwz0+LuKKRSqjhgTRj9dg5PJumrovWSs/osZ8fo1elF2RbqVc7TdoJVCp+MjBFUYyZUcjzwQiVZ4imehwKNyoRA8PebKhRiFAaYooytB1HXEGoGM1UvAehPtHWH49BqC5ALSUSEAovJugWhErwYoLKISiGF9JVCTCliJufrgFToR6nudlUN+TcpTBBVbjHGl0bqNBrIXzrVojh4CFxWWfEuxqfaa7/755IRc+w5+4uodr4lu7SW5kp3HW3kuZKM6k4pWLCLDomCgqiKi2mUuAoNf3QBBaN5Lxuyu4wbVj5IT32Q6VctgU5PuJW+vcx30M0l336sq0Xt569HfTE9bAz6HP5nLpODUNu1f3PqtpWuGYdszdrgsB5ZpUN68yUnhbV/B+FLsE8Pz9e3jLWX6DkD1DqBJZI5kHDO7m+I5ToQTPd9U5Nwg1KQIehhUr7tMMFSgvAw9c6Wru7CxR4aHxRb+tXDlAXuI70osEyl3WAMteVTSosJ9ABynhgNMuyhPM+lI3ugZYW1LgCCUJFVl7lC6q38SpfUDebqOALysrVfUFFV/9Qxa9RyyZU/QeoQzyc6qo+NT9uz7u9R6iu3XOtpRzzeMXjHwZ6hGrEYllJdYJn0eJlGzeovH6J1PwC8lvc1blBDRvvBa9ao8ET1NHgJ8bb+0nN35efC5QxIILXPRYbjQuUOfSo1AxlcaxxgWqNXgLdIfqBKsyRR5/Mj+AHCkjcoPcv/EA1QDbCd6bRnqCgaAh4uh8o6P1oIFJ5gcqhtE2ZswUvUGAuCZzmA1SAClABKkAFqAAVoAJUgApQASpABagAFaACVIAKUAEqQFlCwdVhZyhdxSatbhOkcUwPfS9YXI0fafMtRs1NWt9wSOMY8EUD80eSe/0+yF0kG4OQbKGC/gWrjURCsy0PyQZGJFs9kWyKRa19mJZ0G62RbElHs3kfzTaHJBtCRjRbZ0Ykm4xGlNqx/gORGEidkHxQAwAAAABJRU5ErkJggg==" alt="" onClick={()=>{
        window.open("https://www.linkedin.com/in/mohd-fardeen-b31307358",'_blank')
                  
        }} />
</Textpopup>
<Textpopup text={"CLI"}>
        <img
        onClick={()=>setopen(prev=>({...prev,cli:{...prev.cli,window:!prev.cli.window}}))}
        className='px-3 py-[10px] rounded-xl cli lg:hover:scale-[1.25] lg:hover:-translate-y-[20%] transition-transform duration-200 icon' src="/cli.svg" alt="" />
  </Textpopup>


<Textpopup text={"Gallery"}>
<img src="/gallery.png" 
onClick={()=>{
  setopen(prev=>({...prev,gallery:{...prev.gallery,window:!prev.gallery.window,z:20}}))

}
}

className="h-13 bg-stone-200 rounded-xl hover:-translate-y-[20%] hover:scale-[1.25] transition-transform duration-200 icon" alt="" />

</Textpopup>

<Textpopup text={"Bin"}>
  <img src="https://files.softicons.com/download/system-icons/iwindows-icons-by-wallec/png/128x128/Recycle%20Bin.png" 
// onClick={() =>
//   setopen(prev =>
//     Object.fromEntries(  // ye key value pair ka array bnata hai //.keys() --> sri keys lekr unka aaray bnadeta hai
//       Object.keys(prev).map(key => [key, { ...prev[key], window: false }])
//     )
//   )
// }
onClick={()=>setopen(defaulter)}

className="p-2 h-13 bin rounded-xl hover:-translate-y-[20%] hover:scale-[1.25] transition-transform duration-200 icon" alt="" />


</Textpopup>

      </footer>
    </>
  )
}

export default Footer