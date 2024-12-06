import { Badge } from "@/components/ui/badge"

export function Sidebar() {
  const categories = [
    { name: "Gameplay", count: 156 },
    { name: "Graphics", count: 89 },
    { name: "UI/UX", count: 124 },
    { name: "Performance", count: 45 },
    { name: "Audio", count: 32 },
    { name: "Multiplayer", count: 67 },
    { name: "Tools", count: 93 },
  ]

  const tags = [
    { name: "Combat", count: 78 },
    { name: "Building", count: 145 },
    { name: "Automation", count: 234 },
    { name: "Transportation", count: 89 },
    { name: "Resources", count: 167 },
    { name: "Quality of Life", count: 198 },
  ]

  return (
    <div className="w-64 p-4 border-r border-[#3a3a3a] bg-[#2a2a2a] h-[calc(100vh-4rem)]">
      <div className="space-y-4">
        <div>
          <h2 className="mb-2 px-2 text-lg font-mono text-[#e9c46a] tracking-tight">
            Categories
          </h2>
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.name}
                className="w-full flex items-center justify-between px-2 py-1.5 text-sm hover:bg-[#3a3a3a] rounded-md text-gray-300 hover:text-[#e9c46a]"
              >
                <span>{category.name}</span>
                <Badge variant="secondary" className="bg-[#1f1f1f] text-gray-300 rounded-[8px]">{category.count}</Badge>
              </button>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-2 px-2 text-lg font-mono text-[#e9c46a] tracking-tight">
            Tags
          </h2>
          <div className="space-y-1">
            {tags.map((tag) => (
              <button
                key={tag.name}
                className="w-full flex items-center justify-between px-2 py-1.5 text-sm hover:bg-[#3a3a3a] rounded-md text-gray-300 hover:text-[#e9c46a]"
              >
                <span>{tag.name}</span>
                <Badge variant="secondary" className="bg-[#1f1f1f] text-gray-300 rounded-[8px]">{tag.count}</Badge>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

