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
  ShieldCheck 
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

  return (
    <section ref={sectionRef} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
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
              className={`bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
