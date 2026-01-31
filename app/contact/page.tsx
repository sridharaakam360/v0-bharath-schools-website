"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123, Education Lane, Knowledge City", "Hyderabad, Telangana - 500001"],
    color: "bg-primary"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 98765 43211"],
    color: "bg-accent"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@bharathschools.edu", "admissions@bharathschools.edu"],
    color: "bg-primary"
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 8:00 AM - 4:00 PM", "Saturday: 8:00 AM - 1:00 PM"],
    color: "bg-accent"
  }
]

const departments = [
  { name: "Admissions Office", phone: "+91 98765 43210", email: "admissions@bharathschools.edu" },
  { name: "Principal's Office", phone: "+91 98765 43211", email: "principal@bharathschools.edu" },
  { name: "Accounts Department", phone: "+91 98765 43212", email: "accounts@bharathschools.edu" },
  { name: "Transport Department", phone: "+91 98765 43213", email: "transport@bharathschools.edu" },
  { name: "Hostel Warden", phone: "+91 98765 43214", email: "hostel@bharathschools.edu" }
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" }
]

export default function ContactPage() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
    alert("Thank you for your message! We will get back to you soon.")
  }

  return (
    <main>
      <Header />
      <PageHeader
        title="Contact Us"
        subtitle="We're here to help. Reach out to us for any queries or information."
        breadcrumb="Home / Contact"
      />

      <section ref={contentRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Contact Cards */}
          <div className="animate-on-scroll opacity-0 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className={`w-14 h-14 rounded-full ${info.color} flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground mb-3">{info.title}</h3>
                {info.details.map((detail, index) => (
                  <p key={index} className="text-sm text-muted-foreground">{detail}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll opacity-0">
              <h2 className="font-serif text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
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
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Your Message *</Label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    required
                    className="mt-1 w-full px-3 py-2 rounded-md border border-input bg-background text-foreground resize-none"
                    placeholder="Write your message here..."
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            </div>

            {/* Map & Departments */}
            <div className="animate-on-scroll opacity-0">
              {/* Map Placeholder */}
              <h2 className="font-serif text-2xl font-bold text-primary mb-6">Find Us</h2>
              <div className="bg-muted rounded-xl h-64 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">123, Education Lane, Knowledge City</p>
                </div>
              </div>

              {/* Department Contacts */}
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">Department Contacts</h3>
              <div className="space-y-3">
                {departments.map((dept) => (
                  <div
                    key={dept.name}
                    className="bg-muted rounded-lg p-4 flex flex-wrap items-center justify-between gap-2"
                  >
                    <span className="font-medium text-foreground">{dept.name}</span>
                    <div className="flex items-center gap-4 text-sm">
                      <a href={`tel:${dept.phone}`} className="text-primary hover:underline">{dept.phone}</a>
                      <a href={`mailto:${dept.email}`} className="text-accent hover:underline">{dept.email}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="animate-on-scroll opacity-0 mt-20 bg-primary rounded-2xl p-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-4">Connect With Us</h2>
            <p className="text-primary-foreground/80 mb-6">
              Follow us on social media for updates, events, and school news.
            </p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-on-scroll opacity-0 mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-muted rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-2">Admission Queries</h3>
              <p className="text-sm text-muted-foreground mb-3">Get information about admission process and fee structure.</p>
              <a href="/admission" className="text-primary font-medium hover:underline">Visit Admissions Page →</a>
            </div>
            <div className="bg-muted rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-2">Career Opportunities</h3>
              <p className="text-sm text-muted-foreground mb-3">Join our team of dedicated educators and staff.</p>
              <a href="mailto:careers@bharathschools.edu" className="text-primary font-medium hover:underline">careers@bharathschools.edu</a>
            </div>
            <div className="bg-muted rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-2">Feedback & Suggestions</h3>
              <p className="text-sm text-muted-foreground mb-3">We value your feedback to improve our services.</p>
              <a href="mailto:feedback@bharathschools.edu" className="text-primary font-medium hover:underline">feedback@bharathschools.edu</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
