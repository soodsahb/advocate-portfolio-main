import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}
