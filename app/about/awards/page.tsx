"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Trophy, Medal, Star, Award } from "lucide-react"

const awards = [
  {
    year: "2024",
    items: [
      { title: "Best CBSE School Award", body: "State Education Board", icon: Trophy },
      { title: "Excellence in Sports", body: "National School Games Federation", icon: Medal },
      { title: "Green School Certification", body: "Environment Ministry", icon: Star }
    ]
  },
  {
    year: "2023",
    items: [
      { title: "Innovation in Education", body: "EdTech Foundation", icon: Award },
      { title: "100% Board Results", body: "CBSE Board", icon: Trophy },
      { title: "Cultural Excellence Award", body: "State Cultural Department", icon: Star }
    ]
  },
  {
    year: "2022",
    items: [
      { title: "Best Infrastructure", body: "School Accreditation Council", icon: Award },
      { title: "State Science Olympiad Winners", body: "Science Foundation of India", icon: Medal },
      { title: "Community Service Award", body: "District Administration", icon: Trophy }
    ]
  }
]

const achievements = [
  { number: "50+", label: "Awards Won" },
  { number: "100%", label: "Board Results" },
  { number: "200+", label: "Competition Medals" },
  { number: "25+", label: "Years of Excellence" }
]

export default function AwardsPage() {
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
        title="Awards & Achievements"
        subtitle="Celebrating excellence and recognizing the accomplishments of our students and institution."
        breadcrumb="Home / About / Awards"
      />

      <section ref={contentRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Stats Section */}
          <div className="animate-on-scroll opacity-0 grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {achievements.map((stat) => (
              <div key={stat.label} className="text-center bg-primary rounded-xl p-6">
                <p className="font-serif text-4xl md:text-5xl font-bold text-secondary">{stat.number}</p>
                <p className="text-primary-foreground/80 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Trophy Image */}
          <div className="animate-on-scroll opacity-0 mb-16">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/images/awards.jpg"
                alt="Awards and trophies display"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground">
                  A Legacy of Excellence
                </h2>
                <p className="text-primary-foreground/80 mt-2">
                  Our trophy cabinet reflects decades of dedication to academic and extracurricular excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Awards Timeline */}
          <div className="animate-on-scroll opacity-0">
            <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">Recent Awards</h2>
            <div className="space-y-12">
              {awards.map((yearGroup) => (
                <div key={yearGroup.year}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                      <span className="font-serif font-bold text-lg text-secondary-foreground">{yearGroup.year}</span>
                    </div>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 pl-4 md:pl-20">
                    {yearGroup.items.map((award) => (
                      <div
                        key={award.title}
                        className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <award.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-serif font-semibold text-lg text-foreground mb-1">{award.title}</h3>
                        <p className="text-sm text-muted-foreground">{award.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
