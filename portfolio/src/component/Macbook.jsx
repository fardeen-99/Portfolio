
import { useState } from "react"
import {Rnd} from "react-rnd"

const Macbook = ({children,aloo,posx,posy,width=300,height=300,zindex=1,onfocus}) => {

  
  return (
    <>
    
    <Rnd  default={{
    x: posx,
    y: posy,
    width: width,
    height: height,

    
  }}
  style={{zIndex:zindex}}
  onMouseDown={onfocus}
  onDragStart={onfocus}
    minWidth={250}
  minHeight={300}
  >
             <div className="bg-black rounded-xl w-full h-full flex flex-col overflow-hidden">

        {/* Title bar */}
        <nav className="flex items-center gap-1 px-4 py-2 border-b border-zinc-800">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <p className="text-zinc-300 text-sm ml-2  text-[11px]">
            Fardeen Khan - <span className="uppercase text-[10px]"> {aloo} </span>
          </p>            
        </nav>

        {/* Content */}
        <div className="flex-1 overflow-y-auto  ">

{children}
              
        </div>
      </div>
    </Rnd>
    </>
  )
}

export default Macbook