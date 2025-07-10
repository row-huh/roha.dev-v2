"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Github } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const projectData = {
  "pethia": {
    title: "Discord Bot That Roasts All Of Your Friends (And You) - Private on github coz it knows too much about me",
    date: "2023-08-15",
    readTime: "3 min read",
    status: "completed",
    reason: "Too mean, hurt my own feelings",
    tags: ["Discord.py", "Python", "Regret"],
    githubUrl: "https://github.com/row-huh/pethia",
    content: ``,
  },

}

const statusConfig = {
  abandoned: { color: "bg-red-900/30 text-red-300 border-red-700", label: "Abandoned" },
  satirical: { color: "bg-yellow-900/30 text-yellow-300 border-yellow-700", label: "Too Satirical" },
  incomplete: { color: "bg-blue-900/30 text-blue-300 border-blue-700", label: "Incomplete" },
  shameful: { color: "bg-purple-900/30 text-purple-300 border-purple-700", label: "Shameful" },
  "too-effective": { color: "bg-orange-900/30 text-orange-300 border-orange-700", label: "Too Effective" },
  toxic: { color: "bg-pink-900/30 text-pink-300 border-pink-700", label: "Toxic" },
}

export default function RandomProjectPage({ params }: { params: { slug: string } }) {
  const project = projectData[params.slug as keyof typeof projectData]

  if (!project) {
    notFound()
  }

  const statusInfo = statusConfig[project.status as keyof typeof statusConfig]

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/random-projects"
          className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Chaotic Archive
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400 mb-6">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>
                {new Date(project.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>{project.readTime}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-100">{project.title}</h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className={statusInfo.color}>{statusInfo.label}</Badge>
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-zinc-800 text-zinc-300 border border-zinc-700">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="bg-red-900/20 border border-red-700 rounded-lg p-4 mb-6">
            <p className="text-red-300">
              <strong>Why I gave up:</strong> {project.reason}
            </p>
          </div>

          {/* GitHub Link */}
          <div className="flex items-center justify-between border-b border-zinc-700 pb-6">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <Github size={14} className="mr-1" />
              View the Disaster on GitHub
            </a>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-emerald max-w-none">
          <div
            className="text-zinc-300 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: project.content
                .split("\n")
                .map((line) => {
                  if (line.startsWith("# ")) {
                    return `<h1 class="text-2xl font-bold text-emerald-400 mt-8 mb-4">${line.slice(2)}</h1>`
                  } else if (line.startsWith("## ")) {
                    return `<h2 class="text-xl font-semibold text-emerald-400 mt-6 mb-3">${line.slice(3)}</h2>`
                  } else if (line.startsWith("### ")) {
                    return `<h3 class="text-lg font-medium text-emerald-400 mt-4 mb-2">${line.slice(4)}</h3>`
                  } else if (line.startsWith("- **") && line.includes("**:")) {
                    const [, boldText, rest] = line.match(/- \*\*(.*?)\*\*: (.*)/) || []
                    return `<li class="mb-2"><strong class="text-emerald-400">${boldText}</strong>: ${rest}</li>`
                  } else if (line.startsWith("- ")) {
                    return `<li class="mb-1">${line.slice(2)}</li>`
                  } else if (line.startsWith("```")) {
                    if (line.length > 3) {
                      return `<pre class="bg-zinc-800 p-4 rounded-lg overflow-x-auto border border-zinc-700 my-4"><code class="text-sm">`
                    } else {
                      return `</code></pre>`
                    }
                  } else if (line.trim() === "") {
                    return "<br>"
                  } else if (line.startsWith("*[") && line.includes("]*")) {
                    return `<p class="text-zinc-500 italic text-sm mb-4">${line}</p>`
                  } else {
                    return `<p class="mb-4">${line}</p>`
                  }
                })
                .join(""),
            }}
          />
        </article>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-zinc-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-zinc-400">
              <p>Enjoyed this disaster story? There are plenty more where this came from.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/random-projects">
                <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 bg-transparent">
                  More Disasters
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-emerald-600 hover:bg-emerald-700">Ask Me About This</Button>
              </Link>
            </div>
          </div>
        </footer>
      </main>

      <Footer />
    </div>
  )
}
