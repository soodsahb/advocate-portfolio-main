"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Patna, Bihar",
    case: "Property Dispute",
    rating: 5,
    text: "Advocate Abhimanu Kumar Tripathi handled my property dispute with utmost professionalism. His deep knowledge of property law and strategic approach helped me win a complex case that had been pending for years.",
  },
  {
    name: "Amit Singh",
    location: "Lucknow, UP",
    case: "Criminal Defense",
    rating: 5,
    text: "I was falsely accused in a criminal case. Abhimanu sir's expertise in criminal law and his dedication to justice helped prove my innocence. Forever grateful for his support during the toughest time of my life.",
  },
  {
    name: "Sunita Devi",
    location: "Ranchi, Jharkhand",
    case: "Family Court",
    rating: 5,
    text: "During my divorce proceedings, Advocate Kumar provided not just legal expertise but also emotional support. He ensured fair custody arrangements for my children and protected my rights throughout the process.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-10 -left-40 w-80 h-80 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-gradient-to-l from-purple-600 to-pink-600 rounded-full blur-3xl opacity-15 animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full blur-2xl opacity-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400 rounded-full px-6 py-2 mb-6 shadow-lg">
            <Star className="h-4 w-4 text-gray-900 fill-gray-900" />
            <span className="text-sm font-bold text-gray-900">Client Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 text-center">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-base leading-relaxed">
            Real testimonials from satisfied clients across Bihar, UP, and Jharkhand
          </p>
        </div>

        <div className="relative">
          <Card className="bg-white shadow-2xl rounded-2xl border-2 border-yellow-400 transition-all duration-500 transform hover:shadow-3xl hover:scale-[1.01] group h-64 w-full">
            <CardContent className="p-6 text-center relative overflow-hidden h-full flex flex-col justify-center">
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-blue-50 pointer-events-none rounded-2xl"></div>
              
              {/* Testimonial text with fade animation */}
              <div 
                key={currentIndex} 
                className="animate-in fade-in duration-700 slide-in-from-bottom-4 flex flex-col justify-center h-full"
              >
                {/* Quote icon - smaller and inline */}
                <div className="relative inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-md mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Quote className="h-4 w-4 text-white" />
                </div>

                <p className="text-base md:text-lg text-gray-900 leading-relaxed italic mb-4 font-medium relative z-10 line-clamp-3">
                  "{testimonials[currentIndex].text}"
                </p>
                
                {/* Star rating - smaller */}
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-gray-900 relative z-10 text-center">
                    {testimonials[currentIndex].name}
                  </h4>
                  <div className="inline-flex items-center gap-2 bg-gray-900 rounded-full px-3 py-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-white text-xs font-medium">
                      {testimonials[currentIndex].location} • {testimonials[currentIndex].case}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Navigation */}
          <div className="flex justify-center items-center gap-6 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-xl p-3 bg-white shadow-lg hover:shadow-xl border-2 border-yellow-400 hover:bg-yellow-50 hover:scale-110 transition-all duration-300 group"
            >
              <ChevronLeft className="h-5 w-5 text-gray-900 group-hover:text-yellow-600 transition-colors" />
            </Button>

            {/* Enhanced Pagination Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative transition-all duration-300 ${
                    index === currentIndex 
                      ? "w-8 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg" 
                      : "w-3 h-3 bg-gray-400 rounded-full hover:bg-yellow-400 hover:scale-125"
                  }`}
                >
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full animate-pulse opacity-70"></div>
                  )}
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-xl p-3 bg-white shadow-lg hover:shadow-xl border-2 border-yellow-400 hover:bg-yellow-50 hover:scale-110 transition-all duration-300 group"
            >
              <ChevronRight className="h-5 w-5 text-gray-900 group-hover:text-yellow-600 transition-colors" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}