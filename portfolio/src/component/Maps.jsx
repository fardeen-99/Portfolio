import React, { memo } from "react"
import Macbook from "./Macbook"

const Maps = ({ onfocus, zindex }) => {
  return (
    <Macbook
      onfocus={onfocus}
      zindex={zindex}
      posx={100}
      posy={150}
      app={"map"}
      aloo={"MAP"}
      width={400}
    >
      <section className="w-full h-full rounded-xl overflow-hidden">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Delhi,India&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </Macbook>
  )
}

export default memo( Maps)
