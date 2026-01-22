import React from 'react'
import Macbook from './Macbook'

const Calender = () => {
  return (
  <Macbook height={350} width={350} posx={300} posy={200} aloo={"calender"}>
    <section className='h-full'>
        <iframe
  src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Asia%2FKolkata"
  style={{border:0}}
  width="100%"
  height="100%"
  frameborder="0"
  
></iframe>

    </section>
  </Macbook>
  )
}

export default Calender