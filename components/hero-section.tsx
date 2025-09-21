"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Scale, Shield, Users } from "lucide-react";

const targets = { yearsExperience: 15, casesSolved: 500, happyClients: 300 };
const duration = { yearsExperience: 2000, casesSolved: 2500, happyClients: 2200 };

export function HeroSection() {
  const [counters, setCounters] = useState({
    yearsExperience: 0,
    casesSolved: 0,
    happyClients: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  const animateCounter = (key) => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration[key], 1);
      const eased =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;
      setCounters((prev) => ({
        ...prev,
        [key]: Math.floor(eased * targets[key]),
      }));
      if (progress < 1) requestAnimationFrame(step);
      else setCounters((prev) => ({ ...prev, [key]: targets[key] }));
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true);
    
    // Start counter animations after a delay
    const timer = setTimeout(() => {
      animateCounter("yearsExperience");
      animateCounter("casesSolved");
      animateCounter("happyClients");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden pb-6 pt-6">
      {/* Modern Animated Background */}
      <div className={`absolute inset-0 z-0 transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-105 opacity-90'}`}>
        <img
          src="/professional-courtroom-with-scales-of-justice-and-.jpg"
          alt="Justice Background"
          className="w-full h-full object-cover brightness-75"
        />
        <div className={`absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-500/60 to-transparent transition-opacity duration-700 ${isVisible ? 'opacity-95' : 'opacity-80'}`} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile */}
        <div className={`inline-block mb-6 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-14 opacity-0'}`}>
          <img
            src="/professional-indian-advocate-in-formal-attire.jpg"
            alt="Advocate Abhimanyu Kumar Tripathi"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <h1
          className={`
            text-[18px] text-center
            sm:text-2xl md:text-5xl lg:text-6xl
            font-serif font-bold text-white mb-3 drop-shadow-xl
            transform transition-all duration-700 delay-300
            ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}
          `}
        >
          Adv. Abhimanu Kumar Tripathi
        </h1>
        
        <p className={`text-lg md:text-xl text-white/90 mb-6 drop-shadow-md transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          Trusted Legal Solutions in Bihar, UP & Jharkhand
        </p>
        
        <p className={`text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          With over 15 years of experience in Indian law, I provide comprehensive legal services across Civil, Criminal, Family, Corporate, and Property matters with dedication and integrity.
        </p>
        
        {/* CTA buttons with shine effect */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
  <div className={`w-full sm:w-auto transform transition-all duration-700 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
    <Button
      size="lg"
      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 flex items-center justify-center gap-2 shadow-xl relative overflow-hidden"
    >
      <Phone className="h-5 w-5" /> Call Now: +91 98765 43210
      <span className="absolute left-[-90%] top-[35%] w-[120%] h-[14px] bg-gradient-to-r from-white/40 via-white/70 to-transparent rounded-md blur-md animate-shine" />
    </Button>
  </div>
  
  <div className={`w-full sm:w-auto transform transition-all duration-700 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
    <Button
      size="lg"
      variant="outline"
      className="w-full sm:w-auto border-white text-black bg-white hover:bg-gray-100 font-semibold px-8 py-4 flex items-center justify-center gap-2 shadow-lg relative overflow-hidden"
    >
      <MessageCircle className="h-5 w-5" /> WhatsApp Consultation
      <span className="absolute left-[-90%] top-[35%] w-[120%] h-[14px] bg-gradient-to-r from-white/60 via-white/100 to-transparent rounded-md blur-md animate-shine" />
    </Button>
  </div>
</div>

        
        {/* Animated Glassmorphism Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          {[
            { icon: Scale, label: "Years of Experience", value: counters.yearsExperience, delay: 'delay-1200' },
            { icon: Shield, label: "Cases Solved", value: counters.casesSolved, delay: 'delay-1400' },
            { icon: Users, label: "Happy Clients", value: counters.happyClients, delay: 'delay-1600' },
          ].map(({ icon: Icon, label, value, delay }) => (
            <div
              key={label}
              className={`text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl transition-all duration-700 hover:scale-105 border-2 border-white/10 transform ${delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-9 opacity-0'}`}
            >
              <div className="flex items-center justify-center mb-3">
                <Icon className="h-12 w-12 text-blue-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}+</div>
              <div className="text-white/80">{label}</div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shine {
          0% { left: -90%; }
          100% { left: 100%; }
        }
        
        .animate-shine {
          animation: shine 2s linear infinite;
        }
        
        .delay-1200 {
          transition-delay: 1200ms;
        }
        
        .delay-1400 {
          transition-delay: 1400ms;
        }
        
        .delay-1600 {
          transition-delay: 1600ms;
        }
      `}</style>
    </section>
  );
}
