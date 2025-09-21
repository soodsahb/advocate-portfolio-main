"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle, ChevronDown, Scale, MapPin, Clock } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    hasDropdown: true,
    subItems: [
      { name: "Criminal Defense", href: "/services" },
      { name: "Civil Litigation", href: "/services" },
      { name: "Corporate Law", href: "/services" },
      { name: "Family Law", href: "/services" },
      { name: "Property Law", href: "/services" },
      { name: "Cyber Law", href: "/services" },
    ],
  },
  { name: "Legal Updates", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showServices && !(event.target).closest(".dropdown-parent")) {
        setShowServices(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showServices]);

  const isActive = (href) => {
    if (href === "/services") return pathname.startsWith("/services");
    if (href === "/blog") return pathname.startsWith("/blog");
    return pathname === href;
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-slate-800 text-white py-2 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-300" />
                <span className="text-slate-300">Chandigarh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-300" />
                <span className="text-slate-300">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+91" className="text-slate-300 hover:text-white transition-colors">
                +91 XXXXX XXXXX
              </a>
              <a
                href="mailto:contact@advocateabhimanyu.com"
                className="text-slate-300 hover:text-white transition-colors"
              >
                [contact@advocateabhimanyu.com](mailto:contact@advocateabhimanyu.com)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? "shadow-lg border-b border-blue-200" : "shadow-sm border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 via-slate-800 to-blue-700 rounded-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-600 rounded-full border-2 border-white"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                  Adv. Abhimanu Kumar Tripathi
                </div>
                <div className="text-sm text-slate-500 font-medium">
                  Legal Consultant & Advisor
                </div>
              </div>
              <div className="sm:hidden">
                <div className="text-lg font-bold text-slate-800">Adv. Abhimanu Kumar Tripathi</div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className={`relative group dropdown-parent`}
                >
                  {link.hasDropdown ? (
                    <button
                      onClick={() => setShowServices((prev) => !prev)}
                      className={`px-4 h-10 min-w-[80px] font-bold text-sm flex items-center gap-1 rounded-lg bg-transparent outline-none transition duration-200
                        ${isActive(link.href) 
                          ? "text-blue-700 border-b-2 border-blue-600"
                          : "text-slate-700 hover:text-blue-700 border-b-2 border-transparent"
                        }
                      `}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 ml-1 transition-transform duration-200 ${showServices ? "rotate-180 text-blue-700" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`px-4 h-10 min-w-[80px] font-bold text-sm flex items-center gap-1 rounded-lg transition
                        ${isActive(link.href)
                          ? "text-blue-700 border-b-2 border-blue-600"
                          : "text-slate-700 hover:text-blue-700 border-b-2 border-transparent"
                        }
                      `}
                    >
                      <span>{link.name}</span>
                    </Link>
                  )}
                  {/* Dropdown */}
                  {link.hasDropdown && showServices && (
                    <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-blue-100 py-2 z-50">
                      <div className="px-4 py-2 text-[10px] font-bold text-blue-700 uppercase tracking-wider border-b border-blue-50">
                        Practice Areas
                      </div>
                      {link.subItems?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setShowServices(false)}
                          className="w-full text-left px-4 py-3 text-base text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 flex items-center justify-between rounded"
                        >
                          <span>{item.name}</span>
                          <span className="text-xs text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity">
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                className="border border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-700 rounded-md font-bold px-2 h-10 min-w-[80px] flex items-center justify-center gap-1 text-xs transition-all duration-200 border-b-2 border-transparent"
              >
                <Phone className="h-4 w-4 mr-1" />
                Call
              </button>
              <button
                className="h-10 min-w-[80px] bg-gradient-to-tr from-blue-600 via-blue-700 to-cyan-400 hover:from-blue-800 hover:to-blue-500 text-white rounded-md font-bold px-2 flex items-center justify-center gap-1 text-xs shadow transition-all duration-200 border-b-2 border-transparent"
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                Legal Advice
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="p-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-200"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden overflow-hidden border-t border-blue-200 animate-in slide-in-from-top-2 duration-200">
            <div className="bg-white px-4 py-6 max-h-[calc(100vh-80px)] overflow-y-auto">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <button
                        onClick={() => setShowServices((prev) => !prev)}
                        className={`w-full h-10 text-left px-4 rounded-md font-bold flex items-center justify-between
                          ${isActive(link.href)
                            ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                            : "text-slate-700 border-b-2 border-transparent hover:text-blue-700 hover:bg-slate-50"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${showServices ? "rotate-180 text-blue-700" : ""}`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`w-full h-10 text-left px-4 rounded-md font-bold flex items-center justify-between
                          ${isActive(link.href)
                            ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                            : "text-slate-700 border-b-2 border-transparent hover:text-blue-700 hover:bg-slate-50"
                        }`}
                      >
                        <span>{link.name}</span>
                      </Link>
                    )}
                    {link.hasDropdown && showServices && (
                      <div className="ml-4 mt-2 space-y-1 flex flex-col overflow-hidden animate-in slide-in-from-top-2 duration-200">
                        {link.subItems?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="w-full h-10 text-left px-4 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200 border-b-2 border-transparent"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* CTA Mobile */}
              <div className="flex flex-col gap-2 mt-6 pt-6 border-t border-blue-100">
                <button className="w-full h-10 justify-center gap-2 border border-slate-200 text-slate-700 hover:border-blue-700 hover:text-blue-700 rounded-md font-bold text-xs flex items-center border-b-2 border-transparent">
                  <Phone className="h-4 w-4" /> Call
                </button>
                <button className="w-full h-10 justify-center gap-2 bg-gradient-to-tr from-blue-600 to-blue-400 text-white rounded-md font-bold text-xs flex items-center border-b-2 border-transparent">
                  <MessageCircle className="h-4 w-4" /> Legal Advice
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
