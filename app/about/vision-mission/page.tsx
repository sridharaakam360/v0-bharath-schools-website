"use client"

import { useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Eye, Target, Heart, Star, Users, BookOpen } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We uphold the highest standards of honesty and ethical behavior in all our actions."
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We strive for excellence in academics, sports, and character development."
  },
  {
    icon: Users,
    title: "Respect",
    description: "We foster a culture of mutual respect, dignity, and appreciation for diversity."
  },
  {
    icon: BookOpen,
    title: "Innovation",
    description: "We embrace creativity and innovation to prepare students for the future."
  }
]

export default function VisionMissionPage() {
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
        title="Vision & Mission"
        subtitle="Guiding principles that shape our educational philosophy and drive our commitment to excellence."
        breadcrumb="Home / About / Vision & Mission"
      />

      <section ref={contentRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Vision Section */}
          <div className="animate-on-scroll opacity-0 grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-primary">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To be a beacon of educational excellence, nurturing young minds to become responsible global citizens who contribute positively to society. We envision a school where every student discovers their potential and develops the skills needed to thrive in an ever-changing world.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We aspire to create an environment that celebrates diversity, encourages critical thinking, and fosters a lifelong love for learning. Our vision extends beyond academic achievement to encompass the holistic development of character, creativity, and compassion.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3" />
                <div className="relative bg-gradient-to-br from-primary to-accent p-8 rounded-2xl text-primary-foreground">
                  <Eye className="w-16 h-16 mb-4 opacity-80" />
                  <p className="text-xl font-serif italic">
                    "Empowering every student to achieve their fullest potential and become leaders of tomorrow."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="animate-on-scroll opacity-0 grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/30 rounded-2xl transform -rotate-3" />
                <div className="relative bg-gradient-to-br from-secondary to-yellow-300 p-8 rounded-2xl text-secondary-foreground">
                  <Target className="w-16 h-16 mb-4 opacity-80" />
                  <p className="text-xl font-serif italic">
                    "Delivering excellence in education through innovation, dedication, and unwavering commitment."
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-primary">Our Mission</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span>Provide a stimulating and supportive learning environment that encourages intellectual curiosity and academic excellence.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span>Foster the holistic development of students through balanced emphasis on academics, sports, arts, and character building.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span>Employ innovative teaching methodologies and modern technology to enhance the learning experience.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span>Instill strong values of integrity, respect, and social responsibility in every student.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span>Create partnerships with parents and the community to support student success.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Core Values */}
          <div className="animate-on-scroll opacity-0">
            <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
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
