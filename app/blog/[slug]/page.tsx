import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"

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

// This would typically come from a CMS or markdown files
const blogPosts = {
  "why-backend-over-frontend": {
    title: "Why I Chose Backend Development Over Frontend",
    excerpt: "After trying both sides of web development, here's why I fell in love with servers, databases, and APIs.",
    date: "2024-12-15",
    readTime: "5 min read",
    tags: ["Backend", "Career", "Personal"],
    category: "professional" as keyof typeof categoryConfig,
    mediumUrl: "https://medium.com/@roha.pathan125/why-backend-over-frontend-abc123",
    content: `
# Why I Chose Backend Development Over Frontend

When I first started learning web development, like most beginners, I was drawn to frontend development. The immediate visual feedback, the ability to see your code come to life in the browser, and the satisfaction of creating beautiful user interfaces seemed incredibly appealing.

But as I dove deeper into the world of programming, I found myself gravitating more and more toward the backend. Here's why.

## The Logic Behind the Magic

Frontend development is undoubtedly creative and visually rewarding, but I discovered that I'm more excited by the logic that powers applications rather than how they look. There's something deeply satisfying about designing database schemas, optimizing queries, and building robust APIs that can handle thousands of requests.

When I built my first REST API for a simple todo application, I was fascinated by how data flowed from the database through various layers of abstraction before reaching the user. That moment of understanding the complete data lifecycle was when I knew backend development was for me.

## Problem-Solving at Scale

Backend development presents unique challenges that I find intellectually stimulating:

- **Performance optimization**: How do you make a database query run in milliseconds instead of seconds?
- **Scalability**: How do you design systems that can handle 10x or 100x more users?
- **Data integrity**: How do you ensure data remains consistent across distributed systems?

These aren't just technical challenges—they're puzzles that require creative thinking and deep understanding of computer science fundamentals.

## The Foundation of Everything

While frontend developers create the face of applications, backend developers build the foundation. Every button click, every form submission, every real-time update depends on robust backend systems. There's a certain pride in knowing that your code is the invisible force that makes everything else possible.

## My Journey So Far

During my time working on projects like MalamaAI (our healthcare hackathon project), I found myself naturally gravitating toward the backend tasks:

- Setting up the Flask server
- Designing the database schema for patient data
- Implementing the machine learning model integration
- Creating secure API endpoints

While my teammates focused on the React frontend, I was in my element working with Python, databases, and API design.

## The Learning Never Stops

Backend development keeps me constantly learning. New databases, frameworks, cloud services, and architectural patterns emerge regularly. The field is vast—from microservices to serverless computing, from SQL to NoSQL, from REST to GraphQL.

This constant evolution means I'm never bored, and there's always a new technology or concept to master.

## Looking Forward

As I continue my journey in software engineering, I'm excited to dive deeper into:

- **Distributed systems**: Understanding how large-scale applications work
- **Cloud architecture**: Learning AWS, Docker, and Kubernetes
- **Database optimization**: Mastering advanced SQL and NoSQL concepts
- **System design**: Building scalable, maintainable architectures

## Final Thoughts

Choosing backend development doesn't mean I ignore the frontend entirely. Understanding the full stack makes me a better developer. But when it comes to where I want to focus my career, the backend is where my passion lies.

If you're trying to decide between frontend and backend development, my advice is simple: try both, build projects in both areas, and see what excites you more. For me, the invisible magic of backend systems won out over the visible beauty of frontend interfaces.

And honestly? I couldn't be happier with that choice.
    `,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  const categoryInfo = categoryConfig[post.category]

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400 mb-6">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${categoryInfo.textColor}`}>{post.title}</h1>

          <p className="text-xl text-zinc-300 mb-6">{post.excerpt}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className={`${categoryInfo.bgColor} ${categoryInfo.textColor} ${categoryInfo.borderColor}`}>
              {categoryInfo.name}
            </Badge>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-zinc-800 text-zinc-300 border border-zinc-700">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Medium Link - Only show for professional posts */}
          <div className="flex items-center justify-between border-b border-zinc-700 pb-6">
            {categoryInfo.hasMedium && post.mediumUrl && (
              <a
                href={post.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                <ExternalLink size={14} className="mr-1" />
                Read on Medium
              </a>
            )}
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-emerald max-w-none">
          <div
            className="text-zinc-300 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: post.content
                .split("\n")
                .map((line) => {
                  if (line.startsWith("# ")) {
                    return `<h1 class="text-2xl font-bold ${categoryInfo.textColor} mt-8 mb-4">${line.slice(2)}</h1>`
                  } else if (line.startsWith("## ")) {
                    return `<h2 class="text-xl font-semibold ${categoryInfo.textColor} mt-6 mb-3">${line.slice(3)}</h2>`
                  } else if (line.startsWith("### ")) {
                    return `<h3 class="text-lg font-medium ${categoryInfo.textColor} mt-4 mb-2">${line.slice(4)}</h3>`
                  } else if (line.startsWith("- **") && line.includes("**:")) {
                    const [, boldText, rest] = line.match(/- \*\*(.*?)\*\*: (.*)/) || []
                    return `<li class="mb-2"><strong class="${categoryInfo.textColor}">${boldText}</strong>: ${rest}</li>`
                  } else if (line.startsWith("- ")) {
                    return `<li class="mb-1">${line.slice(2)}</li>`
                  } else if (line.startsWith("```")) {
                    if (line.length > 3) {
                      return `<pre class="bg-zinc-800 p-4 rounded-lg overflow-x-auto border border-zinc-700"><code class="text-sm">`
                    } else {
                      return `</code></pre>`
                    }
                  } else if (line.trim() === "") {
                    return "<br>"
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
              <p>Thanks for reading! Feel free to reach out if you have any questions.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/blog">
                <Button
                  variant="outline"
                  className={`border-${categoryInfo.color}-700 ${categoryInfo.textColor} hover:bg-${categoryInfo.color}-900/20 bg-transparent`}
                >
                  More Posts
                </Button>
              </Link>
              <Link href="/contact">
                <Button className={`bg-${categoryInfo.color}-600 hover:bg-${categoryInfo.color}-700`}>
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </footer>
      </main>

      <Footer />
    </div>
  )
}
