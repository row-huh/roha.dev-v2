import { getAllBlogPosts } from "@/lib/blog"
import BlogPostClientPage from "./BlogPostClientPage"

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostClientPage params={params} />
}
