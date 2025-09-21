import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Award, BookOpen, Users, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
           <h1
  className="
    text-[25px] text-center md:text-left
    md:text-5xl
    font-serif font-bold text-foreground mb-6 leading-tight
  "
>
  About Advocate Abhimanu Kumar Tripathi
</h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              A dedicated legal professional committed to delivering justice and protecting the rights 
              of clients across Bihar, Uttar Pradesh, and Jharkhand with integrity and expertise.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2 flex items-center">
                <Scale className="h-4 w-4 mr-2" />
                15+ Years Experience
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 flex items-center">
                <Award className="h-4 w-4 mr-2" />
                500+ Cases Won
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 flex items-center">
                <Users className="h-4 w-4 mr-2" />
                300+ Happy Clients
              </Badge>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/professional-indian-advocate-in-formal-attire.jpg"
              alt="Advocate Abhimanu Kumar Tripathi"
              className="w-72 md:w-80 h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Qualifications & Experience */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
  className="
    text-3xl md:text-4xl
    text-center md:text-left
    font-serif font-bold text-foreground mb-4
  "
>
  Qualifications & Experience
</h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strong educational background and extensive practical experience in the Indian legal system
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Education */}
            <Card className="shadow-md">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center">
                  <BookOpen className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-serif font-bold text-foreground">Education</h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="text-lg font-semibold">LL.B (Bachelor of Laws)</h4>
                    <p className="text-muted-foreground">Patna University, Bihar</p>
                    <p className="text-sm text-muted-foreground">2006-2009 • First Class with Distinction</p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="text-lg font-semibold">B.A. (Political Science)</h4>
                    <p className="text-muted-foreground">Magadh University, Bihar</p>
                    <p className="text-sm text-muted-foreground">2003-2006 • First Class</p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="text-lg font-semibold">Specialized Certifications</h4>
                    <ul className="text-muted-foreground text-sm space-y-1 list-disc pl-5">
                      <li>Cyber Law Certification - NALSAR University</li>
                      <li>Corporate Law Diploma - ICSI</li>
                      <li>Alternative Dispute Resolution - BCI</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Journey */}
            <Card className="shadow-md">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-serif font-bold text-foreground">Professional Journey</h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="text-lg font-semibold">Senior Advocate (2015-Present)</h4>
                    <p className="text-muted-foreground">Independent Practice</p>
                    <p className="text-sm text-muted-foreground">Handling complex civil, criminal, and corporate matters</p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="text-lg font-semibold">Associate Advocate (2009-2015)</h4>
                    <p className="text-muted-foreground">Kumar & Associates Law Firm</p>
                    <p className="text-sm text-muted-foreground">Specialized in property and family law cases</p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="text-lg font-semibold">Bar Council Registration</h4>
                    <p className="text-muted-foreground">Registration No: BIH/2009/12345</p>
                    <p className="text-sm text-muted-foreground">Enrolled with Bar Council of Bihar in 2009</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">My Mission & Values</h2>
          <div className="bg-card p-8 md:p-12 rounded-lg shadow-lg">
            <blockquote className="text-xl md:text-2xl leading-relaxed italic mb-8">
              "Justice delayed is justice denied. My commitment is to provide timely, effective, and ethical 
              legal representation to every client, ensuring their rights are protected and their voices are 
              heard in the corridors of justice."
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <Scale className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-center">Integrity</h3>
                <p className="text-sm text-muted-foreground">Upholding the highest ethical standards in all legal proceedings</p>
              </div>
              <div>
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-center">Client-Centric</h3>
                <p className="text-sm text-muted-foreground">Putting client interests first with personalized legal solutions</p>
              </div>
              <div>
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-center">Excellence</h3>
                <p className="text-sm text-muted-foreground">Striving for the best outcomes through thorough preparation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Practice */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center">Areas We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Providing comprehensive legal services across three major states in Eastern India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-md">
              <CardContent className="p-8 space-y-3">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-center">Bihar</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>Patna High Court</p>
                  <p>District Courts: Patna, Gaya, Muzaffarpur</p>
                  <p>Subordinate Courts</p>
                  <p>Consumer Forums</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center shadow-md">
              <CardContent className="p-8 space-y-3">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-center">Uttar Pradesh</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>Allahabad High Court</p>
                  <p>District Courts: Lucknow, Varanasi, Kanpur</p>
                  <p>Commercial Courts</p>
                  <p>Family Courts</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center shadow-md">
              <CardContent className="p-8 space-y-3">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-center">Jharkhand</h3>
                <div className="text-muted-foreground space-y-2">
                  <p>Jharkhand High Court</p>
                  <p>District Courts: Ranchi, Jamshedpur, Dhanbad</p>
                  <p>Industrial Tribunals</p>
                  <p>Revenue Courts</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
