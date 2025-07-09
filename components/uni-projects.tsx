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
      "Built a full-featured library management system with book cataloging, member management, borrowing/returning functionality, and fine calculation. Implemented proper database normalization and CRUD operations.",
    technologies: ["Python", "MySQL", "Flask", "Javascript"],
    course: "Database Systems",
    semester: "Semester 4",
    grade: "A",
    timeSpent: "3 days",
    painLevel: "Extreme", // Low, Medium, High, Extreme
    actuallyLearned: ["Database design and normalization", "SQL query optimization", "Java GUI development with Swing"],
    links: {
      github: "",
    },
  },
  {
    title: "Expense Tracker",
    description: "Web-based student management system using PHP and MySQL for Web Development course.",
    longDescription:
      "Developed a complete student information system with student registration, course enrollment, grade management, and reporting features. Implemented user authentication and role-based access control.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    course: "Software Construction & Development",
    semester: "Semester 6",
    grade: "A-",
    timeSpent: "1 week",
    painLevel: "Low",
    actuallyLearned: [
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
    course: "Web Engineering",
    semester: "Semester 6",
    grade: "A+",
    timeSpent: "4 days",
    painLevel: "Low",
    actuallyLearned: [
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
    course: "Programming Fundamentals",
    semester: "Semester 5",
    grade: "A",
    timeSpent: "1 week",
    painLevel: "Low",
    actuallyLearned: [
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
    course: "Programming Fundamentals",
    semester: "Semester 1",
    grade: "A",
    timeSpent: "1 week",
    painLevel: "None",
    actuallyLearned: [
     
    ],
    funFact : "I had recently watch cyberpunk edgerunners, thus the theme of this game",
    links: {
      github: "#",
    },
  },

]

const painLevelColors = {
  Low: "bg-green-900/20 text-green-300 border-green-700",
  Medium: "bg-yellow-900/20 text-yellow-300 border-yellow-700",
  High: "bg-orange-900/20 text-orange-300 border-orange-700",
  Extreme: "bg-red-900/20 text-red-300 border-red-700",
}

const painLevelIcons = {
  Low: "😊",
  Medium: "😐",
  High: "😰",
  Extreme: "💀",
}

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
