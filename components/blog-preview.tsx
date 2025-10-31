import Image from "next/image"
import Link from "next/link"
import { Calendar, FileText, Clock } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface BlogPreviewProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
  slug: string
  author: {
    name: string
    avatar: string
  }
}

export function BlogPreview({ title, excerpt, date, readTime, category, image, slug, author }: BlogPreviewProps) {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=200&width=300"}
          alt={`Featured image for article: ${title}`}
          width={300}
          height={200}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <Badge variant="secondary">{category}</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            {date}
          </div>
        </div>
        <Link href={slug} className="hover:text-primary transition-colors">
          <h3 className="text-xl font-bold">{title}</h3>
        </Link>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm line-clamp-3">{excerpt}</p>
        <div className="flex items-center mt-4 space-x-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="font-medium">{author.name}</p>
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {readTime} read
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={slug} className="text-primary text-sm font-medium hover:underline flex items-center">
          Read Article
          <FileText className="ml-1 h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  )
}
