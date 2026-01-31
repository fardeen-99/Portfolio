import React from 'react'
import Macbook from './Macbook'
import Calc from './Calc'

const Calculator = ({onfocus,zindex}) => {
  return (
    <Macbook posx={550} height={450} width={320} posy={70} onfocus={onfocus} zindex={zindex} app={"calculator"} aloo={"Calcultor"}>
        <section className='h-full w-full cursor-pointer '>
<Calc/>


        </section>
    </Macbook>
  )
}

export default Calculator