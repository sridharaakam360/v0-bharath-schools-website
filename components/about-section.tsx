"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

const highlights = [
  "CBSE affiliated curriculum with modern teaching methods",
  "Focus on academic excellence and character development",
  "Holistic approach to education",
  "Safe and nurturing learning environment",
  "Experienced and dedicated faculty",
  "State-of-the-art infrastructure",
]

export function AboutSection() {
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
      setScrollY((elementCenter - viewportCenter) * 0.08)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-background relative overflow-hidden rounded-t-3xl shadow-2xl min-h-screen">
      {/* Decorative parallax background */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"
        style={{ transform: `translate(${scrollY * 0.3}px, ${-scrollY * 0.2}px)` }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none"
        style={{ transform: `translate(${-scrollY * 0.2}px, ${scrollY * 0.3}px)` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with parallax */}
          <div
            className={`relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          >
            <Image
              src="/images/about-school.jpg"
              alt="Bharath Schools students and teachers"
              fill
              className="object-cover transition-transform duration-700"
              style={{ transform: `scale(1.1) translateY(${-scrollY * 0.1}px)` }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
              <p className="text-primary-foreground font-serif text-xl">
                Nurturing Future Leaders Since 1995
              </p>
            </div>
          </div>

          {/* Content with parallax */}
          <div
            className={`${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{
              animationDelay: "0.2s",
              transform: `translateY(${-scrollY * 0.1}px)`,
            }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Choose Bharath Schools?
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Bharath Schools provide holistic education focusing on academic excellence and
              character development. Our institution is committed to nurturing young minds and
              preparing them for the challenges of tomorrow.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The institution follows CBSE curriculum with modern teaching methodologies, ensuring
              students receive the best possible education in a supportive and innovative
              environment.
            </p>

            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-2"
                  style={{
                    animationDelay: `${0.3 + index * 0.1}s`,
                    transform: `translateX(${scrollY * (0.02 * index)}px)`,
                  }}
                >
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
