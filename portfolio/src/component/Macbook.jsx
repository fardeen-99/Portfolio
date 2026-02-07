
import { memo, useContext, useEffect, useState } from "react"
import {Rnd} from "react-rnd"
import { Context } from "../Context"

const Macbook = ({children,aloo,posx,posy,width=300,height=300,zindex=1,onfocus,app}) => {

 const{setopen,open}=useContext(Context)
  

  const [pos, setpos] = useState({x:posx,y:posy})
  const [size, setsize] = useState({height,width})


  const [mounted, setMounted] = useState(false)

useEffect(() => {
  setMounted(true)
}, [])

  return (
    <>
    
    <Rnd 
  //    default={{
  //   x: posx,
  //   y: posy,
  //   // width: width,
  //   // height: height,


    
  // }}
  size={open[app].full?{height:"100vh",width:"100vw"}:size}
  position={open[app].full?{x:0,y:0}:pos}
  
onDragStop={(e,d)=>{
 setpos( {x:d.x,y:d.y})  //if we dont use default jo ki boht easy hai tou humey apne hath mein matlb iss rnd package ko control krne ke liye yedragstop usekrna pdhta hai zaroori hai taki hum x,y nikal ske d ka mtlb direction hai dx-xdirection d.y mtlb y direction
}}


onResizeStop={(e, direction, ref, delta, pos)=>{
setsize({height:ref.offsetHeight,
  width:ref.offsetWidth
})
setpos(pos)
}}
disableDragging={open[app].full}
enableResizing={!open[app].full}
 style={{
  zIndex: open[app].full ? 999 : zindex,
  transition: "opacity 0.25s ease",
  transform: mounted
    ? open[app].full
      ? "scale(1)"
      : "scale(1)"
    : "scale(0.85)",
  opacity: mounted ? 1 : 0,
}}

  onMouseDown={onfocus}
  onDragStart={onfocus}
    minWidth={250}
  minHeight={300}
  >
             <div className="bg-black rounded-xl w-full h-full flex flex-col overflow-hidden ">

        {/* Title bar */}
        <nav className="flex items-center gap-1 px-4 py-2 border-b cursor-grab border-zinc-800">
          <span className="h-3 w-3 hover:scale-110 rounded-full cursor-pointer active:scale-90 bg-red-500" 
          onClick={()=>{
            setopen(prev=>({...prev,[app]:{...prev[app],window:false,full:false}}))
          }}
          
          />
          <span className="h-3 w-3 rounded-full cursor-pointer active:scale-90 bg-yellow-400"

onClick={()=>setopen((prev)=>({...prev,[app]:{...prev[app],window:false}}))}

          />
          <span className="h-3 w-3 rounded-full cursor-pointer active:scale-90 hover:scale-115 bg-green-500"
                                onClick={()=>setopen((prev)=>({...prev,[app]:{...prev[app],full:!prev[app].full}}))}
          />
          <p className="text-zinc-300 text-sm ml-2  text-[11px]">
            Fardeen Khan - <span className="uppercase text-[10px]"> {aloo} </span>
          </p>            
        </nav>

        {/* Content */}
        <div className="flex-1 w-full overflow-y-auto cursor-pointer ">

{children}
              
        </div>
      </div>
    </Rnd>
    </>
  )
}

export default memo(Macbook)