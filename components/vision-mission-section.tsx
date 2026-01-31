"use client"

import { useEffect, useRef, useState } from "react"
import { Eye, Target } from "lucide-react"

export function VisionMissionSection() {
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
    <section ref={sectionRef} id="vision-mission" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Guiding principles that shape the future of our students
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <div
            className={`bg-background rounded-lg p-8 shadow-lg ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To nurture young minds into responsible global citizens with strong 
              values, critical thinking abilities, and a passion for lifelong 
              learning. We envision a world where every student realizes their 
              full potential and contributes meaningfully to society.
            </p>
          </div>

          {/* Mission Card */}
          <div
            className={`bg-background rounded-lg p-8 shadow-lg ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide quality education through innovation, discipline, and 
              excellence. We are committed to creating a supportive learning 
              environment that fosters intellectual curiosity, creativity, and 
              moral values while preparing students for the challenges of tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
