"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Atom, FlaskConical, Microscope, Monitor, Languages, CheckCircle } from "lucide-react"

const labs = [
  {
    name: "Physics Laboratory",
    icon: Atom,
    image: "/images/science-lab.jpg",
    description: "Our physics laboratory is equipped with modern apparatus for conducting experiments in mechanics, optics, electricity, and magnetism.",
    features: [
      "Optical benches and spectrometers",
      "Electrical circuit equipment",
      "Mechanics apparatus",
      "Digital measuring instruments",
      "Interactive physics simulations"
    ]
  },
  {
    name: "Chemistry Laboratory",
    icon: FlaskConical,
    image: "/images/science-lab.jpg",
    description: "A well-ventilated chemistry lab with all necessary equipment for organic, inorganic, and physical chemistry experiments.",
    features: [
      "Fume hoods for safe experiments",
      "Analytical balances",
      "Complete glassware sets",
      "Chemical reagents and solutions",
      "Safety equipment and first aid"
    ]
  },
  {
    name: "Biology Laboratory",
    icon: Microscope,
    image: "/images/science-lab.jpg",
    description: "State-of-the-art biology lab with microscopes and specimens for studying plant and animal biology.",
    features: [
      "Compound and stereo microscopes",
      "Preserved specimens collection",
      "Anatomical models",
      "Slide preparation equipment",
      "Botanical and zoological charts"
    ]
  },
  {
    name: "Computer Laboratory",
    icon: Monitor,
    image: "/images/computer-lab.jpg",
    description: "Modern computer labs with high-speed internet and latest software for learning programming and IT skills.",
    features: [
      "Latest computers with high-speed processors",
      "High-speed internet connectivity",
      "Programming software (Python, Java, C++)",
      "Multimedia learning resources",
      "Robotics and AI kits"
    ]
  },
  {
    name: "Language Laboratory",
    icon: Languages,
    image: "/images/hero-classroom.jpg",
    description: "Audio-visual language lab for improving pronunciation, listening skills, and communication abilities.",
    features: [
      "Individual audio stations",
      "Interactive language software",
      "Recording and playback facilities",
      "Multi-language learning resources",
      "Communication skill training"
    ]
  }
]

const labStats = [
  { number: "5+", label: "Specialized Labs" },
  { number: "100+", label: "Computer Systems" },
  { number: "50+", label: "Microscopes" },
  { number: "24/7", label: "Internet Access" }
]

export default function LaboratoriesPage() {
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
        title="Laboratories"
        subtitle="State-of-the-art laboratories equipped for hands-on learning and scientific exploration."
        breadcrumb="Home / Academics / Laboratories"
      />

      <section ref={contentRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Stats */}
          <div className="animate-on-scroll opacity-0 grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {labStats.map((stat) => (
              <div key={stat.label} className="text-center bg-muted rounded-xl p-6">
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary">{stat.number}</p>
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Labs List */}
          <div className="space-y-16">
            {labs.map((lab, index) => (
              <div
                key={lab.name}
                className={`animate-on-scroll opacity-0 grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative">
                    <div className={`absolute inset-0 rounded-2xl transform ${index % 2 === 0 ? "rotate-2 bg-primary/10" : "-rotate-2 bg-secondary/30"}`} />
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image
                        src={lab.image || "/placeholder.svg"}
                        alt={lab.name}
                        width={600}
                        height={400}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <lab.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">{lab.name}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{lab.description}</p>
                  <ul className="space-y-2">
                    {lab.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Safety Notice */}
          <div className="animate-on-scroll opacity-0 mt-16 bg-primary text-primary-foreground rounded-2xl p-8">
            <h3 className="font-serif text-xl font-bold mb-4">Laboratory Safety</h3>
            <p className="text-primary-foreground/80 mb-4">
              All our laboratories follow strict safety protocols. Students are trained in lab safety procedures and are supervised by qualified teachers during all practical sessions. Safety equipment including fire extinguishers, first aid kits, and emergency exits are readily available.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
                <p className="font-semibold">Trained Staff</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
                <p className="font-semibold">Safety Equipment</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
                <p className="font-semibold">Regular Drills</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
