import { useRef, useState } from "react"
import "./App.scss"
import Footer from "./component/Footer"
import Github from "./component/Github"
import Navbar from "./component/Navbar"
import Note from "./component/Note"
import Resume from "./component/Resume"
import Spotify from "./component/Spotify"
import Cli from "./component/Cli"
import Calender from "./component/Calender"
import Mobile from "./component/Mobile"

const App=()=>{
const [open, setopen] = useState({
  github:{window:false,z:1},
  notes:{window:false,z:1},
  pdf:{window:false,z:1},
  calender:{window:false,z:1},
  spotify:{window:false,z:1},
  mail:{window:false,z:1},
  linkdln:{window:false,z:1},
  cli:{window:false,z:1},
})



const [zindex, setzindex] = useState(10)

const focuswindow=(key)=>{
setzindex(prev=>prev+1)


setopen((prev)=>(
  {...prev,[key]:{window:true,z:zindex+1}}
))

}

console.log(open.github);


  return(
    <>
    <main  >

      <video src="/cat.mp4" className=" fixed h-full w-full inset-0 object-fill   " muted autoPlay loop></video>
      <div className="md:hidden">
      <video src="/k2.mp4" className=" fixed h-full w-full inset-0  object-fill " muted autoPlay loop></video>
      </div>
   <Navbar/>
   <Footer setopen={setopen} open={open} />
   <div className="hidden md:block" >

{open.github.window && <Github  zindex={open.github.z} onfocus={()=>focuswindow("github")} />}
{open.notes.window && <Note zindex={open.notes.z} onfocus={()=>focuswindow("notes")} />}
   {open.pdf.window && <Resume zindex={open.pdf.z} onfocus={()=>focuswindow("pdf")} /> }
   {open.spotify.window && <Spotify zindex={open.spotify.z} onfocus={()=>focuswindow("spotify")} />}
   {open.cli.window && <Cli zindex={open.cli.z} onfocus={()=>focuswindow("cli")} />
  }
{open.calender.window && <Calender zindex={open.calender.z} onfocus={()=>focuswindow("calender")} />
}

</div>
<div className=" md:hidden">
 <Mobile />
</div>
    </main>
    </>
  )
}
export default App