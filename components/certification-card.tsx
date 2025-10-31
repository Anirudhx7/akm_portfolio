import type React from "react"
import Link from "next/link"
import { ExternalLink, Calendar, Info } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface CertificationCardProps {
  title: string
  fullName: string
  issuer: string
  date: string
  description: string
  verificationLink: string
  icon: React.ReactNode
  details: {
    overview: string
    skills: string[]
    significance: string
    validityPeriod?: string
  }
}

export function CertificationCard({
  title,
  fullName,
  issuer,
  date,
  description,
  verificationLink,
  icon,
  details,
}: CertificationCardProps) {
  return (
    <Card className="flex flex-col card-hover">
      <CardHeader className="flex flex-col items-center text-center pb-2">
        {icon}
        <CardTitle className="mt-4">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{fullName}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>
            Issued {date} by {issuer}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" asChild>
                <Link href={verificationLink} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Verify
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Verify this certification</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm">
              <Info className="mr-2 h-4 w-4" />
              Details
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>
                {fullName} ({title})
              </DialogTitle>
              <DialogDescription>
                Issued by {issuer} in {date}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div>
                <h4 className="text-sm font-medium mb-1">Overview</h4>
                <p className="text-sm text-muted-foreground">{details.overview}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Skills Validated</h4>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  {details.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Industry Significance</h4>
                <p className="text-sm text-muted-foreground">{details.significance}</p>
              </div>
              {details.validityPeriod && (
                <div>
                  <h4 className="text-sm font-medium mb-1">Validity Period</h4>
                  <p className="text-sm text-muted-foreground">{details.validityPeriod}</p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
