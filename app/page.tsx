import { Terminal } from "@/components/terminal"
import { ProjectTimeline } from "@/components/project-timeline"
import { AlgorithmVisualizer } from "@/components/algorithm-visualizer"
import { BlogPreview } from "@/components/blog-preview"
import { ChallengeModal } from "@/components/challenge-modal"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 font-mono">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section with Debug Panel */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-emerald-400">
                <span className="text-zinc-100">Hello, I'm </span>
                <span className="typing-animation">Roha Pathan</span>
              </h1>
              <p className="text-xl mb-6 text-zinc-300">Organic Software developer, problem solver, and perpetual learner.</p>
              <div className="flex space-x-4">
                <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors">
                  View Projects
                </button>
                <button className="px-6 py-2 border border-emerald-600 text-emerald-400 hover:bg-emerald-900/30 rounded-md transition-colors">
                  Contact Me
                </button>
              </div>
            </div>
            <div>
              <Terminal />
            </div>
          </div>
        </section>

        {/* Project Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-emerald-400">
            <span className="text-zinc-400">//</span> My Learning Journey
          </h2>
          <ProjectTimeline />
        </section>

        {/* Interactive Demo Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-emerald-400">
            <span className="text-zinc-400">//</span> Interactive Demos
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AlgorithmVisualizer />
            <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
              <h3 className="text-xl font-semibold mb-4">API Debugger</h3>
              <p className="text-zinc-400 mb-4">A tool I built to help visualize and debug API responses.</p>
              <div className="bg-zinc-950 p-4 rounded-md">
                <pre className="text-sm text-emerald-300">
                  <code>{`// Try it out!
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))`}</code>
                </pre>
              </div>
              <button className="mt-4 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-md transition-colors">
                Run Demo
              </button>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-emerald-400">
            <span className="text-zinc-400">//</span> Random Thoughts & Blog
          </h2>
          <BlogPreview />
        </section>

        {/* Easter Egg - Challenge Section (hidden by default) */}
        <div className="fixed bottom-4 right-4">
          <button
            className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
            title="Find the secret challenge"
          >
            <span className="text-emerald-400 text-xl">?</span>
          </button>
        </div>
        <ChallengeModal />
      </main>
      <Footer />
    </div>
  )
}
