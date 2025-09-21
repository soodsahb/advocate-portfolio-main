import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowLeft, Share2, Tag } from "lucide-react"
import Link from "next/link"

// This would typically come from a database or CMS
const blogPost = {
  id: 1,
  title: "Property Law in Bihar – Complete Guide 2024",
  excerpt:
    "Comprehensive guide to property laws, registration procedures, and common disputes in Bihar state with recent amendments and court judgments.",
  content: `
    <h2>Introduction to Property Law in Bihar</h2>
    <p>Property law in Bihar has undergone significant changes in recent years, with new amendments and court judgments shaping the legal landscape. This comprehensive guide covers everything you need to know about property transactions, disputes, and legal procedures in Bihar.</p>
    
    <h2>Key Aspects of Property Law</h2>
    <h3>1. Property Registration Process</h3>
    <p>The property registration process in Bihar involves several steps:</p>
    <ul>
      <li>Document verification and due diligence</li>
      <li>Payment of stamp duty and registration fees</li>
      <li>Execution of sale deed</li>
      <li>Registration at Sub-Registrar office</li>
    </ul>
    
    <h3>2. Common Property Disputes</h3>
    <p>Property disputes in Bihar commonly involve:</p>
    <ul>
      <li>Title disputes and ownership claims</li>
      <li>Boundary disputes between neighbors</li>
      <li>Inheritance and succession issues</li>
      <li>Fraudulent transactions and forgery</li>
    </ul>
    
    <h2>Recent Legal Developments</h2>
    <p>The Bihar government has introduced several reforms to streamline property transactions and reduce disputes. Key developments include:</p>
    <ul>
      <li>Digital property records and online verification</li>
      <li>Simplified registration procedures</li>
      <li>Fast-track courts for property disputes</li>
      <li>Enhanced penalties for fraudulent transactions</li>
    </ul>
    
    <h2>Legal Remedies and Court Procedures</h2>
    <p>When property disputes arise, several legal remedies are available:</p>
    <ul>
      <li>Civil suits for declaration of title</li>
      <li>Injunction orders to prevent illegal possession</li>
      <li>Partition suits for joint properties</li>
      <li>Criminal complaints for fraud and forgery</li>
    </ul>
    
    <h2>Conclusion</h2>
    <p>Understanding property law in Bihar is crucial for anyone involved in real estate transactions. Always consult with experienced legal professionals to ensure your property rights are protected and transactions are conducted legally.</p>
  `,
  category: "Property Law",
  author: "Advocate Abhimanu Kumar Tripathi",
  date: "2024-01-15",
  readTime: "8 min read",
  tags: ["Property", "Bihar", "Registration", "Disputes", "Legal Guide"],
  image: "/placeholder.svg?height=400&width=800&text=Property+Law+Bihar",
}

const relatedPosts = [
  {
    id: 2,
    title: "How to File a Cybercrime Complaint in UP",
    category: "Cyber Law",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=300&text=Cybercrime+UP",
  },
  {
    id: 3,
    title: "New Criminal Law Amendments 2024",
    category: "Criminal Law",
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=300&text=Criminal+Law+2024",
  },
  {
    id: 4,
    title: "GST Compliance for Small Businesses",
    category: "Tax Law",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=300&text=GST+Compliance",
  },
]

export default function BlogPostPage() {
  return (
    <PageLayout>

      {/* Article Header */}
      <article className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 hover:bg-muted">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Button>
          </Link>

          {/* Article Meta */}
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {blogPost.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              {blogPost.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">{blogPost.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(blogPost.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{blogPost.readTime}</span>
              </div>
              <Button variant="outline" size="sm" className="ml-auto bg-transparent">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img
              src={blogPost.image || "/placeholder.svg"}
              alt={blogPost.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-5 w-5 text-muted-foreground" />
              <span className="font-semibold text-foreground">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <Card className="mt-12">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <img
                  src="/professional-indian-advocate-in-formal-attire.jpg"
                  alt="Advocate Abhimanu Kumar Tripathi"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">About {blogPost.author}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Advocate Abhimanu Kumar Tripathi is a senior legal practitioner with over 15 years of experience in property
                    law, criminal defense, and civil litigation. He practices in Bihar, Uttar Pradesh, and Jharkhand
                    courts and is known for his expertise in complex legal matters.
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                    <Button variant="outline" size="sm">
                      Contact Advocate
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs p-2">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
