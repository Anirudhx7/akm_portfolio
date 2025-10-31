"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Shield, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { SocialLinks } from "@/components/social-links"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="inline-block font-heading font-bold">CyberSecPro</span>
          </Link>
          <MainNav />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden items-center space-x-2 md:flex">
            <SocialLinks />
            <Button variant="outline" size="sm" asChild>
              <a href="/resume.pdf" download="Alex_Johnson_Resume.pdf" className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </nav>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
