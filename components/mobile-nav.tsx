"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Shield, Download, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <div className="flex items-center justify-between border-b pb-4">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-heading font-bold">CyberSecPro</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu">
            <X className="h-5 w-5" />
          </Button>
        </div>
        <nav className="flex flex-col gap-4 py-4" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Separator className="my-4" />
        <div className="flex justify-center space-x-4 my-4">
          <Button variant="ghost" size="icon" asChild aria-label="GitHub">
            <Link href="https://github.com/Anirudhx7" target="_blank" rel="noreferrer">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
            <Link href="https://linkedin.com/in/anirudh-mehandru" target="_blank" rel="noreferrer">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="Twitter">
            <Link href="https://twitter.com/MehandruAnirudh" target="_blank" rel="noreferrer">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="Email">
            <Link href="mailto:anirudh.mehandru@example.com">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="mt-auto">
          <Button className="w-full" asChild>
            <a href="/resume.pdf" download="Anirudh_Mehandru_Resume.pdf" className="flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
