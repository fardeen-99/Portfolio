import React, { useEffect, useRef } from 'react'
import Macbook from './Macbook'
import Terminal from 'react-console-emulator'
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark'
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism'
const Cli = ({onfocus,zindex}) => {
const commands = {
  about: {
    description: 'About me',
    usage: 'about',
    fn: () => (
      <div className='text-green-400 mt-4 mb-4 whitespace-pre-wrap font-medium flex flex-col gap-2'>
        <p>I am a full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies.</p>
      </div>
    )
  },

  skills: {
    description: 'List technical skills',
    usage: 'skills',
    fn: () => (
      <div className='text-yellow-400 mt-4 mb-4 whitespace-pre-wrap font-medium flex flex-col gap-2'>
        {`Frontend: React, Vue.js, Vanilla JS, Sass, HTML/CSS
Backend: Node.js, Express, Python, Django
Databases: MongoDB, PostgreSQL, MySQL
Tools: Git, Docker, Webpack, Vite
Cloud: AWS, Azure, Heroku`.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    )
  },

  projects: {
    description: 'View my projects',
    usage: 'projects',
    fn: () => (
      <div className='text-purple-400 mt-4 mb-4 whitespace-pre-wrap font-medium flex flex-col gap-2'>
        {`1. Portfolio Website - React + Vite
2. E-commerce Platform - MERN Stack
3. Task Management App - Next.js
4. Real-time Chat App - Socket.io
5. Data Dashboard - React + Chart.js`.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    )
  },

  experience: {
    description: 'Display work experience',
    usage: 'experience',
    fn: () => (
      <div className='text-teal-500  mt-4 mb-4 whitespace-pre-wrap font-medium flex flex-col gap-2'>
        {`Frontend Engineering Experience (Self-Driven)

--Designed reusable React components and hooks used consistently across multiple projects.


--Optimized rendering performance by minimizing unnecessary re-renders and leveraging efficient state
management patterns.

--Integrated REST APIs with robust loading, error handling, and caching strategies.
--Built responsive and accessible UI layouts following modern frontend best practices Projects.`.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    )
  },

  contact: {
    description: 'Get contact information',
    usage: 'contact',
    fn: () => (
      <div className='text-blue-400 mt-4 mb-4 whitespace-pre-wrap font-medium flex flex-col gap-2'>
        <p>Email: fardeenkhan63574@gmail.com</p>
        <p>Phone: +91-9810011454</p>
        <p>Location: Laxmi Nagar Delhi-110092</p>
      </div>
    )
  },

  github: {
    description: 'Open GitHub profile',
    usage: 'github',
    fn: () => {
      window.open('https://github.com/fardeen-99', '_blank')
      return (
        <div className='text-cyan-400 mt-4 mb-4 whitespace-pre-wrap font-medium flex flex-col gap-2'>
          <p>Opening GitHub...</p>
        </div>
      )
    }
  },

  resume: {
    description: 'Download resume',
    usage: 'resume',
    fn: () => (
      <div className='text-orange-400 mt-4 mb-4 whitespace-pre-wrap font-medium flex flex-col gap-2'>
        <p>Resume download started...</p>
      </div>
    )
  },

  social: {
    description: 'View social media links',
    usage: 'social',
    fn: () => {
      window.open(
        'https://www.linkedin.com/in/mohd-fardeen-b31307358',
        '_blank'
      )
      return (
        <div className='text-pink-400 mt-4 mb-4 whitespace-pre-wrap font-medium flex flex-col gap-2'>
          <p>Opening LinkedIn...</p>
        </div>
      )
    }       
  },

  echo: {
    description: 'Echo a passed string',
    usage: 'echo <string>',
    fn: (...args) => (
      <div className='text-gray-400 mt-4 mb-4 whitespace-pre-wrap font-medium flex flex-col gap-2'>
        <p>{args.join(' ')}</p>
      </div>
    )
  }
}


// this above command didd by ai you simply usep tag in every line

    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝


Type available commands in Terminal Below:-
Commands:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch
  • social   - For connecting
  • github   - Repositories
  • clear   - Clear Terminal

Happy exploring! 🚀
`

let refu=useRef(null)
useEffect(() => {
  if (!refu.current) return

  refu.current?.scrollIntoView({behavior:"smooth"})


  
}, [])

  return (
<>
<Macbook posx={400} app={"cli"}  posy={50} aloo={"Terminal"} width={400}height={400} onfocus={onfocus} zindex={zindex}>
    <section ref={refu} className='overflow-y-auto h-full '>
<Terminal 
commands= {commands}

welcomeMessage={welcomeMessage}
promptLabel={'Fardeen:~$'}
promptLabelStyle={{ color:"green" }} 

/>

</section>


</Macbook>

</>

  )
}

export default Cli