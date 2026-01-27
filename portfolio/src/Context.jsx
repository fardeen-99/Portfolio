import React, { createContext, useState } from 'react'



export const Context=createContext()

export const Contextprovider=({children})=>{


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


    return (
<Context.Provider value={{open,setopen,focuswindow,zindex}}>
    {children}
</Context.Provider>

    )
}




