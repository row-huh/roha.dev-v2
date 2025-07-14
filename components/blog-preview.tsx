import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"
import { getAllBlogPosts, categoryConfig } from "@/lib/blog"

export function BlogPreview() {
  // Get the latest 3 blog posts
  const allPosts = getAllBlogPosts()
  const latestPosts = allPosts.slice(0, 3)

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="text-emerald-400">Blog Posts</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Thoughts, experiences, and lessons learned on my journey as a developer
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-12">
          {latestPosts.map((post) => {
            const categoryInfo = categoryConfig[post.category as keyof typeof categoryConfig]

            return (
              <Card
                key={post.slug}
                className={`bg-zinc-800 border-zinc-700 hover:border-zinc-600 transition-all duration-300 ${categoryInfo.borderColor} border-l-4`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={`${categoryInfo.bgColor} ${categoryInfo.textColor} ${categoryInfo.borderColor}`}>
                      {categoryInfo.name}
                    </Badge>
                    <div className="flex items-center text-sm text-zinc-400">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </div>

                  <CardTitle className={`text-xl ${categoryInfo.textColor} hover:text-zinc-100 transition-colors`}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>

                  <CardDescription className="text-zinc-400">{post.excerpt}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-zinc-500">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-zinc-700 text-zinc-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link href={`/blog/${post.slug}`}>
                      <Button size="sm" className={`bg-${categoryInfo.color}-600 hover:bg-${categoryInfo.color}-700`}>
                        Read more →
                      </Button>
                    </Link>

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
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button className="bg-emerald-600 hover:bg-emerald-700">View All Posts</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
