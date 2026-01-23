import React from 'react'
import Macbook from './Macbook'

const Resume = ({onfocus,zindex}) => {
  return (
<Macbook posy={50} posx={50} aloo={"PDF"} onfocus={onfocus} zindex={zindex}>
    <section className='h-full w-full pdf-frame '>
        <iframe src='/public/resume.pdf'  className='h-full w-full overflow-hidden ' />
    </section>

</Macbook>

  )
}

export default Resume