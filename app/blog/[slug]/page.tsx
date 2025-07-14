import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"

// Blog post categories with their colors
const categoryConfig = {
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

// This would typically come from a CMS or markdown files
const blogPosts = {
  "how-computers-play-games": {
    title: "How computers play games and why are they so good at it?",
    excerpt: "After trying both sides of web development, here's why I fell in love with servers, databases, and APIs.",
    date: "2024-12-15",
    readTime: "5 min read",
    tags: ["Backend", "Career", "Personal"],
    category: "professional" as keyof typeof categoryConfig,
    mediumUrl: "https://medium.com/@roha.pathan125/why-backend-over-frontend-abc123",
    content: `
    
# Minimax

Computers are pretty amazing at playing games, whether it’s a simple one like Tic-Tac-Toe or more challenging ones like Go or Chess. Behind the scenes, they use some really clever algorithms, with one of the main ones being minimax!
Minimax

## Minimax is a popular algorithm used in games like Tic-Tac-Toe, Chess, Go, and many others. But before we get into the details, let’s break down what minimax is all about. It’s an algorithm that carefully explores all possible moves before making a decision. So, since I have the opportunity, let me tell you all about it!


## How Minimax works

To keep things clear, we’ll use Tic-Tac-Toe as our example, but remember, the same principles apply to any other game. Before we dive in, I’ll introduce some terminology to help you follow along and make the text sound a bit more engaging.

**Agent** — This term generally refers to the AI that is playing the game.

**State** — A state is a snapshot of the game’s current configuration.

Minimax is an algorithm which is used in adversarial games: which are games in which you are playing against another player. Mortal Kombat is an adversarial game, while games such are Overcooked and Minecraft are not adversarial in nature.

The main principle of minimax is representing states using numbers. That is, we assign numbers to three possible outcomes of the game, such as
**1 = agent’s opponent winning**,
**0 = the game ending in a draw**,
**-1 = agent winning**

These numerical values are referred to as ‘utility’. Now, which utility is best for the AI? It’s -1 (agent wins), which is also the lowest value. The agent aims for the lowest possible score because that means it’s winning or to ensure that the opponent isn’t winning. This role makes the AI a “minimizing player.” However, if you switch the roles, the AI becomes a “maximizing player” and aims to achieve a higher score. The principle remains the same.

For the sake of this explanation, let’s focus on the AI being a “minimizing player.” The main goal of the minimizing player isn’t just to achieve a -1 but to minimize the score as much as possible. So, the AI would prefer a score of 0 over 1, and if there’s an opportunity to get a -1, it would choose that over a 0.
##Here’s the logic:

    Base Case:

        If the game is over in the current state:

            Return the utility of the state.

    Maximizing Player’s Turn (isMaximizingPlayer = true):

        Initialize maxEval to -infinity.

        For each possible move in state:

            Calculate eval as minimax(newState, depth + 1, false).

            Update maxEval to max(maxEval, eval).

        Return maxEval.

    Minimizing Player’s Turn (isMaximizingPlayer = false):

        Initialize minEval to +infinity.

        For each possible move in state:

            Calculate eval as minimax(newState, depth + 1, true).

            Update minEval to min(minEval, eval).

        Return minEval.

Function: findBestMove(state)

Inputs:

    state: The current game state.

Output:

    Returns the best move for the maximizing player (AI).

Steps:

    Initialize bestEval to -infinity.

    Initialize bestMove to null.

    For each possible move in state:
    — Calculate eval as minimax(newState, 0, false).
    — If eval > bestEval:
    — Update bestEval to eval.
    — Update bestMove to move.

    Return bestMove.

That’s the gist of Minimax, but here’s a big issue: Minimax checks out all possible game states before making a decision. It’s fine for simple games like Tic-Tac-Toe where there aren’t too many states to look at. But think about Chess — there are tons of possible states, so using regular Minimax just isn’t practical. That’s where Alpha-Beta pruning comes in. It’s a trick to speed things up by skipping some of the calculations. I know you might be thinking why alpha? why beta? Guess we need another crash course on more jargons!
1. Alpha:

The best value that the maximizing player currently can guarantee at that level or above.
2. Beta:

The best value that the minimizing player currently can guarantee at that level or above.
Here’s how the pruning works:
Maximizing Player (AI) Perspective:

    Alpha starts at negative infinity.

    When evaluating child nodes, if a node’s value is greater than Alpha, then Alpha is updated to this new value.

    If Alpha becomes greater than or equal to Beta, there’s no need to evaluate further nodes in this branch, as the minimizing player will not choose this branch (because there’s a better option available).

Minimizing Player (Opponent) Perspective:

    Beta starts at positive infinity.

    When evaluating child nodes, if a node’s value is less than Beta, then Beta is updated to this new value.

    If Beta becomes less than or equal to Alpha, there’s no need to evaluate further nodes in this branch, as the maximizing player will not choose this branch (because there’s a better option available).

Now, Consider the following;

An example game tree
Evaluating Node B:

    The score from B is 3, which becomes the best score for the maximizing player.

Evaluating Node C:

    The score from C is 2, which becomes the best score for the minimizing player.

Since the maximizing player’s best score (3) is already better than the minimizing player’s best score (2), there’s no need to evaluate Node C’s second child (score 6).
    `,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  const categoryInfo = categoryConfig[post.category]

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400 mb-6">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${categoryInfo.textColor}`}>{post.title}</h1>

          <p className="text-xl text-zinc-300 mb-6">{post.excerpt}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className={`${categoryInfo.bgColor} ${categoryInfo.textColor} ${categoryInfo.borderColor}`}>
              {categoryInfo.name}
            </Badge>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-zinc-800 text-zinc-300 border border-zinc-700">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Medium Link - Only show for professional posts */}
          <div className="flex items-center justify-between border-b border-zinc-700 pb-6">
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
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-emerald max-w-none">
          <div
            className="text-zinc-300 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: post.content
                .split("\n")
                .map((line) => {
                  if (line.startsWith("# ")) {
                    return `<h1 class="text-2xl font-bold ${categoryInfo.textColor} mt-8 mb-4">${line.slice(2)}</h1>`
                  } else if (line.startsWith("## ")) {
                    return `<h2 class="text-xl font-semibold ${categoryInfo.textColor} mt-6 mb-3">${line.slice(3)}</h2>`
                  } else if (line.startsWith("### ")) {
                    return `<h3 class="text-lg font-medium ${categoryInfo.textColor} mt-4 mb-2">${line.slice(4)}</h3>`
                  } else if (line.startsWith("- **") && line.includes("**:")) {
                    const [, boldText, rest] = line.match(/- \*\*(.*?)\*\*: (.*)/) || []
                    return `<li class="mb-2"><strong class="${categoryInfo.textColor}">${boldText}</strong>: ${rest}</li>`
                  } else if (line.startsWith("- ")) {
                    return `<li class="mb-1">${line.slice(2)}</li>`
                  } else if (line.startsWith("```")) {
                    if (line.length > 3) {
                      return `<pre class="bg-zinc-800 p-4 rounded-lg overflow-x-auto border border-zinc-700"><code class="text-sm">`
                    } else {
                      return `</code></pre>`
                    }
                  } else if (line.trim() === "") {
                    return "<br>"
                  } else {
                    return `<p class="mb-4">${line}</p>`
                  }
                })
                .join(""),
            }}
          />
        </article>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-zinc-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-zinc-400">
              <p>Thanks for reading! Feel free to reach out if you have any questions.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/blog">
                <Button
                  variant="outline"
                  className={`border-${categoryInfo.color}-700 ${categoryInfo.textColor} hover:bg-${categoryInfo.color}-900/20 bg-transparent`}
                >
                  More Posts
                </Button>
              </Link>
              <Link href="/contact">
                <Button className={`bg-${categoryInfo.color}-600 hover:bg-${categoryInfo.color}-700`}>
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </footer>
      </main>

      <Footer />
    </div>
  )
}
