"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { 
  Bus, 
  MapPin, 
  Shield, 
  Phone, 
  Clock, 
  User,
  CheckCircle,
  AlertCircle
} from "lucide-react"

const transportFeatures = [
  { icon: Bus, label: "40+ Buses", description: "Modern fleet covering all city areas" },
  { icon: Shield, label: "GPS Tracking", description: "Real-time location tracking for safety" },
  { icon: User, label: "Trained Staff", description: "Experienced drivers and attendants" },
  { icon: Phone, label: "Parent App", description: "Live updates and notifications" }
]

const routes = [
  { area: "North Zone", routes: ["Jubilee Hills", "Banjara Hills", "Madhapur", "Kondapur", "Gachibowli"] },
  { area: "South Zone", routes: ["Mehdipatnam", "Tolichowki", "Attapur", "Rajendra Nagar", "Shamshabad"] },
  { area: "East Zone", routes: ["Uppal", "LB Nagar", "Dilsukhnagar", "Nacharam", "Habsiguda"] },
  { area: "West Zone", routes: ["Kukatpally", "Miyapur", "Chandanagar", "Patancheru", "Lingampally"] }
]

const safetyFeatures = [
  "GPS tracking on all buses",
  "Speed governors installed",
  "First aid kit in every bus",
  "Fire extinguishers equipped",
  "CCTV cameras installed",
  "Lady attendant on each bus",
  "Emergency contact numbers displayed",
  "Regular vehicle maintenance",
  "Driver background verification",
  "Anti-collision warning systems"
]

const timings = [
  { route: "Morning Pickup", time: "6:30 AM - 7:45 AM", note: "Bus arrives 10-15 mins before scheduled time" },
  { route: "Afternoon Drop", time: "3:30 PM - 5:00 PM", note: "Students board immediately after school" },
  { route: "Evening Drop (Hostel)", time: "5:00 PM - 5:30 PM", note: "For day scholars with evening activities" }
]

export default function TransportPage() {
  const contentRef = useRef<HTMLDivElement>(null)

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

  return (
    <main>
      <Header />
      <PageHeader
        title="School Transport"
        subtitle="Safe, reliable, and comfortable transportation for students across the city."
        breadcrumb="Home / School / Transport"
      />

      <section ref={contentRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="animate-on-scroll opacity-0 grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">Safe Journey, Every Day</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bharath Schools operates a comprehensive transport service covering all major areas of the city. Our fleet of modern, well-maintained buses ensures safe and comfortable commute for students. Each bus is equipped with the latest safety features and is monitored by trained staff.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {transportFeatures.map((feature) => (
                  <div key={feature.label} className="bg-muted rounded-lg p-4">
                    <feature.icon className="w-6 h-6 text-primary mb-2" />
                    <h3 className="font-semibold text-foreground text-sm">{feature.label}</h3>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/30 rounded-2xl transform rotate-3" />
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/transport.jpg"
                  alt="School Bus Fleet"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Routes Coverage */}
          <div className="animate-on-scroll opacity-0 mb-20">
            <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">Routes Coverage</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {routes.map((zone) => (
                <div
                  key={zone.area}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="font-serif font-bold text-lg text-foreground">{zone.area}</h3>
                  </div>
                  <ul className="space-y-2">
                    {zone.routes.map((route) => (
                      <li key={route} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {route}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Timings */}
          <div className="animate-on-scroll opacity-0 mb-20">
            <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">Transport Timings</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {timings.map((timing) => (
                <div
                  key={timing.route}
                  className="bg-primary text-primary-foreground rounded-xl p-6"
                >
                  <Clock className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-serif font-bold text-lg mb-1">{timing.route}</h3>
                  <p className="text-2xl font-bold text-secondary mb-2">{timing.time}</p>
                  <p className="text-sm text-primary-foreground/80">{timing.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Features */}
          <div className="animate-on-scroll opacity-0 grid md:grid-cols-2 gap-12 items-start mb-20">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8" />
                Safety First
              </h2>
              <p className="text-muted-foreground mb-6">
                Student safety is our top priority. Our transport system is designed with multiple safety features and protocols to ensure every child reaches school and home safely.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {safetyFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">Transport Guidelines</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Be Ready on Time</p>
                    <p className="text-sm text-muted-foreground">Students should be at the bus stop 5 minutes before scheduled time.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">ID Card Mandatory</p>
                    <p className="text-sm text-muted-foreground">Students must wear their ID card while using school transport.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Inform in Advance</p>
                    <p className="text-sm text-muted-foreground">Notify the transport office if your child won't use the bus.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="animate-on-scroll opacity-0 bg-secondary/20 rounded-2xl p-8 text-center">
            <h3 className="font-serif text-xl font-bold text-foreground mb-4">Transport Enquiries</h3>
            <p className="text-muted-foreground mb-6">
              For route information, fee details, or any transport-related queries, contact our transport department.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919876543210" className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <a href="mailto:transport@bharathschools.edu" className="flex items-center gap-2 bg-background border border-border text-foreground px-6 py-3 rounded-lg hover:bg-muted transition-colors">
                transport@bharathschools.edu
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
