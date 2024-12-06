import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThumbsUp, MessageSquare, Clock } from 'lucide-react'

interface RequestCardProps {
  title: string
  author: string
  description: string
  category: string
  supporters: number
  comments: number
  timeAgo: string
  imageUrl?: string
  requestType: 'Graphics' | 'Mod'
}

export function RequestCard({
  title,
  author,
  description,
  category,
  supporters,
  comments,
  timeAgo,
  imageUrl,
  requestType,
}: RequestCardProps) {
  const tagStyles = {
    Mod: 'bg-[#e9c46a] text-[#1f1f1f]',
    Graphics: 'bg-[#4cc9f0] text-[#1f1f1f]',
  }

  const defaultImages = {
    Mod: "https://raw.githubusercontent.com/VylSet/samples/refs/heads/main/placeholders/placeholder-2.png",
    Graphics: "https://raw.githubusercontent.com/VylSet/samples/refs/heads/main/placeholders/placeholder-1.png"
  }

  return (
    <Card className="factorio-card border border-[#3a3a3a] bg-[#2a2a2a]">
      <div className="flex">
        <div className="w-[200px] min-w-[200px] relative bg-[#1f1f1f]">
          <Image
            src={imageUrl || defaultImages[requestType]}
            alt={`Image for ${title}`}
            width={200}
            height={200}
            className="object-cover h-full"
          />
          <div className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold rounded shadow-md ${tagStyles[requestType]}`}>
            {requestType} Request
          </div>
        </div>
        <div className="flex-1">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-xl font-mono text-[#e9c46a]">{title}</CardTitle>
                <p className="text-sm text-gray-400">by <span className="text-[#e9c46a]">{author}</span></p>
              </div>
              <Badge className="bg-[#1f1f1f] text-[#e9c46a] border-[#3a3a3a] rounded-[8px]">{category}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-300">{description}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex space-x-4 text-sm text-gray-400">
              <div className="flex items-center">
                <ThumbsUp className="mr-1 h-4 w-4" />
                {supporters}
              </div>
              <div className="flex items-center">
                <MessageSquare className="mr-1 h-4 w-4" />
                {comments}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {timeAgo}
              </div>
            </div>
            <Button size="sm" className="factorio-button rounded-[6px]">View Details</Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}

