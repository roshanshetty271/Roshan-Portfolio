import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import CursorFlashlight from "@/components/ui/CursorFlashlight";

export const metadata: Metadata = {
  title: "Roshan Shetty | Software Engineer",
  description: "Full-Stack Software Engineer with AI/ML expertise. Building intelligent systems with RAG pipelines, distributed architectures, and modern web technologies. Based in Boston, MA.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "AI/ML Engineer",
    "React",
    "Python",
    "TypeScript",
    "Next.js",
    "RAG",
    "Machine Learning",
    "Boston",
    "Northeastern University",
  ],
  authors: [{ name: "Roshan Shetty", url: "https://github.com/roshanshetty271" }],
  creator: "Roshan Shetty",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roshanshetty.dev",
    siteName: "Roshan Shetty Portfolio",
    title: "Roshan Shetty | Software Engineer",
    description: "Full-Stack Software Engineer with AI/ML expertise. Building intelligent systems that make a difference.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roshan Shetty - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roshan Shetty | Software Engineer",
    description: "Full-Stack Software Engineer with AI/ML expertise. Building intelligent systems that make a difference.",
    images: ["/og-image.png"],
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
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://roshanshetty.dev"),
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Roshan Shetty",
  jobTitle: "Software Engineer",
  description: "Full-Stack Software Engineer with AI/ML expertise",
  url: "https://roshanshetty.dev",
  email: "shetty.ros@northeastern.edu",
  sameAs: [
    "https://github.com/roshanshetty271",
    "https://linkedin.com/in/roshanshetty271",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Northeastern University",
  },
  knowsAbout: [
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Machine Learning",
    "RAG",
    "Distributed Systems",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Boston",
    addressRegion: "MA",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {/* Cursor flashlight effect */}
          <CursorFlashlight />

          {/* Main content */}
          <div className="relative overflow-hidden">
            <Header />
            <main className="relative overflow-x-hidden">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

