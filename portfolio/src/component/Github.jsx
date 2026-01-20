import React from 'react'
import {Rnd} from "react-rnd"




const Github = () => {
    const git=[
  {
    "id": 1,
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
    "title": "Scheds - A Course Schedule Generator",
    "description": "My proudest project yet, a comprehensive course schedule generator application built with ASP.NET Core MVC.",
    "tags": ["ASP.NET Core", "C#", "Entity Framework", "SQL Server", "Bootstrap", "jQuery"],
    "repoLink": "https://github.com/microsoft/dotnet",
    "demoLink": "https://dotnet.microsoft.com/"
  },
  {
    "id": 2,
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    "title": "FinTrack - Personal Finance Dashboard",
    "description": "A real-time finance tracker that visualizes spending habits using interactive charts and connects to banking APIs.",
    "tags": ["React", "TypeScript", "Chart.js", "Node.js", "Express", "MongoDB"],
    "repoLink": "https://github.com/facebook/react",
    "demoLink": "https://react.dev/"
  },
  {
    "id": 3,
    "image": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000",
    "title": "SecureAuth - Backend Identity Service",
    "description": "A robust backend authentication microservice featuring JWT implementation, role-based access control, and OAuth2 integration.",
    "tags": ["Python", "Django", "PostgreSQL", "Docker", "Redis", "JWT"],
    "repoLink": "https://github.com/django/django",
    "demoLink": null
  },
  {
    "id": 4,
    "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    "title": "ChatStream - Real-time Messaging App",
    "description": "A lightweight chat application allowing users to create rooms and message instantly. Optimized for low latency communication.",
    "tags": ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io"],
    "repoLink": "https://github.com/vuejs/core",
    "demoLink": "https://vuejs.org/"
  },
  {
    "id": 5,
    "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
    "title": "TerminalX - CLI Productivity Tool",
    "description": "A command-line interface tool built to automate repetitive developer tasks and manage local environments efficiently.",
    "tags": ["Rust", "Clap", "Tokio", "System API"],
    "repoLink": "https://github.com/rust-lang/rust",
    "demoLink": null
  }
]
  return (
    <>
    <Rnd  default={{
    x: 100,
    y: 200,
    width: 300,
    height: 200,
  }}
    minWidth={200}
  minHeight={300}
  >
             <div className="bg-black rounded-xl w-full h-full flex flex-col overflow-hidden">

        {/* Title bar */}
        <nav className="flex items-center gap-2 px-4 py-2 border-b border-zinc-800">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <p className="text-zinc-300 text-sm ml-2">
            Fardeen Khan — github
          </p>
        </nav>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">

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
        </div>
      </div>
    </Rnd>
    </>
  )
}

export default Github