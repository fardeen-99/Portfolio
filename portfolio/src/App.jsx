import { useRef } from "react"
import "./App.scss"
import Footer from "./component/Footer"
import Github from "./component/Github"
import Navbar from "./component/Navbar"
import Note from "./component/Note"
import Resume from "./component/Resume"

const App=()=>{
  const audioRef = useRef(null);


  return(
    <>
    <main  >

      <video src="/cat.mp4" className=" fixed h-full w-full inset-0 object-fill  " muted autoPlay loop></video>
      <div className="md:hidden">
      <video src="/k2.mp4" className=" fixed h-full w-full inset-0  object-fill " muted autoPlay loop></video>
      </div>
   <Navbar />
   <Footer />
   <Github />
   <Note />
<Resume />
    </main>
    </>
  )
}
export default App