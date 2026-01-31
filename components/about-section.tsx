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
    <section ref={sectionRef} id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <Image
              src="/images/about-school.jpg"
              alt="Bharath Schools students and teachers"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6">
              <p className="text-primary-foreground font-serif text-xl">
                Nurturing Future Leaders Since 1995
              </p>
            </div>
          </div>

          {/* Content */}
          <div
            className={`${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Choose Bharath Schools?
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Bharath Schools provide holistic education focusing on academic excellence 
              and character development. Our institution is committed to nurturing 
              young minds and preparing them for the challenges of tomorrow.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The institution follows CBSE curriculum with modern teaching methodologies, 
              ensuring students receive the best possible education in a supportive 
              and innovative environment.
            </p>

            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
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
