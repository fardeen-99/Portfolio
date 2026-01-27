import React from 'react'
import Macbook from './Macbook'
import Terminal from 'react-console-emulator'
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark'
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism'
const Cli = ({onfocus,zindex}) => {

const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => 'I am a full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies.'
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Frontend: React, Vue.js, Vanilla JS, Sass, HTML/CSS
Backend: Node.js, Express, Python, Django
Databases: MongoDB, PostgreSQL, MySQL
Tools: Git, Docker, Webpack, Vite
Cloud: AWS, Azure, Heroku`
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `1. Portfolio Website - React + Vite
2. E-commerce Platform - MERN Stack
3. Task Management App - Next.js
4. Real-time Chat App - Socket.io
5. Data Dashboard - React + Chart.js`
        },
        experience: {
            description: 'Display work experience',
            usage: 'experience',
            fn: () => `Frontend Engineering Experience (Self-Driven)

--Designed reusable React components and hooks used consistently across multiple projects.


--Optimized rendering performance by minimizing unnecessary re-renders and leveraging efficient state
management patterns.

--Integrated REST APIs with robust loading, error handling, and caching strategies.
--Built responsive and accessible UI layouts following modern frontend best practices.
Projects

`
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: fardeenkhan63574@gmail.com
Phone: +91-9810011454
Location: Laxmi Nagar Delhi-110092`,

        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/fardeen-99', '_blank')
                return 'Opening GitHub...'
            }
        },
        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => 'Resume download started...'
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => {
            window.open("https://www.linkedin.com/in/mohd-fardeen-b31307358",'_blank')
        }
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

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


  return (
<>
<Macbook posx={400} app={"cli"}  posy={50} aloo={"Terminal"} width={400}height={400} onfocus={onfocus} zindex={zindex}>
    <section className='overflow-hidden  '>
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