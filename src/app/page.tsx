import { MainNav } from "@/components/main-nav"
import { Sidebar } from "@/components/sidebar"
import { RequestCard } from "@/components/request-card"

const MOCK_REQUESTS = [
  {
    title: "Automated Factory Planning Tool",
    author: "factorio_fan",
    description: "A mod that helps players plan and optimize their factory layouts with AI assistance. Should include blueprint generation and efficiency calculations.",
    category: "Tools",
    supporters: 342,
    comments: 28,
    timeAgo: "2 hours ago",
    imageUrl: "https://raw.githubusercontent.com/VylSet/samples/refs/heads/main/placeholders/placeholder-2.png",
    requestType: "Mod" as const
  },
  {
    title: "Enhanced Weather System",
    author: "mod_enthusiast",
    description: "Add dynamic weather effects that impact gameplay, such as storms affecting power generation or rain increasing pollution absorption.",
    category: "Gameplay",
    supporters: 256,
    comments: 15,
    timeAgo: "5 hours ago",
    imageUrl: "https://raw.githubusercontent.com/VylSet/samples/refs/heads/main/placeholders/placeholder-2.png",
    requestType: "Mod" as const
  },
  {
    title: "Realistic Terrain Textures",
    author: "graphics_guru",
    description: "High-resolution terrain textures that blend seamlessly and add more variety to the game world. Includes new biome-specific ground textures.",
    category: "Graphics",
    supporters: 189,
    comments: 12,
    timeAgo: "1 day ago",
    imageUrl: "https://raw.githubusercontent.com/VylSet/samples/refs/heads/main/placeholders/placeholder-1.png",
    requestType: "Graphics" as const
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1f1f1f]">
      <MainNav />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-mono text-[#e9c46a] mb-6">Browse trending mod requests</h1>
          <div className="grid gap-6">
            {MOCK_REQUESTS.map((request) => (
              <RequestCard key={request.title} {...request} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

