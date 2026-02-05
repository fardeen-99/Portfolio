import React, { useContext, useState } from 'react'
import Searchicon from '../assets/search.json'
import { Context } from '../Context'
const Search = ({opening}) => {

const [search, setsearch] = useState("")
const [data, setdata] = useState(Searchicon)

const filteru=data.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))

console.log(filteru.length)


const{open,setopen,setopening,defaulter}=useContext(Context)

  return (
    <>
    <section
      className={`
        fixed top-[100px] right-19
        w-[420px] px-4 py-3 glass z-[9999]
        origin-bottom
        transition-all duration-300
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${opening
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-6 scale-95 pointer-events-none"}
      `}
    >
      <div className=' relative w-full '>

<input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} placeholder='Spotlight Search' className='outline-0 text-lg border-0 p-1 text-white w-full khisko' />
 <i className="ri-search-line text-white/40 absolute top-1.5 left-1" />
      </div>

<div className='max-h-80 no-scrollbar overflow-auto mt-2 duration-200 transition-all ease-linear'>
  {
    filteru.length >0?(
filteru.map((ele,i)=>{
  let app=ele.name.toLowerCase()
  return(
<div key={ele.id} className='flex gap-3 text-white font-semibold p-3 h-13  rounded-2xl  hover:bg-white/15'

onDoubleClick={()=>{
  app==="bin"?setopen(defaulter):setopen(prev=>({...prev,[app]:{...prev[app],window:true}}))
  setopening(false)

}}
>

  <img src={ele.src} alt="" className='rounded  ' />
  <p>{ele.name}</p>
</div>


  )
})
    ):(
      <div></div>
    )
  }
</div>
    </section>
    </>
  )
}

export default Search