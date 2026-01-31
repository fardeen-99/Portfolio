import Macbook from "./Macbook"





const Github = ({onfocus,zindex}) => {
    const git=[
  {
    "id": 1,
    "image": "https://www.artificialintelligence-news.com/wp-content/uploads/2024/12/ai-artificial-intelligence-machine-learning-research-privacy-ethics-development-1024x714.jpg",
    "title": "SmartGPT Conversational AI-Designed by fardeen",
    "description": "This project was built to understand and demonstrate how modern conversational AI systems work end-to-end, from user interaction to AI response generation.",
    "tags": ["Advance React", "Axios", "Tailwind", "SCSS", "Rest API", "HTML"],
    "repoLink": "https://github.com/fardeen-99/react-journey/tree/main/react-gpt",
    "demoLink": "https://fardeen-chatgpt.vercel.app/"
  },
  {
    "id": 2,
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    "title": "FinTrack - Personal Mutitasking Dashboard",
    "description": "A modern multitasking dashboard that brings multiple tools and widgets into one unified interface, enabling users to manage tasks, and productivity seamlessly. Built with a focus on performance, smooth interactions, and intuitive UI/UX.",
    "tags": ["React", "JavaScript", "Tailwind", "HTML", "Axios", "CSS"],
    "repoLink": "https://github.com/fardeen-99/shaeriyans-cohort-2.0/tree/main/Dashboard-advanced",
    "demoLink": "https://react.dev/"
  },
  {
    "id": 3,
    "image": "https://img.freepik.com/premium-photo/clouds-symbolizing-travel-adventure-imaginative-exploration-diverse-global-destinations_1293074-200969.jpg",
    "title": "WorldAtlas - global Atlas Platform",
    "description": "An interactive World Atlas application that allows users to explore countries, continents, and geographic data through a clean and intuitive interface. Designed for quick discovery, learning, and easy navigation across global information.",
    "tags": ["React", "TanStack Query", "Axios", "Css", "Vite", "HTML"],
    "repoLink": "https://github.com/fardeen-99/react-journey/tree/main/reactfinal",
    "demoLink": "https://fardeen-atlas.vercel.app/  "
  },
  {
    "id": 4,
    "image": "https://ecole-intuit-lab.co.in/wp-content/uploads/fly-images/24689/img-3-730x450-c.jpeg",
    "title": "MultiMedia - Real-time Media searching App",
    "description": "A lightweight chat application allowing users to create rooms and message instantly. Optimized for low latency communication.",
    "tags": ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io"],
    "repoLink": "https://github.com/fardeen-99/react-journey/tree/main/redux02final",
    "demoLink": "https://mediahunt.vercel.app/"
  },
  {
    "id": 5,
    "image": "https://damassets.autodesk.net/content/dam/autodesk/draftr/19187/manufacturing-treau-5758.jpg",
    "title": "TopCircuit - A Complete PCB Solution",
    "description": "Developed a PCB manufacturing website showcasing design, fabrication, and assembly services with a clean, responsive UI. Implemented structured sections to highlight products, processes, and quality standards for improved user clarity.",
    "tags": ["HTML", "CSS", "JavaScript", "UI/UX"],
    "repoLink": "https://github.com/fardeen-99/top-circuits",
    "demoLink": "https://top-circuits.vercel.app/"
  }
]
  return (
    <>

<Macbook aloo={"Github"} app={"github"} posx={100}posy={200} onfocus={onfocus} zindex={zindex}  >
   <div className=" grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 m-6">
            {git.map((ele) => (
              <section
                key={ele.id}
                className="bg-zinc-800  rounded-xl p-4 text-white flex flex-col gap-2"
              >
                <img
                  src={ele.image}
                  alt=""
                  className="h-36 w-full object-cover rounded-lg"
                />

                <h2 className="mt-3 font-semibold text-sm line-clamp-2">
                  {ele.title}
                </h2>

                <p className="text-xs text-zinc-300 line-clamp-3">
                  {ele.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {ele.tags.map((item, i) => (
                    <span
                    key={i}
                    className="text-[10px] px-2 py-1 bg-zinc-700 rounded-full whitespace-nowrap"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-10 flex gap-3 text-xs">
                  <a
                    href={ele.repoLink}
                    target="_blank"
                    className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700"
                  >
                    Repo
                  </a>

                  {ele.demoLink && (
                    <a
                      href={ele.demoLink}
                      target="_blank"
                      className="px-3 py-1 bg-emerald-600 rounded hover:bg-emerald-700"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </section>
            ))}

</div>
                      </Macbook>
            
    </>
  )
}

export default Github