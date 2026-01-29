import { useContext, useEffect, useRef, useState } from "react"
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
import Lottie from "./component/Lottie"
import FaceID from "./component/FaceID"
import Screen from "./component/Screen"
import { Context } from "./Context"
import Gallery from "./component/Gallery"

const App=()=>{


  const [active, setactive] = useState(JSON.parse(localStorage.getItem("videosave"))||"/cat.mp4")

const{open,setopen,zindex,focuswindow}=useContext(Context)

const[phase,setphase]=useState("phase1")


useEffect(()=>{
  let timer;
if(phase==="phase1"){

  timer= setTimeout(() => {
    setphase("phase2")
  }, 4000);
}
if(phase==="phase2"){
   timer=setTimeout(() => {
    setphase("app")
  }, 2000);
}
return()=>{
  clearTimeout(timer)
}
},[phase])

  return(
    <>
    <main  >


<Screen show={phase==="phase1"}>
    <Lottie/>
</Screen>

<Screen show={phase==="phase2"}>
  <FaceID/>
</Screen>

{phase==="app" && ( <div>


      <video src={active} className=" fixed h-full w-full inset-0 object-fill   " muted autoPlay loop></video>
      <div className="md:hidden">
      <video src="/k2.mp4" className=" fixed h-full w-full inset-0  object-fill " muted autoPlay loop></video>
      </div>
   <Navbar open={open} setopen={setopen}/>
   <Footer setopen={setopen} open={setopen} />

   <div className="hidden md:block" >

{open.github.window && <Github  zindex={open.github.z} onfocus={()=>focuswindow("github")}  />}
{open.notes.window && <Note zindex={open.notes.z} onfocus={()=>focuswindow("notes")} />}
   {open.pdf.window && <Resume zindex={open.pdf.z} onfocus={()=>focuswindow("pdf")} /> }
   {open.spotify.window && <Spotify zindex={open.spotify.z}  onfocus={()=>focuswindow("spotify")} />}
   {open.cli.window && <Cli zindex={open.cli.z} onfocus={()=>focuswindow("cli")} />
  }
{open.calender.window && <Calender zindex={open.calender.z} onfocus={()=>focuswindow("calender")} />
}
{open.gallery.window && <Gallery zindex={open.gallery.z} onfocus={()=>focuswindow("gallery")} setactive={setactive}/>}
</div>
<div className=" md:hidden">
 <Mobile />
</div>


</div>
)}
    </main>
    </>
  )
}
export default App