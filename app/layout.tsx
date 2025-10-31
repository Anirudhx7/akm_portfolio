import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Outfit, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://anirudhmehandru-security.com"),
  title: {
    default: "Anirudh Mehandru | Cybersecurity Professional",
    template: "%s | Anirudh Mehandru Cybersecurity",
  },
  description:
    "Experienced cybersecurity professional specializing in penetration testing, security architecture, and incident response with over 8 years of experience.",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "security architecture",
    "incident response",
    "ethical hacking",
    "OSCP",
    "CISSP",
    "security consultant",
    "vulnerability assessment",
    "red team",
    "blue team",
    "security automation",
  ],
  authors: [{ name: "Anirudh Mehandru" }],
  creator: "Anirudh Mehandru",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anirudhmehandru-security.com",
    title: "Anirudh Mehandru | Cybersecurity Professional",
    description:
      "Experienced cybersecurity professional specializing in penetration testing, security architecture, and incident response.",
    siteName: "Anirudh Mehandru Cybersecurity",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anirudh Mehandru - Cybersecurity Professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anirudh Mehandru | Cybersecurity Professional",
    description:
      "Experienced cybersecurity professional specializing in penetration testing, security architecture, and incident response.",
    images: ["/og-image.jpg"],
    creator: "@anirudhmehandru",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
