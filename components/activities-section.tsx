"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const activities = [
  {
    image: "/images/activity-sports.jpg",
    title: "Sports",
    description: "Cricket, Basketball, Football & more",
  },
  {
    image: "/images/activity-arts.jpg",
    title: "Arts & Crafts",
    description: "Painting, Drawing & Creative activities",
  },
  {
    image: "/images/activity-music.jpg",
    title: "Music",
    description: "Vocal & Instrumental training",
  },
  {
    image: "/images/activity-dance.jpg",
    title: "Dance",
    description: "Classical & Contemporary forms",
  },
  {
    image: "/images/activity-yoga.jpg",
    title: "Yoga",
    description: "Physical & Mental wellness",
  },
]

export function ActivitiesSection() {
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
    <section ref={sectionRef} id="activities" className="py-20 bg-muted relative overflow-hidden">
      {/* Parallax background decoration */}
      <div
        className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none"
        style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className="text-center mb-12"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Co-Curricular Activities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Developing well-rounded individuals through diverse extracurricular programs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className={`group relative overflow-hidden rounded-lg aspect-[3/4] shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                transform: `translateY(${scrollY * (0.05 + index * 0.02)}px)`,
              }}
            >
              <Image
                src={activity.image || "/placeholder.svg"}
                alt={activity.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ transform: `scale(1.05) translateY(${-scrollY * 0.05}px)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                <h3 className="font-serif font-bold text-lg mb-1">{activity.title}</h3>
                <p className="text-sm text-primary-foreground/80">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
