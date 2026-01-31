"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { 
  MonitorSmartphone, 
  FlaskConical, 
  Library, 
  Dumbbell, 
  Music, 
  Palette, 
  TreePine, 
  ShieldCheck,
  Wifi,
  Building2
} from "lucide-react"

const facilities = [
  {
    icon: MonitorSmartphone,
    title: "Smart Classrooms",
    description: "Air-conditioned classrooms equipped with interactive boards, projectors, and audio-visual systems for enhanced learning experiences.",
    image: "/images/hero-classroom.jpg"
  },
  {
    icon: FlaskConical,
    title: "Science Laboratories",
    description: "Well-equipped Physics, Chemistry, and Biology labs with modern apparatus for practical learning and experiments.",
    image: "/images/science-lab.jpg"
  },
  {
    icon: MonitorSmartphone,
    title: "Computer Labs",
    description: "State-of-the-art computer laboratories with latest systems, high-speed internet, and programming software.",
    image: "/images/computer-lab.jpg"
  },
  {
    icon: Library,
    title: "Library",
    description: "Spacious library with extensive collection of books, journals, digital resources, and quiet reading areas.",
    image: "/images/library.jpg"
  },
  {
    icon: Dumbbell,
    title: "Sports Facilities",
    description: "Expansive playgrounds, basketball courts, football field, indoor sports hall, and modern gymnasium.",
    image: "/images/activity-sports.jpg"
  },
  {
    icon: Building2,
    title: "Auditorium",
    description: "Multi-purpose auditorium with 500+ seating capacity for events, performances, and assemblies.",
    image: "/images/auditorium.jpg"
  },
  {
    icon: Music,
    title: "Music Room",
    description: "Dedicated music room with instruments for both Indian and Western music training.",
    image: "/images/activity-music.jpg"
  },
  {
    icon: Palette,
    title: "Art Studio",
    description: "Creative space for art and craft activities with all necessary materials and display areas.",
    image: "/images/activity-arts.jpg"
  },
  {
    icon: TreePine,
    title: "Green Campus",
    description: "Eco-friendly campus with gardens, trees, and sustainable practices promoting environmental awareness.",
    image: "/images/hero-campus.jpg"
  }
]

const amenities = [
  { icon: Wifi, label: "Wi-Fi Campus" },
  { icon: ShieldCheck, label: "CCTV Security" },
  { icon: Building2, label: "Sick Room" },
  { icon: MonitorSmartphone, label: "Digital Library" }
]

export default function FacilitiesPage() {
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
        title="School Facilities"
        subtitle="World-class infrastructure designed to support holistic education and all-round development."
        breadcrumb="Home / School / Facilities"
      />

      <section ref={contentRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Amenities Bar */}
          <div className="animate-on-scroll opacity-0 flex flex-wrap justify-center gap-4 mb-16">
            {amenities.map((amenity) => (
              <div key={amenity.label} className="flex items-center gap-2 bg-primary/10 text-primary px-5 py-3 rounded-full">
                <amenity.icon className="w-5 h-5" />
                <span className="font-medium text-sm">{amenity.label}</span>
              </div>
            ))}
          </div>

          {/* Facilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={facility.title}
                className="animate-on-scroll opacity-0 group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <facility.icon className="w-5 h-5 text-secondary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-xl text-foreground mb-2">{facility.title}</h3>
                  <p className="text-muted-foreground text-sm">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Campus Highlights */}
          <div className="animate-on-scroll opacity-0 mt-20 bg-primary rounded-2xl p-8 md:p-12">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground text-center mb-8">Campus Highlights</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center text-primary-foreground">
              <div>
                <p className="font-serif text-4xl font-bold text-secondary">5</p>
                <p className="text-sm text-primary-foreground/80">Acres Campus</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-bold text-secondary">60+</p>
                <p className="text-sm text-primary-foreground/80">Smart Classrooms</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-bold text-secondary">6</p>
                <p className="text-sm text-primary-foreground/80">Laboratories</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-bold text-secondary">100%</p>
                <p className="text-sm text-primary-foreground/80">Wi-Fi Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
