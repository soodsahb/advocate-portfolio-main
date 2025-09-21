"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  Filter,
  BookOpen,
  Scale,
  Home,
  Building,
  Heart,
  Shield,
} from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Property Law in Bihar – Complete Guide 2024",
    excerpt:
      "Comprehensive guide to property laws, registration procedures, and common disputes in Bihar state with recent amendments and court judgments.",
    content: "Property law in Bihar has undergone significant changes in recent years...",
    category: "Property Law",
    author: "Advocate Abhimanu Kumar Tripathi",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Property", "Bihar", "Registration", "Disputes"],
    featured: true,
    image: "/placeholder.svg?height=300&width=500&text=Property+Law+Bihar",
  },
  {
    id: 2,
    title: "How to File a Cybercrime Complaint in UP - Step by Step",
    excerpt:
      "Detailed process for filing cybercrime complaints in Uttar Pradesh, required documents, and what to expect during investigation.",
    content: "With increasing digital transactions, cybercrime cases are rising...",
    category: "Cyber Law",
    author: "Advocate Abhimanu Kumar Tripathi",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["Cybercrime", "UP", "Complaint", "Investigation"],
    featured: true,
    image: "/placeholder.svg?height=300&width=500&text=Cybercrime+UP",
  },
  {
    id: 3,
    title: "New Criminal Law Amendments 2024: What You Need to Know",
    excerpt: "Analysis of recent amendments to criminal laws and their impact on ongoing cases and future proceedings.",
    content: "The recent criminal law amendments have brought significant changes...",
    category: "Criminal Law",
    author: "Advocate Abhimanu Kumar Tripathi",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["Criminal Law", "Amendments", "2024", "Legal Updates"],
    featured: false,
    image: "/placeholder.svg?height=300&width=500&text=Criminal+Law+2024",
  },
  {
    id: 4,
    title: "GST Compliance for Small Businesses in Jharkhand",
    excerpt:
      "Essential GST compliance requirements for small businesses operating in Jharkhand with practical tips and common mistakes to avoid.",
    content: "GST compliance can be challenging for small businesses...",
    category: "Tax Law",
    author: "Advocate Abhimanu Kumar Tripathi",
    date: "2023-12-28",
    readTime: "7 min read",
    tags: ["GST", "Jharkhand", "Small Business", "Compliance"],
    featured: false,
    image: "/placeholder.svg?height=300&width=500&text=GST+Jharkhand",
  },
  {
    id: 5,
    title: "Family Court Procedures: Divorce and Child Custody",
    excerpt:
      "Understanding family court procedures for divorce cases and child custody matters with timeline and documentation requirements.",
    content: "Family court procedures can be emotionally challenging...",
    category: "Family Law",
    author: "Advocate Abhimanu Kumar Tripathi",
    date: "2023-12-20",
    readTime: "9 min read",
    tags: ["Family Law", "Divorce", "Child Custody", "Court Procedures"],
    featured: false,
    image: "/placeholder.svg?height=300&width=500&text=Family+Court",
  },
  {
    id: 6,
    title: "Corporate Compliance Checklist for 2024",
    excerpt:
      "Essential compliance requirements for companies in 2024 including annual filings, board meetings, and regulatory updates.",
    content: "Corporate compliance is crucial for business operations...",
    category: "Corporate Law",
    author: "Advocate Abhimanu Kumar Tripathi",
    date: "2023-12-15",
    readTime: "5 min read",
    tags: ["Corporate", "Compliance", "2024", "Annual Filings"],
    featured: false,
    image: "/placeholder.svg?height=300&width=500&text=Corporate+Compliance",
  },
]

const categories = [
  { name: "All", icon: BookOpen, count: blogPosts.length },
  { name: "Criminal Law", icon: Shield, count: blogPosts.filter((post) => post.category === "Criminal Law").length },
  { name: "Civil Law", icon: Scale, count: blogPosts.filter((post) => post.category === "Civil Law").length },
  { name: "Property Law", icon: Home, count: blogPosts.filter((post) => post.category === "Property Law").length },
  {
    name: "Corporate Law",
    icon: Building,
    count: blogPosts.filter((post) => post.category === "Corporate Law").length,
  },
  { name: "Family Law", icon: Heart, count: blogPosts.filter((post) => post.category === "Family Law").length },
  { name: "Cyber Law", icon: Shield, count: blogPosts.filter((post) => post.category === "Cyber Law").length },
  { name: "Tax Law", icon: Scale, count: blogPosts.filter((post) => post.category === "Tax Law").length },
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showFilters, setShowFilters] = useState(false)

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <PageLayout>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance text-center">
            Legal Updates & Insights
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            Stay informed with the latest legal developments, case studies, and expert analysis from Bihar, Uttar
            Pradesh, and Jharkhand courts.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search legal articles, case studies, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg rounded-full border-2 border-border focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <Button
                    key={category.name}
                    variant={selectedCategory === category.name ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.name)}
                    className="flex items-center gap-2"
                  >
                    <IconComponent className="h-4 w-4" />
                    {category.name}
                    <Badge variant="secondary" className="ml-1">
                      {category.count}
                    </Badge>
                  </Button>
                )
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        {/* <User className="h-4 w-4" />
                        <span>{post.author}</span> */}
                        <span>•</span>
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group-hover:bg-primary group-hover:text-primary-foreground"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
            </h2>
            <p className="text-muted-foreground">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms or category filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg font-serif group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs p-2">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
  className="
    text-[18px] text-center md:text-left
    md:text-3xl
    font-serif font-bold mb-4
  "
>
  Stay Updated with Legal Insights
</h2>

          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly legal updates, case analyses, and expert insights delivered directly
            to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-primary-foreground text-foreground"
            />
            <Button variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60 mt-4">
            No spam. Unsubscribe anytime. Your privacy is protected.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
