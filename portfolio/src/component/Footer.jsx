

const Footer = () => {
  return (
   <>
   <footer className=' flex gap-2  absolute bottom-5 left-[50%] transform translate-x-[-50%] px-4 py-1 bg-[#292828] rounded-xl backdrop-blur-xl' >
    <img className='px-3 py-2 rounded-xl git hover:scale-[1.25] hover:-translate-y-[20%] transition-transform duration-200 icon' src="/src/icons/github.svg" alt="" />
    <img className='px-3 py-2 rounded-xl note hover:scale-[1.25] hover:-translate-y-[20%] transition-transform duration-200 icon' src="/src/icons/note.svg" alt="" />
    <img className='px-3 py-2 rounded-xl pdf hover:scale-[1.25] hover:-translate-y-[20%] transition-transform duration-200 icon' src="/src/icons/pdf.svg" alt="" />
    <img className='px-3 py-2 rounded-xl calen hover:scale-[1.25] hover:-translate-y-[20%] transition-transform duration-200 icon' src="/src/icons/calender.svg" alt="" />
    <img className='px-3 py-2 rounded-xl spot hover:scale-[1.25] hover:-translate-y-[20%] transition-transform duration-200 icon' src="/src/icons/spotify.svg" alt="" />
    <img className='px-3 py-2 rounded-xl mail hover:scale-[1.25] hover:-translate-y-[20%] transition-transform duration-200 icon' src="/src/icons/mail.svg" alt="" />
    <img className='px-3 py-2 rounded-xl link hover:scale-[1.25] hover:-translate-y-[20%] transition-transform duration-200 icon' src="/src/icons/link.svg" alt="" />
    <img className='px-3 py-2 rounded-xl cli hover:scale-[1.25] hover:-translate-y-[20%] transition-transform duration-200 icon' src="/src/icons/cli.svg" alt="" />
   </footer>
   </>
  )             
}

export default Footer