import Link from "next/link"
import { Star, Clock, Download, TrendingUp, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function MainNav() {
  return (
    <div className="border-b border-[#3a3a3a] bg-[#2a2a2a]">
      <div className="flex h-16 items-center px-4">
        <div className="mr-8 font-mono text-xl text-[#e9c46a]">
          <Link href="/">Mod Requests</Link>
        </div>
        <nav className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-[#e9c46a] hover:bg-[#3a3a3a]">
            <Star className="mr-2 h-4 w-4" />
            Highlighted requests
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-[#e9c46a] hover:bg-[#3a3a3a]">
            <Clock className="mr-2 h-4 w-4" />
            Recently requested
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-[#e9c46a] hover:bg-[#3a3a3a]">
            <Download className="mr-2 h-4 w-4" />
            Most supported
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-[#e9c46a] hover:bg-[#3a3a3a]">
            <TrendingUp className="mr-2 h-4 w-4" />
            Trending
          </Button>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400 rounded-[8px]" />
            <Input
              placeholder="Search requests..."
              className="w-64 pl-8 bg-[#1f1f1f] border-[#3a3a3a] text-gray-300 focus:border-[#e9c46a] rounded-[6px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

