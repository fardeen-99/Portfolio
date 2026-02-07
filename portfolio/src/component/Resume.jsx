import React, { memo } from 'react'
import Macbook from './Macbook'

const Resume = ({onfocus,zindex}) => {
  return (
<Macbook posy={50} posx={850} app="pdf" aloo="PDF" onfocus={onfocus} zindex={zindex}>
  <section className="h-full w-full overflow-hidden">
    <iframe
      src="/autoCV.pdf"
      className="h-full w-full"
    />
  </section>
</Macbook>


  )
}

export default memo( Resume)


