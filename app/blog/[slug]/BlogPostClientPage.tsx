"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import { categoryConfig } from "@/lib/categoryconfig"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

interface BlogPost {
  slug: string
  title: string
  content: string
  category: string
  tags: string[]
  date: string
  readTime: string
  mediumUrl?: string
}

export default function BlogPostClientPage({ post }: { post: BlogPost }) {
  const categoryInfo = categoryConfig[post.category as keyof typeof categoryConfig]

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="outline" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 bg-transparent">
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge className={`${categoryInfo.bgColor} ${categoryInfo.textColor} ${categoryInfo.borderColor}`}>
                {categoryInfo.name}
              </Badge>
              <div className="flex items-center text-sm text-zinc-400">
                <Calendar size={14} className="mr-1" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center text-sm text-zinc-400">
                <Clock size={14} className="mr-1" />
                {post.readTime}
              </div>
            </div>

            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${categoryInfo.textColor}`}>{post.title}</h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-zinc-700 text-zinc-300 border-zinc-600">
                  {tag}
                </Badge>
              ))}
            </div>

            {categoryInfo.hasMedium && post.mediumUrl && (
              <div className="mb-6">
                <a
                  href={post.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Also available on Medium
                </a>
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="prose prose-invert prose-zinc max-w-none">
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "")
                  return !inline && match ? (
                    <SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div" {...props}>
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
                h1: ({ children }) => (
                  <h1 className={`text-3xl font-bold mt-8 mb-4 ${categoryInfo.textColor}`}>{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className={`text-2xl font-bold mt-6 mb-3 ${categoryInfo.textColor}`}>{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className={`text-xl font-bold mt-4 mb-2 ${categoryInfo.textColor}`}>{children}</h3>
                ),
                blockquote: ({ children }) => (
                  <blockquote className={`border-l-4 ${categoryInfo.borderColor} pl-4 italic text-zinc-300`}>
                    {children}
                  </blockquote>
                ),
                a: ({ children, href }) => (
                  <a
                    href={href}
                    className={`${categoryInfo.textColor} hover:underline`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-zinc-700">
            <div className="flex items-center justify-between">
              <div className="text-zinc-400">
                <p>
                  Published on{" "}
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              {categoryInfo.hasMedium && post.mediumUrl && (
                <a
                  href={post.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Read on Medium
                </a>
              )}
            </div>
          </footer>
        </article>

        {/* Related Posts */}
        <section className="mt-16">
          <Card className="bg-zinc-800/30 border-zinc-700">
            <CardHeader>
              <h3 className="text-xl font-bold text-emerald-400">More Posts</h3>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <Link href="/blog">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">View All Blog Posts</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
