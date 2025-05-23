export function BlogPreview() {
  const blogPosts = [
    {
      id: 1,
      title: "Why Mechanical Keyboards Are Worth The Hype",
      excerpt:
        "My journey into the rabbit hole of mechanical keyboards and why I can't stop buying switches and keycaps.",
      date: "April 15, 2023",
      readTime: "5 min read",
      tags: ["Hobbies", "Tech", "Gear"],
    },
    {
      id: 2,
      title: "My Favorite Sci-Fi Books of 2023",
      excerpt:
        "A review of the most mind-bending science fiction I've read this year, from space operas to cyberpunk dystopias.",
      date: "March 2, 2023",
      readTime: "8 min read",
      tags: ["Books", "Sci-Fi", "Reviews"],
    },
    {
      id: 3,
      title: "The Perfect Cup: My Coffee Brewing Experiments",
      excerpt: "Documenting my obsessive journey to brew the perfect cup of coffee at home with minimal equipment.",
      date: "January 18, 2023",
      readTime: "6 min read",
      tags: ["Coffee", "Hobbies", "Experiments"],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-zinc-600 transition-colors"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-zinc-400">{post.date}</span>
            <span className="text-xs bg-zinc-700 px-2 py-1 rounded text-zinc-300">{post.readTime}</span>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-emerald-400">{post.title}</h3>

          <p className="text-zinc-300 mb-4 line-clamp-3">{post.excerpt}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 rounded-full bg-zinc-700 text-zinc-300">
                {tag}
              </span>
            ))}
          </div>

          <a href="#" className="text-emerald-400 hover:text-emerald-300 text-sm">
            Read more →
          </a>
        </div>
      ))}
    </div>
  )
}
