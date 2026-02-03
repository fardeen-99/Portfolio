import React, { useContext, useEffect, useRef, useState } from 'react'
import Macbook from './Macbook'
import { Context } from '../Context'

const Gallery = ({setactive,onfocus,zindex}) => {


    const array=["/bmw.mp4","/cat.mp4","/worldcup.mp4","/pinterest.mp4","/sbcfinal.mp4","virat.mp4","/camel.mp4","/car1.mp4","/marvel.mp4","/salman.mp4","/asthetic.mp4","/v2.mp4","/m2.mp4","/dhoni.mp4"]

    const[save,setsave]=useState("")
    const{setopen,setplayer}=useContext(Context)

const saver=(ele)=>{
    if(save!==ele){
        setsave(ele)
        setactive(ele)

    }
    setopen(prev=>({...prev,"gallery":{...prev.gallery,window:false}}))
    setplayer(true)

  
   console.log(ele);
   
}

useEffect(()=>{
    console.log(save);
    
 localStorage.setItem("videosave",JSON.stringify(save)) 

},[save])


  return (
    <Macbook posx={680} posy={250} width={500} onfocus={onfocus} zindex={zindex} aloo={"Live wallpaper"}                     app={"gallery"}>
<section className=' grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]  gap-6 m-6'>
{
    array.map((ele,index)=>{
        return(
          

            <video  src={ele} key={index}  loop  className='rounded-xl cursor-pointer z-[999] active:scale-95 hover:border-2 border-dotted border-white transform hover:scale-110 transition duration-200 ease-in' onClick={()=>saver(ele)


            }
            onMouseEnter={(e) => {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play();
              setplayer(false)
            }}
            onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
                       setplayer(true)
            }}

            ></video>
           
        )
    })
}


</section>
    </Macbook>
  )
}

export default Gallery