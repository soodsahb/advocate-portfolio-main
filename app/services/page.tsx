import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Scale,
  Shield,
  Home,
  Building,
  Heart,
  Laptop,
  FileText,
  Calculator,
  Phone,
  MessageCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Criminal Law",
    description: "Expert defense in criminal cases with comprehensive legal representation",
    color: "text-red-600",
    bgColor: "bg-red-50",
    services: [
      "Bail Applications & Anticipatory Bail",
      "Murder & Attempt to Murder Cases",
      "Theft, Robbery & Dacoity Cases",
      "Domestic Violence Cases",
      "Dowry & Harassment Cases",
      "Drug & Narcotic Cases (NDPS Act)",
      "Economic Offences & Fraud Cases",
      "Cybercrime & IT Act Violations",
    ],
    faqs: [
      {
        question: "How quickly can you file a bail application?",
        answer:
          "We can file bail applications within 24 hours of arrest, ensuring immediate legal representation and protection of your rights.",
      },
      {
        question: "What documents are needed for criminal defense?",
        answer:
          "FIR copy, arrest warrant (if any), witness statements, medical reports, and any evidence supporting your case.",
      },
    ],
  },
  {
    icon: Scale,
    title: "Civil Law",
    description: "Comprehensive civil litigation and dispute resolution services",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    services: [
      "Civil Suits & Litigation",
      "Contract Disputes",
      "Tort Claims & Damages",
      "Injunction & Stay Orders",
      "Partition & Joint Property Disputes",
      "Landlord-Tenant Disputes",
      "Recovery of Money & Debts",
      "Consumer Protection Cases",
    ],
    faqs: [
      {
        question: "How long do civil cases typically take?",
        answer:
          "Civil cases duration varies from 6 months to 3 years depending on complexity, court schedules, and case specifics.",
      },
      {
        question: "What are the costs involved in civil litigation?",
        answer:
          "Costs include court fees, advocate fees, and miscellaneous expenses. We provide transparent fee structure upfront.",
      },
    ],
  },
  {
    icon: Heart,
    title: "Family Law",
    description: "Sensitive handling of family matters with care and confidentiality",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    services: [
      "Divorce & Mutual Consent Divorce",
      "Child Custody & Visitation Rights",
      "Maintenance & Alimony Cases",
      "Domestic Violence Protection",
      "Adoption Procedures",
      "Marriage Registration",
      "Succession & Inheritance",
      "Guardianship Matters",
    ],
    faqs: [
      {
        question: "How long does a mutual consent divorce take?",
        answer:
          "Mutual consent divorce typically takes 6-18 months, including the mandatory 6-month cooling period as per law.",
      },
      {
        question: "Can child custody be modified later?",
        answer:
          "Yes, child custody orders can be modified based on changed circumstances and the best interests of the child.",
      },
    ],
  },
  {
    icon: Building,
    title: "Corporate Law",
    description: "Business legal services for companies and entrepreneurs",
    color: "text-green-600",
    bgColor: "bg-green-50",
    services: [
      "Company Registration & Incorporation",
      "Contract Drafting & Review",
      "Corporate Compliance",
      "Mergers & Acquisitions",
      "Employment Law Issues",
      "Intellectual Property Protection",
      "Partnership & LLP Formation",
      "Corporate Dispute Resolution",
    ],
    faqs: [
      {
        question: "What documents are needed for company registration?",
        answer:
          "PAN cards of directors, address proof, MOA, AOA, and other incorporation documents as per Companies Act.",
      },
      {
        question: "How do you handle corporate compliance?",
        answer:
          "We provide ongoing compliance support including annual filings, board resolutions, and regulatory requirements.",
      },
    ],
  },
  {
    icon: Home,
    title: "Property Law",
    description: "Complete property legal services and documentation",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    services: [
      "Property Purchase & Sale",
      "Title Verification & Due Diligence",
      "Property Registration",
      "Property Disputes & Litigation",
      "Landlord-Tenant Issues",
      "Construction & Development Law",
      "Real Estate Documentation",
      "Property Tax Matters",
    ],
    faqs: [
      {
        question: "How important is title verification?",
        answer:
          "Title verification is crucial to ensure clear ownership and avoid future legal disputes. We conduct thorough due diligence.",
      },
      {
        question: "What if there's a property dispute?",
        answer:
          "We handle property disputes through negotiation, mediation, or litigation depending on the case requirements.",
      },
    ],
  },
  {
    icon: Calculator,
    title: "Taxation Law",
    description: "Tax dispute resolution and compliance services",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    services: [
      "Income Tax Disputes",
      "GST Matters & Compliance",
      "Tax Appeals & Tribunals",
      "Tax Planning & Advisory",
      "TDS & TCS Issues",
      "Search & Seizure Matters",
      "Penalty & Prosecution Defense",
      "Tax Refund Claims",
    ],
    faqs: [
      {
        question: "Can you help with tax notice responses?",
        answer:
          "Yes, we handle all types of tax notices including assessment, penalty, and prosecution notices with expert responses.",
      },
      {
        question: "What's the process for tax appeals?",
        answer:
          "Tax appeals can be filed at CIT(A), ITAT, High Court, or Supreme Court depending on the case and amount involved.",
      },
    ],
  },
  {
    icon: Laptop,
    title: "Cyber Law",
    description: "Modern legal solutions for digital age crimes and disputes",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    services: [
      "Cybercrime Complaints & FIR",
      "Online Fraud & Scam Cases",
      "Data Protection & Privacy",
      "Social Media Disputes",
      "E-commerce Legal Issues",
      "Digital Evidence Collection",
      "IT Act Compliance",
      "Cyber Defamation Cases",
    ],
    faqs: [
      {
        question: "How to file a cybercrime complaint?",
        answer:
          "Cybercrime complaints can be filed online through cybercrime.gov.in or at local cyber police stations with proper evidence.",
      },
      {
        question: "What evidence is needed for cyber cases?",
        answer:
          "Screenshots, transaction records, communication logs, and digital forensic evidence are crucial for cyber cases.",
      },
    ],
  },
  {
    icon: FileText,
    title: "Legal Documentation",
    description: "Professional legal drafting and document preparation",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    services: [
      "Contracts & Agreements",
      "Legal Notices & Replies",
      "Affidavits & Declarations",
      "Power of Attorney",
      "Wills & Testaments",
      "Partnership Deeds",
      "Lease & Rental Agreements",
      "NOC & Undertakings",
    ],
    faqs: [
      {
        question: "How long does document drafting take?",
        answer: "Simple documents take 1-2 days, while complex agreements may take 3-7 days depending on requirements.",
      },
      {
        question: "Do you provide document review services?",
        answer:
          "Yes, we review existing documents and suggest modifications to protect your interests and ensure legal compliance.",
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <PageLayout>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Comprehensive Legal Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            Expert legal representation across all major practice areas in Bihar, Uttar Pradesh, and Jharkhand with
            personalized attention to every case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Phone className="mr-2 h-5 w-5" />
              Free Consultation: +91 98765 43210
            </Button>
            <Button size="lg" variant="outline">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-full ${service.bgColor}`}>
                        <IconComponent className={`h-8 w-8 ${service.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Services List */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Services Included:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.services.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* FAQs */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Frequently Asked Questions:</h4>
                        <Accordion type="single" collapsible className="w-full">
                          {service.faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`}>
                              <AccordionTrigger className="text-left text-sm">{faq.question}</AccordionTrigger>
                              <AccordionContent className="text-sm text-muted-foreground">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>

                      {/* Action Button */}
                      <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Consult Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Why Choose Our Legal Services?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience the difference of working with a dedicated legal professional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">15+ Years Experience</h3>
              <p className="text-muted-foreground text-sm">Extensive experience across all major legal domains</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">500+ Cases Won</h3>
              <p className="text-muted-foreground text-sm">Proven track record of successful case outcomes</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Availability</h3>
              <p className="text-muted-foreground text-sm">Emergency legal support when you need it most</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Confidential & Secure</h3>
              <p className="text-muted-foreground text-sm">Complete privacy and security for all client matters</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
