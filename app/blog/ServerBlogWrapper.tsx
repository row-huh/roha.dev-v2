// app/blog/ServerBlogWrapper.tsx
import { getAllBlogPosts, categoryConfig } from "@/lib/blog"
import BlogClient from "./BlogClient"

export default function ServerBlogWrapper() {
  const allPosts = getAllBlogPosts()

  return <BlogClient allPosts={allPosts} categoryConfig={categoryConfig} />
}
