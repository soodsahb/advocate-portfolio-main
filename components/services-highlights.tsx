import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scale, Shield, Home, Building, Heart, Laptop, FileText, Calculator } from "lucide-react"

const services = [
  { icon: Shield, title: "Criminal Law", description: "Expert defense in criminal cases, bail applications, and court representations.", color: "from-red-400 to-red-600" },
  { icon: Scale, title: "Civil Law", description: "Comprehensive civil litigation, disputes resolution, and legal consultations.", color: "from-blue-400 to-blue-600" },
  { icon: Heart, title: "Family Law", description: "Divorce, custody, matrimonial disputes, and family court proceedings.", color: "from-pink-400 to-pink-600" },
  { icon: Building, title: "Corporate Law", description: "Business legal services, contracts, compliance, and corporate disputes.", color: "from-green-400 to-green-600" },
  { icon: Home, title: "Property Law", description: "Property disputes, documentation, registration, and real estate matters.", color: "from-orange-400 to-orange-600" },
  { icon: Calculator, title: "Taxation Law", description: "Tax disputes, GST matters, income tax cases, and tax planning.", color: "from-purple-400 to-purple-600" },
  { icon: Laptop, title: "Cyber Law", description: "Cybercrime cases, online fraud, digital evidence, and IT Act matters.", color: "from-cyan-400 to-cyan-600" },
  { icon: FileText, title: "Documentation", description: "Legal drafting, agreements, contracts, and document verification.", color: "from-indigo-400 to-indigo-600" },
]

export function ServicesHighlights() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 text-center">Our Legal Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive legal solutions across multiple practice areas in Bihar, UP, and Jharkhand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* Top diagonal accent */}
                <div className={`absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br ${service.color} rotate-45 opacity-40 pointer-events-none`}></div>

                <div className="p-6 flex flex-col items-center text-center relative z-10">
                  {/* Icon in a gradient circle */}
                  <div className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg transform transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                  {/* Button */}
                  <Button className="bg-primary text-white hover:bg-primary/90 px-6 py-2 rounded-full transition-all duration-300">
                    Consult Now
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
