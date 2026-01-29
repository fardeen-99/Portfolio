import React, { useEffect, useState } from 'react'
import Macbook from './Macbook'

const Gallery = ({setactive,onfocus,zindex}) => {


    const array=["/v2.mp4","/cat.mp4","/videoplayback.mp4","/pinterest.mp4","/sbcfinal.mp4","worldcup.mp4","/camel.mp4","/car1.mp4","/marvel.mp4","/salman.mp4","/asthetic.mp4","/bmw.mp4","/m2.mp4","/dhoni.mp4"]

    const[save,setsave]=useState("")

const saver=(ele)=>{
    if(save!==ele){
        setsave(ele)
        setactive(ele)

    }

  
   console.log(ele);
   
}

useEffect(()=>{
    console.log(save);
    
 localStorage.setItem("videosave",JSON.stringify(save)) 

},[save])

  return (
    <Macbook posx={300} posy={200} width={500} onfocus={onfocus} zindex={zindex} aloo={"Live wallpaper"}                     app={"gallery"}>
<section className=' grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]  gap-6 m-6'>
{
    array.map((ele,index)=>{
        return(
            <div key={index} className=''>

            <video  src={ele} loop muted autoPlay className='rounded-xl cursor-pointer z-[999] active:scale-95 hover:border-2 border-dotted border-white' onClick={()=>saver(ele)}></video>
            </div>
        )
    })
}


</section>
    </Macbook>
  )
}

export default Gallery