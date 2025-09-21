"use client"

import type React from "react"
import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredOffice: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const offices = [
    {
      city: "Patna, Bihar",
      address: "Chamber No. 15, Patna High Court Complex, Patna - 800001",
      phone: "+91 9876543210",
      email: "patna@advocateoffice.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8967!2d85.1376!3d25.5941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM1JzM4LjgiTiA4NcKwMDgnMTUuNCJF!5e0!3m2!1sen!2sin!4v1234567890",
    },
    {
      city: "Lucknow, UP",
      address: "Chamber No. 8, Lucknow Bench, Allahabad High Court, Lucknow - 226001",
      phone: "+91 9876543211",
      email: "lucknow@advocateoffice.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.7!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzQ4LjEiTiA4MMKwNTYnNDYuMyJF!5e0!3m2!1sen!2sin!4v1234567891",
    },
    {
      city: "Ranchi, Jharkhand",
      address: "Chamber No. 22, Jharkhand High Court, Ranchi - 834001",
      phone: "+91 9876543212",
      email: "ranchi@advocateoffice.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.1!2d85.3096!3d23.3441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDIwJzM4LjgiTiA4NcKwMTgnMzQuNiJF!5e0!3m2!1sen!2sin!4v1234567892",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Thank you for your message. We will get back to you within 24 hours.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      preferredOffice: "",
    })
    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Get in touch with our experienced legal team. We're here to help you navigate your legal challenges with confidence.
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 max-w-7xl">
          {/* Contact Form */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll respond within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required />
                  </div>
                </div>

                {/* Phone & Office */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="office">Preferred Office</Label>
                    <Select value={formData.preferredOffice} onValueChange={(val) => handleInputChange("preferredOffice", val)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select office location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="patna">Patna, Bihar</SelectItem>
                        <SelectItem value="lucknow">Lucknow, UP</SelectItem>
                        <SelectItem value="ranchi">Ranchi, Jharkhand</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" value={formData.subject} onChange={(e) => handleInputChange("subject", e.target.value)} required />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Please describe your legal matter in detail..."
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="animate-spin h-4 w-4 border-b-2 border-white rounded-full" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground">
                We have offices across Bihar, Uttar Pradesh, and Jharkhand to serve you better. Choose the location most convenient.
              </p>
            </div>

            {/* Emergency Hotline */}
            <Card className="border-accent shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg text-accent">24/7 Emergency Help</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-semibold">+91 9876543200</p>
                  <p className="text-sm text-muted-foreground">For urgent legal matters</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">info@advocateoffice.com</p>
                  <p className="text-sm text-muted-foreground">General inquiries</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: By appointment only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-center">Our Office Locations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit us at any of our conveniently located offices across Bihar, Uttar Pradesh, and Jharkhand.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {offices.map((office, i) => (
              <Card key={i} className="overflow-hidden shadow-md">
                <div className="h-48">
                  <iframe
                    src={office.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${office.city} Office Location`}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary" /> {office.city}
                  </h3>
                  <div className="space-y-3">
                    <p><span className="text-sm text-muted-foreground">Address</span><br /><span className="font-medium">{office.address}</span></p>
                    <p><span className="text-sm text-muted-foreground">Phone</span><br /><span className="font-medium">{office.phone}</span></p>
                    <p><span className="text-sm text-muted-foreground">Email</span><br /><span className="font-medium">{office.email}</span></p>
                    <p><span className="text-sm text-muted-foreground">Hours</span><br /><span className="font-medium">{office.hours}</span></p>
                  </div>
                  <Button variant="outline" className="w-full mt-4">Get Directions</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How quickly can I expect a response?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We typically respond within 24 hours on business days. For urgent cases, call our emergency hotline.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer free consultations?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Yes, we offer a free 30-minute consultation to discuss your case and how we can help you.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Which courts do you practice in?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We practice across Bihar, Uttar Pradesh, and Jharkhand in High Courts, District Courts, and the Supreme Court of India.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
