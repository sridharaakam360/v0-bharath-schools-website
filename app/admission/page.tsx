"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  FileText, 
  Calendar, 
  ClipboardCheck, 
  GraduationCap,
  CheckCircle,
  Download,
  ArrowRight
} from "lucide-react"

const admissionSteps = [
  { step: 1, icon: FileText, title: "Submit Application", description: "Fill out the online application form or collect from the school office" },
  { step: 2, icon: Calendar, title: "Entrance Test", description: "Appear for the entrance assessment as per the scheduled date" },
  { step: 3, icon: ClipboardCheck, title: "Interview", description: "Parent and student interaction with the admission committee" },
  { step: 4, icon: GraduationCap, title: "Enrollment", description: "Complete fee payment and document submission for final enrollment" }
]

const documents = [
  "Birth Certificate (Original & Copy)",
  "Transfer Certificate from previous school",
  "Report Card / Mark Sheet of last class",
  "Passport size photographs (6 nos.)",
  "Aadhaar Card of Student",
  "Aadhaar Card of Parents",
  "Caste Certificate (if applicable)",
  "Medical Fitness Certificate",
  "Address Proof (Utility Bill/Ration Card)",
  "Parent's ID Proof"
]

const feeStructure = [
  { class: "Nursery - UKG", admission: "25,000", tuition: "4,500/month", annual: "78,000" },
  { class: "Classes I - V", admission: "30,000", tuition: "5,500/month", annual: "96,000" },
  { class: "Classes VI - VIII", admission: "35,000", tuition: "6,500/month", annual: "1,13,000" },
  { class: "Classes IX - X", admission: "40,000", tuition: "7,500/month", annual: "1,30,000" },
  { class: "Classes XI - XII", admission: "45,000", tuition: "8,500/month", annual: "1,47,000" }
]

export default function AdmissionPage() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    classApplied: "",
    message: ""
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = contentRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your interest! We will contact you soon.")
  }

  return (
    <main>
      <Header />
      <PageHeader
        title="Admissions"
        subtitle="Join the Bharath Schools family and embark on a journey of excellence."
        breadcrumb="Home / Admission"
      />

      <section ref={contentRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Hero Banner */}
          <div className="animate-on-scroll opacity-0 relative mb-20">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/images/admission.jpg"
                alt="Admission Process"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
              <div className="absolute inset-0 flex items-center p-8 md:p-12">
                <div className="max-w-xl">
                  <p className="text-secondary font-semibold mb-2">Admissions Open 2025-26</p>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                    Shape Your Child's Future
                  </h2>
                  <p className="text-primary-foreground/80 mb-6">
                    Limited seats available for all classes. Apply now to secure your child's place at Bharath Schools.
                  </p>
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Admission Process */}
          <div className="animate-on-scroll opacity-0 mb-20">
            <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">Admission Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {admissionSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-border" />
                  )}
                  <div className="relative bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 hover:shadow-lg transition-all">
                    <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 relative z-10">
                      <step.icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs text-accent font-semibold">Step {step.step}</span>
                    <h3 className="font-serif font-bold text-lg text-foreground mt-1 mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enquiry Form */}
            <div className="animate-on-scroll opacity-0">
              <h2 className="font-serif text-2xl font-bold text-primary mb-6">Admission Enquiry</h2>
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="studentName">Student Name *</Label>
                    <Input
                      id="studentName"
                      value={formData.studentName}
                      onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="parentName">Parent Name *</Label>
                    <Input
                      id="parentName"
                      value={formData.parentName}
                      onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="classApplied">Class Applied For *</Label>
                  <select
                    id="classApplied"
                    value={formData.classApplied}
                    onChange={(e) => setFormData({...formData, classApplied: e.target.value})}
                    required
                    className="mt-1 w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="">Select Class</option>
                    <option value="nursery">Nursery</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    <option value="1-5">Class I - V</option>
                    <option value="6-8">Class VI - VIII</option>
                    <option value="9-10">Class IX - X</option>
                    <option value="11-12">Class XI - XII</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message">Message (Optional)</Label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={3}
                    className="mt-1 w-full px-3 py-2 rounded-md border border-input bg-background text-foreground resize-none"
                    placeholder="Any specific queries..."
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground">
                  Submit Enquiry
                </Button>
              </form>
            </div>

            {/* Documents Required */}
            <div className="animate-on-scroll opacity-0">
              <h2 className="font-serif text-2xl font-bold text-primary mb-6">Documents Required</h2>
              <div className="bg-muted rounded-xl p-6 mb-6">
                <ul className="grid sm:grid-cols-2 gap-3">
                  {documents.map((doc) => (
                    <li key={doc} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary text-primary-foreground rounded-xl p-6">
                <h3 className="font-semibold mb-4">Download Application Form</h3>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Download the admission application form, fill it completely, and submit it at the school office along with required documents.
                </p>
                <Button variant="secondary" className="bg-secondary text-secondary-foreground">
                  <Download className="w-4 h-4 mr-2" /> Download Form (PDF)
                </Button>
              </div>
            </div>
          </div>

          {/* Fee Structure */}
          <div className="animate-on-scroll opacity-0 mt-20">
            <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">Fee Structure (2025-26)</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-4 text-left font-semibold rounded-tl-xl">Class</th>
                    <th className="p-4 text-left font-semibold">Admission Fee</th>
                    <th className="p-4 text-left font-semibold">Monthly Tuition</th>
                    <th className="p-4 text-left font-semibold rounded-tr-xl">Annual (Approx.)</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, index) => (
                    <tr key={fee.class} className={index % 2 === 0 ? "bg-muted" : "bg-background"}>
                      <td className="p-4 font-medium text-foreground">{fee.class}</td>
                      <td className="p-4 text-muted-foreground">₹{fee.admission}</td>
                      <td className="p-4 text-muted-foreground">₹{fee.tuition}</td>
                      <td className="p-4 text-primary font-semibold">₹{fee.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              * Fee structure is subject to revision. Transport and hostel fees are additional.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
