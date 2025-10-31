import Link from "next/link"
import { Shield } from "lucide-react"
import { SocialLinks } from "@/components/social-links"

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-8" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="inline-block font-heading font-bold">CyberSecPro</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Protecting digital assets and securing networks with over 8 years of experience in cybersecurity.
            </p>
            <div className="flex space-x-4">
              <SocialLinks />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-sm text-muted-foreground hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-sm text-muted-foreground hover:text-primary">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#certifications" className="text-sm text-muted-foreground hover:text-primary">
                    Certifications
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#blog" className="text-sm text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <a href="/resume.pdf" download className="text-sm text-muted-foreground hover:text-primary">
                    Resume
                  </a>
                </li>
                <li>
                  <Link href="#testimonials" className="text-sm text-muted-foreground hover:text-primary">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Anirudh Mehandru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
