// app/blog/[slug]/page.tsx
import { getAllBlogPosts, getBlogPost, categoryConfig } from "@/lib/blog"
import BlogPostClientPage from "./BlogPostClientPage"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostClientPage post={post} />
}
