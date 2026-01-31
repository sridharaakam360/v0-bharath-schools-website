"use client"

import { useEffect, useRef, useState } from "react"
import {
  Monitor,
  FlaskConical,
  BookOpen,
  Building2,
  Trophy,
  Bus,
  GraduationCap,
  ShieldCheck,
} from "lucide-react"

const features = [
  {
    icon: Monitor,
    title: "Smart Classrooms",
    description: "Interactive digital learning with modern technology",
  },
  {
    icon: FlaskConical,
    title: "Well Equipped Labs",
    description: "State-of-the-art science and computer laboratories",
  },
  {
    icon: BookOpen,
    title: "Library",
    description: "Extensive collection of books and digital resources",
  },
  {
    icon: Building2,
    title: "Hostel Facility",
    description: "Safe and comfortable accommodation for students",
  },
  {
    icon: Trophy,
    title: "Sports",
    description: "Comprehensive sports facilities and training",
  },
  {
    icon: Bus,
    title: "Transport",
    description: "Safe transportation covering all major routes",
  },
  {
    icon: GraduationCap,
    title: "Qualified Faculty",
    description: "Experienced and dedicated teaching staff",
  },
  {
    icon: ShieldCheck,
    title: "Safe Campus",
    description: "24/7 security and CCTV surveillance",
  },
]

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = windowHeight / 2
      setScrollY((elementCenter - viewportCenter) * 0.1)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-muted relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, var(--primary) 0%, transparent 50%), 
                            radial-gradient(circle at 80% 50%, var(--accent) 0%, transparent 50%)`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className="text-center mb-12"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Facilities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Providing world-class infrastructure for holistic development
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-card p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 text-center ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                transform: `translateY(${scrollY * (0.05 + index * 0.01)}px)`,
              }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
