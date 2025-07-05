import { Calendar, Users, ExternalLink, Award } from "lucide-react"

export function Hackathons() {
  const hackathons = [
    {
      id: 1,
      name: "Bahria University Techathon",
      placement: "6th place out of 57 teams",
      team: "Tecna's Tribe",
      date: "2024",
      description: "Inter-institute hackathon focusing on innovative tech solutions",
      type: "competition",
      skills: ["Team Leadership", "Problem Solving", "Innovation"],
      highlight: false,
    },
    {
      id: 2,
      name: "LabLabAI Lokahi HealthCare Innovation",
      placement: "Participant",
      team: "CodeDucklings",
      project: "MalamaAI",
      date: "2024",
      description:
        "Healthcare-focused AI innovation hackathon where we built MalamaAI - an AI-powered skin disease detection application",
      type: "hackathon",
      skills: ["Healthcare AI", "Machine Learning", "Next.js", "Flask"],
      certificateLink: "https://lablab.ai/u/@roha_pathan282/cm7jn1qik002t14ipj50t63yc",
      projectLink: "https://lablab.ai/event/lokahi-innovation-in-healthcare/codeducklings/malamaai",
    },
    {
      id: 3,
      name: "Google Vertex AI Agent Builder",
      placement: "Participant",
      project: "SkinAI",
      date: "2024",
      description: "Building AI agents using Google's Vertex AI platform",
      type: "hackathon",
      skills: ["AI/ML", "Google Cloud", "Agent Development"],
      projectLink: "https://devpost.com/software/skinai-ufobl8",
    },
    {
      id: 4,
      name: "LabLabAI Assistant API Hackathon",
      placement: "Participant",
      date: "2024",
      description: "Creating applications using AI assistant APIs",
      type: "hackathon",
      skills: ["API Integration", "AI Assistants", "Full-stack Development"],
      certificateLink: "https://lablab.ai/u/@roha_pathan282/clwrzm2dz0006gdq2j4t4qwf8",
    },
    {
      id: 5,
      name: "LabLabAI Langflow Hackathon",
      placement: "Participant",
      team: "RohaBeCoding",
      project: "Accessible UI",
      date: "2024",
      description: "Building AI workflows using Langflow platform",
      type: "hackathon",
      skills: ["Langflow", "AI Workflows", "No-code AI"],
      projectLink: "https://lablab.ai/event/langflow-hackathon/rohabecoding/accessible-ui",
    },
  ]

  return (
    <div className="space-y-6">
      {hackathons.map((hackathon) => (
        <div
          key={hackathon.id}
          className={`bg-zinc-800 rounded-lg p-6 border transition-all group ${
            hackathon.highlight
              ? "border-emerald-500/50 bg-emerald-900/5"
              : "border-zinc-700 hover:border-emerald-500/50"
          }`}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <Calendar className="text-emerald-400 mr-3" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  {hackathon.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-zinc-400 mt-1">
                  <span className="text-emerald-400">{hackathon.placement}</span>
                  {hackathon.team && (
                    <>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Users size={12} />
                        <span>{hackathon.team}</span>
                      </div>
                    </>
                  )}
                  {hackathon.project && (
                    <>
                      <span>•</span>
                      <span className="text-emerald-300">{hackathon.project}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <span className="text-xs bg-zinc-700 px-2 py-1 rounded text-zinc-300">{hackathon.date}</span>
          </div>

          <p className="text-zinc-300 mb-4 text-sm leading-relaxed">{hackathon.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {hackathon.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-2 py-1 rounded-full bg-emerald-900/30 text-emerald-300 border border-emerald-700"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Links Section */}
          {(hackathon.certificateLink || hackathon.projectLink) && (
            <div className="flex flex-wrap gap-3 pt-3 border-t border-zinc-700">
              {hackathon.certificateLink && (
                <a
                  href={hackathon.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <Award size={16} />
                  <span>View Certificate</span>
                  <ExternalLink size={12} />
                </a>
              )}
              {hackathon.projectLink && (
                <a
                  href={hackathon.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <Calendar size={16} />
                  <span>View Project</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
