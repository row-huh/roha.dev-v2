import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, Github } from "lucide-react"
import Link from "next/link"

const randomProjects = [
  {
    id: 1,
    title: "Discord Bot That Roasts Your Code",
    slug: "discord-roast-bot",
    description:
      "A Discord bot that would analyze code snippets and roast them. Gave up when I realized I was roasting myself.",
    date: "2023-08-15",
    status: "abandoned",
    reason: "Too mean, hurt my own feelings",
    tags: ["Discord.py", "Python", "Regret"],
    image: "/placeholder.svg?height=200&width=400",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "Meme Generator API",
    slug: "meme-generator-api",
    description:
      "An API that generates memes based on your mood. Works great until you realize your mood is always 'dead inside'.",
    date: "2023-07-22",
    status: "satirical",
    reason: "Too accurate, became existential crisis",
    tags: ["Flask", "PIL", "Depression"],
    image: "/placeholder.svg?height=200&width=400",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Procrastination Tracker",
    slug: "procrastination-tracker",
    description: "An app to track how much time you waste. Ironically, I procrastinated building it.",
    date: "2023-06-10",
    status: "incomplete",
    reason: "Procrastinated on the procrastination tracker",
    tags: ["React", "Irony", "Self-Sabotage"],
    image: "/placeholder.svg?height=200&width=400",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "AI Girlfriend Chatbot",
    slug: "ai-girlfriend-bot",
    description: "Don't ask. We all have our dark moments in coding. This was mine.",
    date: "2023-05-18",
    status: "shameful",
    reason: "Realized I need to touch grass",
    tags: ["OpenAI", "Loneliness", "Regret"],
    image: "/placeholder.svg?height=200&width=400",
    readTime: "2 min read",
  },
  {
    id: 5,
    title: "Automatic Excuse Generator",
    slug: "excuse-generator",
    description: "Generates creative excuses for missing deadlines. Too good at its job, got me in trouble.",
    date: "2023-04-25",
    status: "too-effective",
    reason: "Professor found out",
    tags: ["JavaScript", "Creativity", "Trouble"],
    image: "/placeholder.svg?height=200&width=400",
    readTime: "3 min read",
  },
  {
    id: 6,
    title: "Discord Bot for Counting Ls",
    slug: "discord-l-counter",
    description: "Counts how many Ls people take in the server. Became too toxic, had to shut it down.",
    date: "2023-03-12",
    status: "toxic",
    reason: "Destroyed friendships",
    tags: ["Discord.js", "Toxicity", "Friendship-Destroyer"],
    image: "/placeholder.svg?height=200&width=400",
    readTime: "4 min read",
  },
]

const statusConfig = {
  abandoned: { color: "bg-red-900/30 text-red-300 border-red-700", label: "Abandoned" },
  satirical: { color: "bg-yellow-900/30 text-yellow-300 border-yellow-700", label: "Too Satirical" },
  incomplete: { color: "bg-blue-900/30 text-blue-300 border-blue-700", label: "Incomplete" },
  shameful: { color: "bg-purple-900/30 text-purple-300 border-purple-700", label: "Shameful" },
  "too-effective": { color: "bg-orange-900/30 text-orange-300 border-orange-700", label: "Too Effective" },
  toxic: { color: "bg-pink-900/30 text-pink-300 border-pink-700", label: "Toxic" },
}

export default function RandomProjectsPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Portfolio
        </Link>

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-zinc-300">My Chaotic</span>
            <span className="text-emerald-400"> Code Archive</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            The projects that didn't make it to my resume. Some are too satirical, others incomplete, and a few I'm just
            not proud of. But hey, we all have our coding dark ages.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {randomProjects.map((project) => {
            const statusInfo = statusConfig[project.status as keyof typeof statusConfig]

            return (
              <Card
                key={project.id}
                className="bg-zinc-800 border-zinc-700 hover:border-zinc-600 transition-all duration-300"
              >
                <div className="aspect-video bg-zinc-700 rounded-t-lg overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={statusInfo.color}>{statusInfo.label}</Badge>
                    <div className="flex items-center text-sm text-zinc-400">
                      <Calendar size={14} className="mr-1" />
                      {new Date(project.date).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </div>

                  <CardTitle className="text-xl text-zinc-100 hover:text-emerald-400 transition-colors">
                    <Link href={`/random-projects/${project.slug}`}>{project.title}</Link>
                  </CardTitle>

                  <CardDescription className="text-zinc-400">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm text-red-400 italic">Why I gave up: {project.reason}</p>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-zinc-500">
                      <Clock size={14} className="mr-1" />
                      {project.readTime}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-zinc-700 text-zinc-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Link href={`/random-projects/${project.slug}`}>
                    <Button size="sm" className="w-full bg-zinc-700 hover:bg-zinc-600">
                      Read the Disaster Story →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 p-8 bg-zinc-800/50 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-zinc-300">Still want to see more chaos?</h3>
          <p className="text-zinc-400 mb-6">
            These are just the ones I documented. There are probably 50+ more projects sitting in my GitHub graveyard
            that I've completely forgotten about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/row-huh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button className="bg-zinc-700 hover:bg-zinc-600">
                <Github size={16} className="mr-2" />
                Visit My GitHub Graveyard
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="outline" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 bg-transparent">
                Ask Me About These Disasters
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
