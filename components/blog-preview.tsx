import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Blog post categories with their colors
const categoryConfig = {
  professional: {
    name: "Professional",
    color: "emerald",
    bgColor: "bg-emerald-900/30",
    textColor: "text-emerald-300",
    borderColor: "border-emerald-700",
    hasMedium: true,
  },
  "error-logs": {
    name: "Error Logs",
    color: "red",
    bgColor: "bg-red-900/30",
    textColor: "text-red-300",
    borderColor: "border-red-700",
    hasMedium: false,
  },
  learning: {
    name: "Learning",
    color: "blue",
    bgColor: "bg-blue-900/30",
    textColor: "text-blue-300",
    borderColor: "border-blue-700",
    hasMedium: false,
  },
  "project-logs": {
    name: "Project Logs",
    color: "purple",
    bgColor: "bg-purple-900/30",
    textColor: "text-purple-300",
    borderColor: "border-purple-700",
    hasMedium: false,
  },
}

export function BlogPreview() {
  const blogPosts = [
    {
      id: 1,
      title: "Why I Chose Backend Development Over Frontend",
      excerpt:
        "After trying both sides of web development, here's why I fell in love with servers, databases, and APIs.",
      date: "2024-12-15",
      readTime: "5 min read",
      tags: ["Backend", "Career", "Personal"],
      slug: "why-backend-over-frontend",
      category: "professional" as keyof typeof categoryConfig,
      mediumUrl: "https://medium.com/@roha.pathan125/why-backend-over-frontend-abc123",
    },
    {
      id: 2,
      title: "Flask CORS Error: The 3-Hour Debugging Nightmare",
      excerpt:
        "How a simple CORS error turned into a 3-hour debugging session and what I learned about browser security.",
      date: "2024-12-10",
      readTime: "4 min read",
      tags: ["Flask", "CORS", "Debugging"],
      slug: "flask-cors-nightmare",
      category: "error-logs" as keyof typeof categoryConfig,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post) => {
        const categoryInfo = categoryConfig[post.category]
        return (
          <div
            key={post.id}
            className={`bg-zinc-800 rounded-lg p-6 border ${categoryInfo.borderColor} hover:border-opacity-80 transition-colors`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-zinc-400">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="text-xs bg-zinc-700 px-2 py-1 rounded text-zinc-300">{post.readTime}</span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <Badge
                className={`${categoryInfo.bgColor} ${categoryInfo.textColor} ${categoryInfo.borderColor} text-xs`}
              >
                {categoryInfo.name}
              </Badge>
            </div>

            <h3 className={`text-xl font-semibold mb-3 ${categoryInfo.textColor}`}>{post.title}</h3>

            <p className="text-zinc-300 mb-4 line-clamp-3">{post.excerpt}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 rounded-full bg-zinc-700 text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <Link href={`/blog/${post.slug}`}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`${categoryInfo.textColor} hover:${categoryInfo.textColor} hover:bg-${categoryInfo.color}-900/20 p-0`}
                >
                  Read more →
                </Button>
              </Link>
              {categoryInfo.hasMedium && post.mediumUrl && (
                <a
                  href={post.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs text-zinc-500 hover:text-emerald-400 transition-colors"
                >
                  <ExternalLink size={12} className="mr-1" />
                  Read on Medium
                </a>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
