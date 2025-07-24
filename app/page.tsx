import { Header } from "@/components/header"
import { Terminal } from "@/components/terminal"
import { Certifications } from "@/components/certifications"
import { Hackathons } from "@/components/hackathons"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { UniProjects } from "@/components/uni-projects"
import Link from "next/link"


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
            <p className="text-xl md:text-2xl text-zinc-400 mb-8">Organic Software Engineer</p>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            There’s no single box you can put me in. Call me a jack of all trades. <br />Backend? Got it. AI/ML? Got it. Data? Give me three days and I’ll figure it out. 
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Terminal />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-zinc-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-emerald-400">Projects</span>
            </h2>
            <p className="text-zinc-400 text-lg">Things I've built and problems I've solved</p>
          </div>
          <Projects />
        </div>
      </section>


      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4">
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
      <section id="hackathons" className="py-20 px-4 bg-zinc-800/50">
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

      {/* Uni Projects Section */}
        <section id="projects" className="py-20 px-4 bg-zinc-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-emerald-400">Uni Projects</span>
            </h2>
            <p className="text-zinc-400 text-lg">Stuff I built for uni. Didn't want to, but had no choice</p>
          </div>
          < UniProjects />
        </div>
      </section>


     {/* Random Projects Teaser Section */}
      <section className="py-16 px-4 bg-zinc-800/30">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-zinc-300">Still curious?</h3>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              There's some stuff I coded which either isn't resume worthy for being too satirical, didn't complete it or
              not proud of it
            </p>
            <Link href="/random-projects">
              <Button
                size="lg"
                className="bg-zinc-700 hover:bg-zinc-600 text-zinc-100 border border-zinc-600 hover:border-zinc-500 transition-all duration-300"
              >
                View My Chaotic Code Archive 🗂️
              </Button>
            </Link>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  )
}
