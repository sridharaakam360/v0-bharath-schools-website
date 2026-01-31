"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

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
    <section ref={sectionRef} className="py-20 bg-secondary relative overflow-hidden rounded-t-3xl shadow-2xl min-h-[50vh]">
      {/* Parallax background pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 10% 20%, rgba(27, 79, 114, 0.3) 0%, transparent 40%),
                            radial-gradient(circle at 90% 80%, rgba(46, 134, 193, 0.3) 0%, transparent 40%)`,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Floating decorative shapes */}
      <div
        className="absolute top-10 left-10 w-20 h-20 rounded-full border-4 border-primary/20 pointer-events-none"
        style={{ transform: `translate(${scrollY * 0.2}px, ${-scrollY * 0.1}px) rotate(${scrollY}deg)` }}
      />
      <div
        className="absolute bottom-10 right-10 w-16 h-16 rounded-lg border-4 border-primary/20 pointer-events-none"
        style={{ transform: `translate(${-scrollY * 0.15}px, ${scrollY * 0.1}px) rotate(${-scrollY * 0.5}deg)` }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-primary/10 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className="max-w-4xl mx-auto text-center"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Admissions Open for CBSE Curriculum
          </h2>
          <p className="text-secondary-foreground/80 mb-8 text-lg">
            Join us for the academic year 2025-26. Limited seats available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admission">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10 text-lg px-8 bg-transparent transition-all duration-300 hover:scale-105"
            >
              Download Prospectus
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
