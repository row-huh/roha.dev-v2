"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, BookOpen, Coffee, Zap } from "lucide-react"

const uniProjects = [
  {
    title: "Nutritional Management System",
    description: "A comprehensive Nutritional Management System built with Flask, Javascript and MySQL for Database Systems course.",
    longDescription:
      "Developed a complete nutritional management platform for end users and nutritionists. It includes patient profiling, diet chart generation, nutrition tracking, and admin dashboards.",
    technologies: ["Python", "MySQL", "Flask", "Javascript"],
    timeSpent: "3 days",
    painLevel: "Extreme", // Low, Medium, High, Extreme
    actuallyLearned: [
      "Database design and normalization",
      "SQL query optimization",
      "Flask backend integration",
    ],
    links: {
      github: "https://github.com/row-huh/Nutritional-Management-System",
    },
  },
  {
    title: "Expense Tracker",
    description: "Web-based expense tracking system using Streamlit for university.",
    longDescription:
      "Developed an expense tracker that allows users to upload receipts, auto-extract key details using Tesseract OCR, categorize transactions, and visualize their spending with interactive charts. Emphasized simplicity and real-time insights using Streamlit.",
    technologies: ["Streamlit", "TesseractOCR", "Python", "JavaScript"],
    timeSpent: "1 week",
    painLevel: "Low",
    actuallyLearned: [
      "OCR-based receipt scanning",
      "Financial visualizations",
      "Streamlit-based dashboard",
    ],
    links: {
      github: "https://github.com/row-huh/Expense-Tracker",
    },
  },
  {
    title: "Relic",
    description: "A webapp that lets you search through an historical archive of news artcickes",
    longDescription:
      "used php myssql, javascript to create a webapp that lets you search through an historical archive of news articles. It allows users to search by keywords, view article details, and explore related articles.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    timeSpent: "4 days",
    painLevel: "Low",
    actuallyLearned: [
      // rewrite this
      "Advanced OOP concepts in C++",
      "File handling and data persistence",
      "Memory management and pointers",
    ],
    links: {
      github: "https://github.com/row-huh/Relic",
    },
  },
{
  title: "Operating System GUI",
  description: "A GUI-based interface simulating key operating system functionalities, developed using Python and Tkinter.",
  longDescription:
    "A Linux-inspired GUI application that replicates essential OS operations like file management, process/thread creation, inter-process communication, and custom code execution. Features include folder/file creation, permission editing, launching applications, task manager-style process display and control, and data sharing between processes. Also includes a custom code execution module for user-defined Python or C programs.",
  technologies: ["Python", "Tkinter", "Subprocess", "OS Module"],
  timeSpent: "1 week",
  painLevel: "Medium",
  actuallyLearned: [
    "Python GUI development with Tkinter",
    "Working with system-level operations in Python",
    "Managing processes and threads programmatically",
    "Basic inter-process communication (IPC)",
    "Handling file permissions and subprocesses",
  ],
  links: {
    github: "https://github.com/row-huh/operating-system-gui",
  },
}

  {
    title: "Time Venturers",
    description: "Text-Based RPG",
    longDescription:
      "Implemented fundamental data structures including linked lists, stacks, queues, binary trees, and hash tables. Also implemented sorting and searching algorithms with performance analysis.",
    technologies: ["C++", "Algorithms", "Data Structures"],
    timeSpent: "1 week",
    painLevel: "None",
    actuallyLearned: 
    // rewrite this
    [],
    funFact: "I had recently watched Cyberpunk Edgerunners, thus the theme of this game",
    links: {
      github: "https://github.com/row-huh/time-ventures",
      demo: "https://www.youtube.com/watch?v=2ck6IDWG4Kc",
    },
  },
]


export function UniProjects() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {uniProjects.map((project, index) => (
        <Card
          key={index}
          className="bg-zinc-800/50 border-zinc-700 hover:border-emerald-700/50 transition-all duration-300 group"
        >
          <CardHeader>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <CardTitle className="text-xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-zinc-400 mt-2">{project.description}</CardDescription>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-blue-900/20 text-blue-300 border-blue-700">
                <BookOpen size={12} className="mr-1" />
                {project.course}
              </Badge>
              <Badge className={painLevelColors[project.painLevel as keyof typeof painLevelColors]}>
                {painLevelIcons[project.painLevel as keyof typeof painLevelIcons]} {project.painLevel} Pain
              </Badge>
              <Badge variant="outline" className="border-zinc-600 text-zinc-300">
                Grade: {project.grade}
              </Badge>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-zinc-400 mb-4">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {project.semester}
              </div>
              <div className="flex items-center">
                <Coffee size={14} className="mr-1" />
                {project.timeSpent}
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-zinc-300 text-sm mb-4 leading-relaxed">{project.longDescription}</p>

            {/* What I Actually Learned */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-emerald-400 mb-2 flex items-center">
                <Zap size={14} className="mr-1" />
                What I Actually Learned
              </h4>
              <ul className="text-sm text-zinc-400 space-y-1">
                {project.actuallyLearned.map((learning, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    {learning}
                  </li>
                ))}
              </ul>
            </div>



            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-zinc-400 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs bg-zinc-700 text-zinc-300 border-zinc-600">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {project.links.github && (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-zinc-600 text-zinc-300 hover:bg-zinc-700 hover:text-emerald-400 bg-transparent"
                  asChild
                >
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
              )}
              {project.links.demo && (
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    View Project
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
