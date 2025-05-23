"use client"

import { useState } from "react"
import { GitBranch, GitCommit, GitPullRequest, ExternalLink } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  date: string
  commitHash: string
  tags: string[]
  link?: string
}

export function ProjectTimeline() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "First HTML/CSS Website",
      description:
        "My first attempt at building a website. It was a simple portfolio with basic HTML and CSS. Looking back, the design was terrible, but we all start somewhere!",
      date: "2021-09-15",
      commitHash: "a1b2c3d",
      tags: ["HTML", "CSS"],
      link: "#",
    },
    {
      id: 2,
      title: "JavaScript Weather App",
      description:
        "Built a weather application using JavaScript and a public API. Learned about asynchronous programming and API integration.",
      date: "2022-01-20",
      commitHash: "e4f5g6h",
      tags: ["JavaScript", "API", "Frontend"],
      link: "#",
    },
    {
      id: 3,
      title: "React Task Manager",
      description:
        "Created a task management application with React. Implemented state management, form validation, and local storage persistence.",
      date: "2022-05-10",
      commitHash: "i7j8k9l",
      tags: ["React", "JavaScript", "Frontend"],
      link: "#",
    },
    {
      id: 4,
      title: "Node.js REST API",
      description:
        "Developed a RESTful API using Node.js and Express. Implemented authentication, data validation, and MongoDB integration.",
      date: "2022-08-25",
      commitHash: "m1n2o3p",
      tags: ["Node.js", "Express", "MongoDB", "Backend"],
      link: "#",
    },
    {
      id: 5,
      title: "Full-Stack E-commerce Project",
      description:
        "Built a complete e-commerce platform with React, Node.js, and MongoDB. Implemented user authentication, product catalog, shopping cart, and payment processing.",
      date: "2023-02-15",
      commitHash: "q4r5s6t",
      tags: ["React", "Node.js", "MongoDB", "Full-Stack"],
      link: "#",
    },
  ]

  return (
    <div className="relative border-l-2 border-zinc-700 pl-8 ml-4">
      {projects.map((project, index) => (
        <div key={project.id} className="mb-10 relative">
          <div className="absolute -left-[41px] bg-zinc-900 p-1">
            {index === projects.length - 1 ? (
              <GitBranch className="text-emerald-400" size={20} />
            ) : (
              <GitCommit className="text-emerald-400" size={20} />
            )}
          </div>

          <div
            className={`bg-zinc-800 rounded-lg p-6 border ${
              expandedProject === project.id ? "border-emerald-500" : "border-zinc-700 hover:border-zinc-500"
            } transition-all cursor-pointer`}
            onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-emerald-400">{project.title}</h3>
              <span className="text-xs bg-zinc-700 px-2 py-1 rounded text-zinc-300">
                {new Date(project.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>

            <div className="flex items-center text-xs text-zinc-500 mb-3">
              <span className="mr-2">commit</span>
              <span className="font-mono">{project.commitHash}</span>
            </div>

            <p className={`text-zinc-300 ${expandedProject === project.id ? "" : "line-clamp-2"}`}>
              {project.description}
            </p>

            {expandedProject === project.id && project.link && (
              <a href={project.link} className="inline-flex items-center mt-4 text-emerald-400 hover:text-emerald-300">
                View Project <ExternalLink size={16} className="ml-1" />
              </a>
            )}

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 rounded-full bg-zinc-700 text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="absolute -left-[41px] bottom-0 bg-zinc-900 p-1">
        <GitPullRequest className="text-emerald-400" size={20} />
      </div>
      <div className="text-zinc-400 text-sm">My learning journey continues...</div>
    </div>
  )
}
