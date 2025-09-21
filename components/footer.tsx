import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, ChevronUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Call to Action */}
        <div className="py-12 border-b border-gray-800">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 text-center">
              Ready for Legal Assistance?
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Get expert legal counsel from an experienced advocate with over 15 years of practice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/appointment" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                Book Consultation
              </Link>
              <Link 
                href="tel:+919876543210" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-colors"
              >
                Emergency: +91 98765 43210
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Brand & Contact */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  Advocate Abhimanu Kumar Tripathi
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Experienced legal counsel serving clients across Bihar, UP, and Jharkhand since 2009
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-blue-400 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-white font-medium">Main Office</p>
                    <p className="text-gray-400">
                      123 Gandhi Maidan<br />
                      Patna, Bihar - 800001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-white font-medium">+91 98765 43210</p>
                    <p className="text-gray-400">24/7 Emergency</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-white font-medium">advocate.abhimanu@email.com</p>
                    <p className="text-gray-400">Free consultation available</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-white font-medium">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-400">Sunday: Emergency only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Practice Areas */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Practice Areas</h3>
              <div className="space-y-3">
                {[
                  "Criminal Law",
                  "Civil Litigation", 
                  "Family Law",
                  "Corporate Law",
                  "Property Law",
                  "Cyber Crime Law",
                  "Consumer Protection",
                  "Constitutional Law"
                ].map((area) => (
                  <Link 
                    key={area}
                    href="/services" 
                    className="block text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {area}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <div className="space-y-3">
                {[
                  { label: "About Me", href: "/about" },
                  { label: "Legal Services", href: "/services" },
                  { label: "Legal Updates", href: "/blog" },
                  { label: "Book Appointment", href: "/appointment" },
                  { label: "Contact Us", href: "/contact" },
                  { label: "Client Testimonials", href: "/testimonials" },
                  { label: "FAQ", href: "/faq" }
                ].map((link) => (
                  <Link 
                    key={link.label}
                    href={link.href} 
                    className="block text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Service Areas</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-blue-400 mb-2">Bihar</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Patna • Gaya • Muzaffarpur • Bhagalpur • Darbhanga • Begusarai
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-blue-400 mb-2">Uttar Pradesh</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Lucknow • Varanasi • Allahabad • Kanpur • Gorakhpur
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-blue-400 mb-2">Jharkhand</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Ranchi • Jamshedpur • Dhanbad • Bokaro • Deoghar
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="text-sm font-medium text-white mb-4">Connect With Us</h4>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: "#", label: "Facebook" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Instagram, href: "#", label: "Instagram" }
                  ].map(({ icon: Icon, href, label }) => (
                    <Link 
                      key={label}
                      href={href} 
                      className="p-2 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-colors group"
                      aria-label={label}
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="text-sm text-gray-400">
              <p className="mb-1">
                © {new Date().getFullYear()} Advocate Abhimanu Kumar Tripathi. All rights reserved.
              </p>
              <p className="text-xs text-gray-500">
                Bar Council Registration: BIH/2009/12345 | Practicing since 2009
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-blue-400 transition-colors">
                Legal Disclaimer
              </Link>
            </div>
          </div>
          
          {/* Professional Disclaimer */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center max-w-4xl mx-auto leading-relaxed">
              <strong>Legal Disclaimer:</strong> The information on this website is for general information purposes only. 
              Nothing on this site should be taken as legal advice for any individual case or situation. 
              This information is not intended to create, and receipt or viewing does not constitute, 
              an attorney-client relationship.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
