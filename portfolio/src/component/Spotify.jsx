
import Macbook from './Macbook'

const Spotify = ({onfocus,zindex}) => {
  return (
    <>
    <Macbook posx={860} posy={150} aloo={"spotify"} width={400} height={350} onfocus={onfocus} zindex={zindex}>
<section className='h-full w-full '>
<iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/album/4gCNyS7pidfK3rKWhB3JOY?utm_source=generator&theme=0" width="100%" height="1100"  allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" ></iframe>
</section>

    </Macbook>
    </>
  )
}

export default Spotify