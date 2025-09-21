"use client"

import type React from "react"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Phone, Mail, MapPin, CheckCircle, AlertCircle, User, FileText } from "lucide-react"

const caseTypes = [
  "Criminal Law",
  "Civil Law",
  "Family Law",
  "Property Law",
  "Corporate Law",
  "Tax Law",
  "Cyber Law",
  "Consumer Protection",
  "Labour Law",
  "Constitutional Law",
  "Other",
]

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
]

const consultationTypes = [
  {
    id: "free",
    name: "Free Consultation (30 minutes)",
    price: "Free",
    description: "Initial case assessment and legal advice",
  },
  {
    id: "detailed",
    name: "Detailed Consultation (60 minutes)",
    price: "₹2,000",
    description: "Comprehensive case analysis and strategy discussion",
  },
  {
    id: "urgent",
    name: "Urgent Consultation (Same Day)",
    price: "₹3,000",
    description: "Emergency legal consultation within 24 hours",
  },
]

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    caseType: "",
    consultationType: "free",
    preferredDate: "",
    preferredTime: "",
    caseDescription: "",
    urgency: "normal",
    freeConsultation: true,
    agreeTerms: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Full name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) newErrors.phone = "Invalid phone number"
    if (!formData.caseType) newErrors.caseType = "Case type is required"
    if (!formData.preferredDate) newErrors.preferredDate = "Preferred date is required"
    if (!formData.preferredTime) newErrors.preferredTime = "Preferred time is required"
    if (!formData.caseDescription.trim()) newErrors.caseDescription = "Case description is required"
    if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to terms and conditions"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  if (isSubmitted) {
    return (
      <PageLayout>
        <div className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Appointment Booked Successfully!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for booking an appointment with Advocate Abhimanu Kumar Tripathi. We have received your request and will
                confirm your appointment shortly.
              </p>

              <div className="bg-muted/30 rounded-lg p-6 mb-8 text-left">
                <h3 className="font-semibold text-foreground mb-4">Appointment Details:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Name:</span>
                    <span className="font-medium">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Case Type:</span>
                    <span className="font-medium">{formData.caseType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date & Time:</span>
                    <span className="font-medium">
                      {formData.preferredDate} at {formData.preferredTime}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Consultation:</span>
                    <span className="font-medium">
                      {consultationTypes.find((t) => t.id === formData.consultationType)?.name}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  <strong>What's Next?</strong>
                  <br />• You will receive a confirmation email within 2 hours
                  <br />• Our team will call you to confirm the appointment
                  <br />• Please bring relevant documents for your consultation
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => (window.location.href = "/")}>Back to Home</Button>
                  <Button variant="outline" onClick={() => (window.location.href = "/contact")}>
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Book Your Legal Consultation
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            Schedule a consultation with Advocate Abhimanu Kumar Tripathi for expert legal advice and representation in Bihar,
            Uttar Pradesh, and Jharkhand.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Free Initial Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Same Day Response</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>15+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Book Your Appointment</CardTitle>
                  <p className="text-muted-foreground">Fill out the form below to schedule your legal consultation</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <User className="h-5 w-5" />
                        Personal Information
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="Enter your full name"
                            className={errors.name ? "border-red-500" : ""}
                          />
                          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="Enter your email"
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="Enter your 10-digit phone number"
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Case Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Case Information
                      </h3>

                      <div>
                        <Label htmlFor="caseType">Type of Legal Matter *</Label>
                        <Select
                          value={formData.caseType}
                          onValueChange={(value) => handleInputChange("caseType", value)}
                        >
                          <SelectTrigger className={errors.caseType ? "border-red-500" : ""}>
                            <SelectValue placeholder="Select case type" />
                          </SelectTrigger>
                          <SelectContent>
                            {caseTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.caseType && <p className="text-red-500 text-sm mt-1">{errors.caseType}</p>}
                      </div>

                      <div>
                        <Label htmlFor="caseDescription">Case Description *</Label>
                        <Textarea
                          id="caseDescription"
                          value={formData.caseDescription}
                          onChange={(e) => handleInputChange("caseDescription", e.target.value)}
                          placeholder="Please provide a brief description of your legal matter..."
                          rows={4}
                          className={errors.caseDescription ? "border-red-500" : ""}
                        />
                        {errors.caseDescription && (
                          <p className="text-red-500 text-sm mt-1">{errors.caseDescription}</p>
                        )}
                      </div>
                    </div>

                    {/* Consultation Type */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Consultation Type</h3>
                      <div className="grid grid-cols-1 gap-4">
                        {consultationTypes.map((type) => (
                          <div
                            key={type.id}
                            className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                              formData.consultationType === type.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                            onClick={() => handleInputChange("consultationType", type.id)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <input
                                  type="radio"
                                  name="consultationType"
                                  value={type.id}
                                  checked={formData.consultationType === type.id}
                                  onChange={() => handleInputChange("consultationType", type.id)}
                                  className="text-primary"
                                />
                                <div>
                                  <h4 className="font-semibold text-foreground">{type.name}</h4>
                                  <p className="text-sm text-muted-foreground">{type.description}</p>
                                </div>
                              </div>
                              <Badge variant={type.id === "free" ? "secondary" : "default"}>{type.price}</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Appointment Scheduling */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Preferred Date & Time
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="preferredDate">Preferred Date *</Label>
                          <Input
                            id="preferredDate"
                            type="date"
                            value={formData.preferredDate}
                            onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                            min={new Date().toISOString().split("T")[0]}
                            className={errors.preferredDate ? "border-red-500" : ""}
                          />
                          {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
                        </div>

                        <div>
                          <Label htmlFor="preferredTime">Preferred Time *</Label>
                          <Select
                            value={formData.preferredTime}
                            onValueChange={(value) => handleInputChange("preferredTime", value)}
                          >
                            <SelectTrigger className={errors.preferredTime ? "border-red-500" : ""}>
                              <SelectValue placeholder="Select time slot" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
                        </div>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="agreeTerms"
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                        />
                        <div className="text-sm">
                          <Label htmlFor="agreeTerms" className="cursor-pointer">
                            I agree to the{" "}
                            <span className="text-primary">
                              Terms and Conditions and Privacy Policy
                            </span>
                            *
                          </Label>
                          {errors.agreeTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeTerms}</p>}
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Booking Appointment...
                        </>
                      ) : (
                        <>
                          <Calendar className="mr-2 h-5 w-5" />
                          Book Appointment
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-serif">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                      <p className="text-xs text-muted-foreground">24/7 Emergency Support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">advocate.abhimanu@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Office Address</p>
                      <p className="text-sm text-muted-foreground">
                        123 Gandhi Maidan
                        <br />
                        Patna, Bihar - 800001
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-serif flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Monday - Friday</span>
                    <span className="text-sm font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Saturday</span>
                    <span className="text-sm font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Sunday</span>
                    <span className="text-sm font-medium">Emergency Only</span>
                  </div>
                  <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      <AlertCircle className="h-4 w-4 inline mr-1" />
                      Emergency consultations available 24/7 for urgent legal matters
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* What to Bring */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-serif">What to Bring</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>All relevant documents related to your case</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Government-issued photo ID</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>List of questions or concerns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Previous legal correspondence (if any)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
