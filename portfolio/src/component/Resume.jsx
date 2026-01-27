import React from 'react'
import Macbook from './Macbook'

const Resume = ({onfocus,zindex}) => {
  return (
<Macbook posy={50} posx={850} app="pdf" aloo="PDF" onfocus={onfocus} zindex={zindex}>
  <section className="h-full w-full overflow-hidden">
    <iframe
      src="/resume.pdf#toolbar=0"
      className="h-full w-full block"
    />
  </section>
</Macbook>


  )
}

export default Resume


