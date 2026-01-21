import React from 'react'
import Macbook from './Macbook'

const Resume = () => {
  return (
<Macbook posy={100} posx={700} aloo={"PDF"}>
    <section className='h-full w-full pdf-frame '>
        <iframe src='/resume.pdf'  className='h-full w-full ' />
    </section>

</Macbook>

  )
}

export default Resume