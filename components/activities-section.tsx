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
    <section ref={sectionRef} id="activities" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
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
              className={`group relative overflow-hidden rounded-lg aspect-[3/4] ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={activity.image || "/placeholder.svg"}
                alt={activity.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                <h3 className="font-serif font-bold text-lg mb-1">
                  {activity.title}
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
