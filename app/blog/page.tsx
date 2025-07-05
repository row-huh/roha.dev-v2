"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowRight, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState } from "react"

// Blog post categories with their colors
const categoryConfig = {
  all: {
    name: "All Posts",
    color: "zinc",
    bgColor: "bg-zinc-700",
    textColor: "text-zinc-300",
    borderColor: "border-zinc-600",
  },
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

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof categoryConfig>("all")

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
      title: "My First Hackathon Experience: From Nervous to 6th Place",
      excerpt:
        "How I went from being terrified of hackathons to placing 6th out of 57 teams at Bahria University Techathon.",
      date: "2024-11-28",
      readTime: "7 min read",
      tags: ["Hackathons", "Experience", "Growth"],
      slug: "first-hackathon-experience",
      category: "professional" as keyof typeof categoryConfig,
      mediumUrl: "https://medium.com/@roha.pathan125/first-hackathon-experience-def456",
    },
    {
      id: 3,
      title: "Flask CORS Error: The 3-Hour Debugging Nightmare",
      excerpt:
        "How a simple CORS error turned into a 3-hour debugging session and what I learned about browser security.",
      date: "2024-12-10",
      readTime: "4 min read",
      tags: ["Flask", "CORS", "Debugging", "Error"],
      slug: "flask-cors-nightmare",
      category: "error-logs" as keyof typeof categoryConfig,
    },
    {
      id: 4,
      title: "Finally Understanding Recursion (After 50 Failed Attempts)",
      excerpt: "My journey from recursion confusion to clarity, with the examples that finally made it click.",
      date: "2024-12-05",
      readTime: "6 min read",
      tags: ["Recursion", "Algorithms", "Learning", "DSA"],
      slug: "understanding-recursion",
      category: "learning" as keyof typeof categoryConfig,
    },
    {
      id: 5,
      title: "Building MalamaAI: From Idea to Healthcare Solution",
      excerpt:
        "The complete development journey of our AI-powered skin disease detection app, including all the roadblocks and pivots.",
      date: "2024-11-15",
      readTime: "10 min read",
      tags: ["AI", "Healthcare", "Flask", "React", "Project"],
      slug: "malamaai-development-journey",
      category: "project-logs" as keyof typeof categoryConfig,
    },
    {
      id: 6,
      title: "Building AI Healthcare Solutions: Lessons from MalamaAI",
      excerpt:
        "What I learned while building an AI-powered skin disease detection app during the Lokahi Healthcare hackathon.",
      date: "2024-11-10",
      readTime: "6 min read",
      tags: ["AI", "Healthcare", "Machine Learning"],
      slug: "building-malamaai-healthcare-ai",
      category: "professional" as keyof typeof categoryConfig,
      mediumUrl: "https://medium.com/@roha.pathan125/building-malamaai-ghi789",
    },
  ]

  const filteredPosts =
    selectedCategory === "all" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-emerald-400">roha</span>
            <span className="text-zinc-300">.blog()</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Technical deep-dives, error logs, learning notes, and project development stories from a curious software
            engineering student
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Filter size={20} className="text-zinc-400" />
            <span className="text-zinc-400 font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {Object.entries(categoryConfig).map(([key, config]) => (
              <Button
                key={key}
                variant={selectedCategory === key ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(key as keyof typeof categoryConfig)}
                className={
                  selectedCategory === key
                    ? `${config.bgColor} ${config.textColor} ${config.borderColor} hover:opacity-80`
                    : `border-zinc-700 text-zinc-400 hover:${config.textColor} hover:${config.borderColor} bg-transparent`
                }
              >
                {config.name}
                <span className="ml-2 text-xs opacity-70">
                  ({key === "all" ? blogPosts.length : blogPosts.filter((post) => post.category === key).length})
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:gap-12">
          {filteredPosts.map((post) => {
            const categoryInfo = categoryConfig[post.category]
            return (
              <article
                key={post.id}
                className={`bg-zinc-800 rounded-lg p-8 border ${categoryInfo.borderColor} hover:border-opacity-80 transition-all group cursor-pointer`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-zinc-400 mb-2 md:mb-0">
                    <Calendar size={16} className="mr-2" />
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="mx-2">•</span>
                    <Clock size={16} className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className={`${categoryInfo.bgColor} ${categoryInfo.textColor} ${categoryInfo.borderColor}`}>
                      {categoryInfo.name}
                    </Badge>
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-zinc-700 text-zinc-300 border border-zinc-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <h2
                  className={`text-2xl font-bold ${categoryInfo.textColor} group-hover:opacity-80 transition-opacity mb-3`}
                >
                  {post.title}
                </h2>

                <p className="text-zinc-300 leading-relaxed mb-6">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`${categoryInfo.textColor} hover:${categoryInfo.textColor} hover:bg-${categoryInfo.color}-900/20 p-0`}
                    >
                      Read more
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  {categoryInfo.hasMedium && post.mediumUrl && (
                    <a
                      href={post.mediumUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-zinc-500 hover:text-emerald-400 transition-colors"
                    >
                      Read on Medium →
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        {/* No posts message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-400 text-lg">No posts found in this category yet.</p>
            <Button
              variant="outline"
              onClick={() => setSelectedCategory("all")}
              className="mt-4 border-emerald-700 text-emerald-400 hover:bg-emerald-900/20 bg-transparent"
            >
              View All Posts
            </Button>
          </div>
        )}

        {/* Coming Soon Section */}
        <div className="text-center mt-16 p-8 bg-zinc-800 rounded-lg border border-zinc-700">
          <h3 className="text-xl font-semibold text-emerald-400 mb-2">More Posts Coming Soon!</h3>
          <p className="text-zinc-400">
            I'm constantly learning and building new things. Check back regularly for fresh content across all
            categories!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
