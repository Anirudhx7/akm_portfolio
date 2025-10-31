import { Quote } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  image: string
  company?: string
}

export function TestimonialCard({ quote, name, title, image, company }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col card-hover">
      <CardContent className="pt-6 flex-1">
        <Quote className="h-8 w-8 text-primary/20 mb-2" />
        <p className="text-muted-foreground italic">"{quote}"</p>
      </CardContent>
      <CardFooter className="flex items-center gap-4 pt-2">
        <Avatar className="h-12 w-12">
          <AvatarImage src={image || "/placeholder.svg?height=100&width=100"} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">
            {title}
            {company ? `, ${company}` : ""}
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}
