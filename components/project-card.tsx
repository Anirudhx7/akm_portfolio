"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  category: string
  repoLink?: string
  caseStudy: {
    challenge: string
    approach: string
    solution: string
    outcome: string
    tools: string[]
    images?: string[]
  }
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  category,
  repoLink,
  caseStudy,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=200&width=300"}
          alt={`Screenshot of ${title} project`}
          width={300}
          height={200}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              Case Study
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{category.charAt(0).toUpperCase() + category.slice(1)} Project</DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="challenge" className="mt-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="challenge">Challenge</TabsTrigger>
                <TabsTrigger value="approach">Approach</TabsTrigger>
                <TabsTrigger value="solution">Solution</TabsTrigger>
                <TabsTrigger value="outcome">Outcome</TabsTrigger>
              </TabsList>
              <TabsContent value="challenge" className="space-y-4 mt-4">
                <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                  <Image
                    src={image || "/placeholder.svg?height=200&width=600"}
                    alt={`${title} project challenge visualization`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-lg font-medium">The Challenge</h4>
                <p className="text-muted-foreground">{caseStudy.challenge}</p>
              </TabsContent>
              <TabsContent value="approach" className="space-y-4 mt-4">
                <h4 className="text-lg font-medium">Methodology & Approach</h4>
                <p className="text-muted-foreground">{caseStudy.approach}</p>
                <div>
                  <h5 className="text-sm font-medium mb-2">Tools & Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className="bg-secondary/50">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="solution" className="space-y-4 mt-4">
                <h4 className="text-lg font-medium">The Solution</h4>
                <p className="text-muted-foreground">{caseStudy.solution}</p>
                {caseStudy.images && caseStudy.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {caseStudy.images.map((img, index) => (
                      <div key={index} className="relative h-[150px] rounded-md overflow-hidden">
                        <Image
                          src={img || "/placeholder.svg?height=150&width=300"}
                          alt={`${title} solution image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
              <TabsContent value="outcome" className="space-y-4 mt-4">
                <h4 className="text-lg font-medium">Results & Impact</h4>
                <p className="text-muted-foreground">{caseStudy.outcome}</p>
                <div className="flex justify-end gap-2 mt-6">
                  {repoLink && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={repoLink} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Link>
                    </Button>
                  )}
                  <Button size="sm" asChild>
                    <Link href={link} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Project
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
        <Button variant="ghost" size="sm" asChild>
          <Link href={link} className="group">
            View Details
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
