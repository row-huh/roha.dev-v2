import { Award, ExternalLink, Calendar, BookOpen } from "lucide-react"

export function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "CS50's Introduction to Artificial Intelligence with Python",
      issuer: "Harvard University",
      date: "2024",
      description:
        "Comprehensive course covering AI fundamentals, search algorithms, knowledge representation, machine learning, and neural networks.",
      skills: ["Python", "Machine Learning", "Neural Networks", "Search Algorithms", "AI Ethics"],
      link: "https://cs50.harvard.edu/certificates/aeb756b8-e607-46ab-b95b-d835bd352cbd",
      projects: ["Minesweeper AI", "PageRank Algorithm", "Crossword Generator"],
    },
    {
      id: 2,
      title: "CS50's Introduction to Programming with Python",
      issuer: "Harvard University",
      date: "2024",
      description:
        "Intensive introduction to programming using Python, covering functions, variables, conditionals, loops, exceptions, libraries, and more.",
      skills: ["Python", "Object-Oriented Programming", "Testing", "Libraries", "File I/O"],
      link: "https://cs50.harvard.edu/certificates/e46f231e-3be6-4b4e-8bd8-c58f82e7bf2d",
      projects: ["9 Problem Sets", "Final Project"],
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
      {certifications.map((cert) => (
        <div
          key={cert.id}
          className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-emerald-500/50 transition-all group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <Award className="text-emerald-400 mr-3" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-zinc-400 mt-1">
                  <BookOpen size={12} />
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <Calendar size={12} />
                  <span>{cert.date}</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-zinc-300 mb-4 text-sm leading-relaxed">{cert.description}</p>

          {cert.projects && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-zinc-300 mb-2">Key Projects:</h4>
              <div className="flex flex-wrap gap-2">
                {cert.projects.map((project) => (
                  <span key={project} className="text-xs px-2 py-1 rounded bg-zinc-700 text-zinc-300">
                    {project}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-2 py-1 rounded-full bg-emerald-900/30 text-emerald-300 border border-emerald-700"
              >
                {skill}
              </span>
            ))}
          </div>

          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>View Certificate</span>
            <ExternalLink size={12} />
          </a>
        </div>
      ))}
    </div>
  )
}
