import React from 'react'
import Macbook from './Macbook'

const Google = ({onfocus,zindex}) => {
  return (
    <>
    <Macbook posx={300} posy={120} width={500} height={400} onfocus={onfocus} zindex={zindex} app={"google"} aloo={"GOOGLE"}>
<section className='h-full w-full'>
        <iframe
        src="https://www.google.com/webhp?igu=1"
        className="w-full h-full border-none"
        title="Google Search"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-popups-to-escape-sandbox allow-top-navigation"
        allow="geolocation; microphone; camera"
      />
</section>

    </Macbook>
    </>
  )
}

export default Google