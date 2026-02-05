import React, { createContext, useEffect, useState } from 'react'



export const Context=createContext()

export const Contextprovider=({children})=>{


const [open, setopen] = useState({
  github:{window:false,z:1,full:false},
  notes:{window:false,z:1,full:false},
  pdf:{window:false,z:1,full:false},
  calender:{window:false,z:1,full:false},
  spotify:{window:false,z:1,full:false},
  mail:{window:false,z:1,full:false},
  linkdln:{window:false,z:1,full:false},
  cli:{window:false,z:1,full:false},
  gallery:{window:false,z:1,full:false},
  calculator:{window:false,z:1,full:false},
  map:{window:false,z:1,full:false},
  google:{window:false,z:1,full:true}
})

const defaulter = {
  github:{window:false,z:1,full:false},
  notes:{window:false,z:1,full:false},
  pdf:{window:false,z:1,full:false},
  calender:{window:false,z:1,full:false},
  spotify:{window:false,z:1,full:false},
  mail:{window:false,z:1,full:false},
  linkdln:{window:false,z:1,full:false},
  cli:{window:false,z:1,full:false},
  gallery:{window:false,z:1,full:false},
  calculator:{window:false,z:1,full:false},
  map:{window:false,z:1,full:false},
    google:{window:false,z:1,full:false}

}

const [zindex, setzindex] = useState(10)

const focuswindow = (key) => {
  setzindex(prevZ => {
    const newZ = prevZ + 1

    setopen(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        window: true,
        z: newZ
      }
    }))

    return newZ
  })
}
const[player,setplayer]=useState(false)
const [opening, setopening] = useState(false)
const [pop, setpop] = useState(true)


const [count, setcount] = useState(0)
    return (
<Context.Provider value={{open,setcount,count,setopen,focuswindow,zindex,setplayer,player,defaulter,opening,setopening,pop,setpop}}>
    {children}
</Context.Provider>

    )
}




