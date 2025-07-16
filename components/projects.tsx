"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Users, Award } from "lucide-react"

const projects = [
  {
    title: "MalamaAI: Skin Disease Detection",
    description:
      "Web application using Next.js and Flask to detect skin diseases with DinoV2-based model and Llama 3.370b for accurate analysis.",
    longDescription:
      "Created a comprehensive web application for skin disease detection using advanced AI models. Incorporated DinoV2 for image analysis and Llama 3.370b for accurate diagnostic analysis, improving diagnostic precision for healthcare applications.",
    technologies: ["Next.js", "Flask", "DinoV2", "Llama 3.370b", "Computer Vision", "Healthcare AI"],
    category: "Healthcare AI",
    status: "Completed",
    timeline: "2024",
    team: "CodeDucklings Team",
    highlights: [
      "Advanced computer vision implementation",
      "Healthcare-focused AI application",
      "Hackathon recognition at Lokahi Healthcare",
    ],
    links: {
      github: "https://github.com/row-huh/MalamaAI",
      demo: "https://lablab.ai/event/lokahi-innovation-in-healthcare/codeducklings/malamaai",
    },
  },
  {
    title: "AfterSchool - Educational RAG",
    description:
      "Full-stack educational platform powered by AI, focused on teaching essential life skills not usually covered in school—like personal finance, productivity, and more.",
    longDescription:
      "Built a full-stack AI-powered educational platform that helps users learn essential but often overlooked topics such as personal finance, critical thinking, and productivity. Integrated modern web technologies and retrieval-augmented generation (RAG) to deliver personalized, conversational learning experiences.",
    technologies: ["React", "Node.js", "Flask", "AI/ML", "Vertex AI"],
    category: "Full-Stack",
    status: "Completed",
    timeline: "2024",
    team: "AfterSchool Team",
    highlights: [
      "AI-driven personalized learning paths",
      "RAG-based knowledge delivery",
      "Clean and intuitive user experience",
    ],
    links: {
      github: "https://github.com/Laiba-lax/AfterSchool",
      demo: "https://devpost.com/software/skinai-ufobl8"
    },
  },

  {
    title: "Nutritional Management System",
    description: "A comprehensive Nutritional Management System built with Flask, Javascript and MySQL for Database Systems course.",
    longDescription:
      "Built a full-featured library management system with book cataloging, member management, borrowing/returning functionality, and fine calculation. Implemented proper database normalization and CRUD operations.",
    technologies: ["Python", "MySQL", "Flask", "Javascript"],
    status: "Completed",
    timeline: "Semester 4",
    team: "Solo",
    highlights: [
      "Database design and normalization",
      "SQL query optimization",
      "Java GUI development with Swing",
    ],
    links: {
      github: "https://github.com/row-huh/Nutritional-Management-System",
    },
  },
  {
    title: "Expense Tracker",
    description: "Web-based student management system using PHP and MySQL for Web Development course.",
    longDescription:
      "Developed a complete student information system with student registration, course enrollment, grade management, and reporting features. Implemented user authentication and role-based access control.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    status: "Completed",
    timeline: "Semester 6",
    team: "Solo",
    highlights: [
      "PHP backend development",
      "Session management and authentication",
      "Responsive web design with Bootstrap",
    ],
    links: {
      github: "https://github.com/row-huh/Expense-Tracker",
    },
  },
  {
    title: "Relic",
    description: "Object-oriented banking system simulation in C++ for Object Oriented Programming course.",
    longDescription:
      "Created a comprehensive banking system simulation implementing OOP concepts like inheritance, polymorphism, and encapsulation. Features account management, transactions, and interest calculations.",
    technologies: ["C++", "OOP", "File Handling"],
    status: "Completed",
    timeline: "Semester 6",
    team: "Solo",
    highlights: [
      "Advanced OOP concepts in C++",
      "File handling and data persistence",
      "Memory management and pointers",
    ],
    links: {
      github: "#",
    },
  },
  {
    title: "Operating System GUI",
    description: "Scientific calculator application built with Python Tkinter for Programming Fundamentals course.",
    longDescription:
      "Developed a fully functional scientific calculator with basic arithmetic operations, trigonometric functions, logarithms, and memory functions using Python's Tkinter library.",
    technologies: ["Python", "Tkinter", "Math Library"],
    status: "Completed",
    timeline: "Semester 5",
    team: "Solo",
    highlights: [
      "Python GUI development with Tkinter",
      "Event-driven programming",
      "Mathematical function implementation",
    ],
    links: {
      github: "#",
    },
  },
  {
    title: "Time Venturers",
    description: "Text-Based RPG",
    longDescription:
      "Implemented fundamental data structures including linked lists, stacks, queues, binary trees, and hash tables. Also implemented sorting and searching algorithms with performance analysis.",
    technologies: ["C++", "Algorithms", "Data Structures"],
    status: "Completed",
    timeline: "Semester 1",
    team: "Solo",
    highlights: [
      "Inspired by Cyberpunk Edgerunners theme",
      "Extensive use of core data structures",
    ],
    links: {
      github: "#",
    },
  },
]

const categoryColors = {
  "AI/ML": "bg-purple-900/20 text-purple-300 border-purple-700",
  "Healthcare AI": "bg-blue-900/20 text-blue-300 border-blue-700",
  "Full-Stack": "bg-emerald-900/20 text-emerald-300 border-emerald-700",
  Automation: "bg-orange-900/20 text-orange-300 border-orange-700",
}

export function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
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
              {project.category && categoryColors[project.category as keyof typeof categoryColors] && (
                <Badge className={categoryColors[project.category as keyof typeof categoryColors]}>
                  {project.category}
                </Badge>
              )}
              <Badge variant="outline" className="border-zinc-600 text-zinc-300">
                {project.status}
              </Badge>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-zinc-400 mb-4">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {project.timeline}
              </div>
              <div className="flex items-center">
                <Users size={14} className="mr-1" />
                {project.team}
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-zinc-300 text-sm mb-4 leading-relaxed">{project.longDescription}</p>

            {/* Key Highlights */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-emerald-400 mb-2 flex items-center">
                <Award size={14} className="mr-1" />
                Key Highlights
              </h4>
              <ul className="text-sm text-zinc-400 space-y-1">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    {highlight}
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
