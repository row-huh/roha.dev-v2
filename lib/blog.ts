import fs from "fs"
import path from "path"
import matter from "gray-matter"

const blogDirectory = path.join(process.cwd(), "content/blog")

export interface BlogPost {
  slug: string
  title: string
  date: string
  readTime: string
  category: string
  tags: string[]
  excerpt: string
  content: string
  mediumUrl?: string
}

// Category configuration
export const categoryConfig = {
  professional: {
    name: "Professional",
    color: "emerald",
    bgColor: "bg-emerald-900/20",
    borderColor: "border-emerald-700",
    textColor: "text-emerald-400",
    hasMedium: true,
  },
  error: {
    name: "Error Logs",
    color: "red",
    bgColor: "bg-red-900/20",
    borderColor: "border-red-700",
    textColor: "text-red-400",
    hasMedium: false,
  },
  learning: {
    name: "Learning",
    color: "blue",
    bgColor: "bg-blue-900/20",
    borderColor: "border-blue-700",
    textColor: "text-blue-400",
    hasMedium: false,
  },
  project: {
    name: "Project Logs",
    color: "purple",
    bgColor: "bg-purple-900/20",
    borderColor: "border-purple-700",
    textColor: "text-purple-400",
    hasMedium: false,
  },
}

function generateExcerpt(content: string, maxLength = 200): string {
  // Remove markdown formatting and get plain text
  const plainText = content
    .replace(/^---[\s\S]*?---/, "") // Remove frontmatter
    .replace(/#{1,6}\s+/g, "") // Remove headers
    .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold
    .replace(/\*(.*?)\*/g, "$1") // Remove italic
    .replace(/`(.*?)`/g, "$1") // Remove inline code
    .replace(/```[\s\S]*?```/g, "") // Remove code blocks
    .replace(/\[([^\]]+)\]$$[^)]+$$/g, "$1") // Remove links, keep text
    .replace(/\n+/g, " ") // Replace newlines with spaces
    .trim()

  // Get first few sentences up to maxLength
  if (plainText.length <= maxLength) {
    return plainText
  }

  const truncated = plainText.substring(0, maxLength)
  const lastSentence = truncated.lastIndexOf(".")

  if (lastSentence > maxLength * 0.7) {
    return truncated.substring(0, lastSentence + 1)
  }

  return truncated.substring(0, truncated.lastIndexOf(" ")) + "..."
}

export function getAllBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(blogDirectory)
  const allPostsData = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(blogDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")

      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        readTime: data.readTime,
        category: data.category,
        tags: data.tags || [],
        excerpt: generateExcerpt(content),
        content,
        mediumUrl: data.mediumUrl,
      } as BlogPost
    })

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      readTime: data.readTime,
      category: data.category,
      tags: data.tags || [],
      excerpt: generateExcerpt(content),
      content,
      mediumUrl: data.mediumUrl,
    } as BlogPost
  } catch (error) {
    return null
  }
}

export async function getBlogPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllBlogPosts()
  return allPosts.filter((post) => post.category === category)
}
