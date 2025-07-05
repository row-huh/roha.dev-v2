import { Header } from "@/components/header"
import { Terminal } from "@/components/terminal"
import { Certifications } from "@/components/certifications"
import { Hackathons } from "@/components/hackathons"
import { ChallengeModal } from "@/components/challenge-modal"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-emerald-400">Roha</span>
              <span className="text-zinc-300"> Pathan</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-8">Backend & Data Engineering Student</p>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
              Hardworking and passionate job seeker with strong organizational skills eager to secure entry-level Data
              Engineering or Backend Engineering internship position.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Terminal />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 bg-zinc-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-emerald-400">Certifications</span>
            </h2>
            <p className="text-zinc-400 text-lg">Verified achievements and completed coursework</p>
          </div>
          <Certifications />
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-emerald-400">Hackathons</span>
            </h2>
            <p className="text-zinc-400 text-lg">Competitive programming and innovation challenges</p>
          </div>
          <Hackathons />
        </div>
      </section>

      <ChallengeModal />
      <Footer />
    </div>
  )
}
