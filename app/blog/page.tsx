"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, ExternalLink, Search, Filter } from "lucide-react"
import Link from "next/link"
import { getAllBlogPosts, categoryConfig } from "@/lib/blog"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")

  const allPosts = getAllBlogPosts()

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const getCategoryCount = (category: string) => {
    if (category === "all") return allPosts.length
    return allPosts.filter((post) => post.category === category).length
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-emerald-400">Blog</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Thoughts, experiences, and lessons learned on my journey as a developer
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={20} />
            <Input
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-400"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className={`${
                selectedCategory === "all"
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "border-zinc-600 text-zinc-300 hover:bg-zinc-800"
              }`}
            >
              <Filter size={16} className="mr-2" />
              All ({getCategoryCount("all")})
            </Button>
            {Object.entries(categoryConfig).map(([key, config]) => (
              <Button
                key={key}
                variant={selectedCategory === key ? "default" : "outline"}
                onClick={() => setSelectedCategory(key)}
                className={`${
                  selectedCategory === key
                    ? `bg-${config.color}-600 hover:bg-${config.color}-700 text-white`
                    : `border-${config.color}-700 ${config.textColor} hover:bg-${config.color}-900/20`
                }`}
              >
                {config.name} ({getCategoryCount(key)})
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => {
            const categoryInfo = categoryConfig[post.category as keyof typeof categoryConfig]

            return (
              <Card
                key={post.slug}
                className={`bg-zinc-800/50 border-zinc-700 hover:${categoryInfo.borderColor} transition-all duration-300 group`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={`${categoryInfo.bgColor} ${categoryInfo.textColor} ${categoryInfo.borderColor}`}>
                      {categoryInfo.name}
                    </Badge>
                    {categoryInfo.hasMedium && post.mediumUrl && (
                      <a
                        href={post.mediumUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-emerald-400 transition-colors"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <CardTitle className={`${categoryInfo.textColor} group-hover:text-opacity-80 transition-colors`}>
                    {post.title}
                  </CardTitle>

                  <CardDescription className="text-zinc-400">{post.excerpt}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-zinc-700 text-zinc-300 border-zinc-600"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className={`border-${categoryInfo.color}-700 ${categoryInfo.textColor} hover:bg-${categoryInfo.color}-900/20`}
                      >
                        Read more →
                      </Button>
                    </Link>

                    {categoryInfo.hasMedium && post.mediumUrl && (
                      <a
                        href={post.mediumUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-zinc-400 hover:text-emerald-400 transition-colors flex items-center"
                      >
                        <ExternalLink size={12} className="mr-1" />
                        Read on Medium
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-400 text-lg">No posts found matching your criteria.</p>
            <Button
              onClick={() => {
                setSelectedCategory("all")
                setSearchTerm("")
              }}
              variant="outline"
              className="mt-4 border-zinc-600 text-zinc-300 hover:bg-zinc-800"
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <Card className="bg-zinc-800/30 border-zinc-700 max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-emerald-400">Stay Updated</CardTitle>
              <CardDescription>
                Get notified when I publish new posts about development, learning, and project insights.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  placeholder="your@email.com"
                  className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-400"
                />
                <Button className="bg-emerald-600 hover:bg-emerald-700">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
