import React, { memo, useContext } from 'react'
import Macbook from './Macbook'
import logo from '../assets/search.json'
import { Context } from '../Context'

const Window = ({onfocus,zindex}) => {
    
    const {setopen}=useContext(Context)
  return (
<>
 <Macbook app={"window"} posx={60} posy={50} aloo={"window"}  onfocus={onfocus} zindex={999}>
<section className='grid grid-cols-3 gap-3 items-center justify-center p-2 '>

    {
        logo.map((ele)=>{
            return(
ele.name==="Github"?<div key={ele.id}

 onClick={()=>{setopen(prev=>({...prev,[ele.name.toLowerCase()]:{...prev[ele.name.toLowerCase()],window:true}}))
           setopen(prev=>({...prev,window:{...prev[window],window:false}}))
            }
            }
>
                <img src="/github.svg" alt="" className=' p-1.5  h-full w-full rounded bg-black' />

</div>:
                <div key={ele.id} className=''
                onClick={()=>{setopen(prev=>({...prev,[ele.name.toLowerCase()]:{...prev[ele.name.toLowerCase()],window:true}}))
           setopen(prev=>({...prev,window:{...prev[window],window:false}}))
            }
            }
                >
                <img src={ele.src} alt="" className='h-full w-full rounded' />
            </div>
            )
        })
    }

</section>
</Macbook>

</>

)
}

export default memo( Window)