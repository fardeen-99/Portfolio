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
import Calculator from "./component/Calculator"
import Maps from "./component/Maps"
import Google from "./component/Google"
import Search from "./component/Search"

import Folder from "./component/Folder"
import Filescreen from "./component/Filescreen"
import Window from "./component/Window"

const App=()=>{


  const [active, setactive] = useState(JSON.parse(localStorage.getItem("videosave"))||"/cat.mp4")

const{open,setopen,zindex,focuswindow,player,setplayer,opening,setopening}=useContext(Context)

const[phase,setphase]=useState("app")


// useEffect(()=>{
//   let timer;
// if(phase==="phase1"){

//   timer= setTimeout(() => {
//     setphase("phase2")
//   }, 4000);
// }
// if(phase==="phase2"){
//    timer=setTimeout(() => {
//     setphase("app")
//   }, 2000);
// }
// return()=>{
//   clearTimeout(timer)
// }
// },[phase])


  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.4; // 🔊 50% volume
    }
  }, [active]);


  return(
    <>
    <main className="relative" >

    <Search opening={opening} />
  

  



<div className=' gap-1.5 absolute top-13 w-7 hidden  md:flex hover:w-fit px-1.5 overflow-hidden right-20 transition-all  duration-200 ease-linear glass z-[999] cursor-pointer text-white bg-transparent backdrop-blur-2xl hover:px-6  rounded-xl py-1 hover:py-1  active:scale-95'
onClick={()=>setopening(!opening)}
>
    <i className="ri-search-line text-sm" />
  <p className='text-sm'>Search</p>
</div>
<Screen show={phase==="phase1"}>
    <Lottie/>
</Screen>

<Screen show={phase==="phase2"}>
  <FaceID/>
</Screen>

{phase==="app" && ( <div>


      <video src={active} ref={videoRef}className=" fixed h-full w-full inset-0 object-fill" muted={!player} autoPlay loop></video>
      <div className="md:hidden">
      <video src="/k2.mp4" className=" fixed h-full w-full inset-0  object-fill " muted autoPlay loop></video>
      </div>
   <Navbar open={open} setopen={setopen}/>

<Folder/>

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
  {open.calculator.window && <Calculator zindex={open.calculator.z} onfocus={()=>focuswindow("calculator")} />}
{ open.map.window && <Maps zindex={open.map.z} onfocus={()=>focuswindow("map")} /> 
}
{open.google.window && <Google  zindex={open.google.z} onfocus={()=>focuswindow("google")} /> }
  {open.folder.window && <Filescreen zindex={open.folder.z} onfocus={()=>focuswindow("folder")}/> }
{ open.window.window &&  <Window zindex={open.window.z} onfocus={()=>focuswindow("window")}/>
}</div>
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