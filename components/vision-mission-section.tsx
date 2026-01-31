"use client"

import { useEffect, useRef, useState } from "react"
import { Eye, Target } from "lucide-react"

export function VisionMissionSection() {
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
    <section
      ref={sectionRef}
      id="vision-mission"
      className="py-20 bg-primary relative overflow-hidden rounded-t-3xl shadow-2xl min-h-screen"
    >
      {/* Parallax Background Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Floating decorative elements */}
      <div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/20 blur-2xl pointer-events-none"
        style={{ transform: `translate(${scrollY * 0.2}px, ${-scrollY * 0.15}px)` }}
      />
      <div
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/20 blur-2xl pointer-events-none"
        style={{ transform: `translate(${-scrollY * 0.15}px, ${scrollY * 0.2}px)` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className="text-center mb-12"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
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
            className={`bg-background rounded-lg p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ transform: `translateY(${scrollY * 0.1}px) translateX(${-scrollY * 0.05}px)` }}
          >
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110 hover:rotate-12">
              <Eye className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To nurture young minds into responsible global citizens with strong values, critical
              thinking abilities, and a passion for lifelong learning. We envision a world where
              every student realizes their full potential and contributes meaningfully to society.
            </p>
          </div>

          {/* Mission Card */}
          <div
            className={`bg-background rounded-lg p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{
              animationDelay: "0.2s",
              transform: `translateY(${-scrollY * 0.1}px) translateX(${scrollY * 0.05}px)`,
            }}
          >
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110 hover:-rotate-12">
              <Target className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide quality education through innovation, discipline, and excellence. We are
              committed to creating a supportive learning environment that fosters intellectual
              curiosity, creativity, and moral values while preparing students for the challenges of
              tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
