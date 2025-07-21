// app/blog/ServerBlogWrapper.tsx
import { getAllBlogPosts } from "@/lib/blog"
import { categoryConfig } from "@/lib/categoryconfig"
import BlogClient from "./BlogClient"

export default function ServerBlogWrapper() {
  const allPosts = getAllBlogPosts()

  return <BlogClient allPosts={allPosts} categoryConfig={categoryConfig} />
}
