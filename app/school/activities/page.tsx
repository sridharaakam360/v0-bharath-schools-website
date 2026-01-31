"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { 
  Trophy, 
  Music, 
  Palette, 
  Drama, 
  BookOpen, 
  Globe,
  Heart,
  Users
} from "lucide-react"

const activities = [
  {
    category: "Sports & Athletics",
    icon: Trophy,
    color: "bg-red-500",
    image: "/images/activity-sports.jpg",
    items: [
      { name: "Cricket", description: "Inter-school tournaments and coaching" },
      { name: "Football", description: "Training and league matches" },
      { name: "Basketball", description: "Indoor courts with professional coaching" },
      { name: "Badminton", description: "State-level participation" },
      { name: "Athletics", description: "Track and field events" },
      { name: "Table Tennis", description: "Indoor facilities available" }
    ]
  },
  {
    category: "Music & Performing Arts",
    icon: Music,
    color: "bg-purple-500",
    image: "/images/activity-music.jpg",
    items: [
      { name: "Vocal Music", description: "Classical and light music training" },
      { name: "Instrumental", description: "Keyboard, guitar, tabla, and more" },
      { name: "Dance", description: "Classical and contemporary forms" },
      { name: "Drama", description: "Theater and skit performances" },
      { name: "School Band", description: "Performances at events" }
    ]
  },
  {
    category: "Visual Arts & Crafts",
    icon: Palette,
    color: "bg-pink-500",
    image: "/images/activity-arts.jpg",
    items: [
      { name: "Painting", description: "Oil, watercolor, and acrylic" },
      { name: "Sketching", description: "Portrait and landscape" },
      { name: "Craft Work", description: "Creative arts and DIY projects" },
      { name: "Photography", description: "Digital photography club" },
      { name: "Pottery", description: "Clay modeling and ceramics" }
    ]
  },
  {
    category: "Yoga & Wellness",
    icon: Heart,
    color: "bg-green-500",
    image: "/images/activity-yoga.jpg",
    items: [
      { name: "Yoga Classes", description: "Daily sessions for all grades" },
      { name: "Meditation", description: "Mindfulness and concentration" },
      { name: "Karate", description: "Self-defense training" },
      { name: "Aerobics", description: "Fitness and health" }
    ]
  }
]

const clubs = [
  { name: "Science Club", icon: Globe, description: "Experiments, exhibitions, and science fairs" },
  { name: "Literary Club", icon: BookOpen, description: "Debates, elocution, and creative writing" },
  { name: "Drama Club", icon: Drama, description: "Theater productions and skits" },
  { name: "Eco Club", icon: Heart, description: "Environmental awareness and initiatives" },
  { name: "Social Service", icon: Users, description: "Community outreach programs" },
  { name: "Quiz Club", icon: Trophy, description: "Quiz competitions and knowledge contests" }
]

const events = [
  { name: "Annual Day", month: "January", description: "Cultural performances and prize distribution" },
  { name: "Sports Day", month: "December", description: "Athletic competitions and team sports" },
  { name: "Independence Day", month: "August", description: "Patriotic programs and flag hoisting" },
  { name: "Science Exhibition", month: "November", description: "Student projects and innovations" },
  { name: "Literary Fest", month: "September", description: "Debates, poetry, and creative events" },
  { name: "Art Exhibition", month: "February", description: "Showcase of student artwork" }
]

export default function ActivitiesPage() {
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
        title="Activities & Events"
        subtitle="Nurturing talents and building skills through diverse extracurricular programs."
        breadcrumb="Home / School / Activities"
      />

      <section ref={contentRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Activities Categories */}
          {activities.map((activity, index) => (
            <div key={activity.category} className={`animate-on-scroll opacity-0 mb-16 ${index !== 0 ? 'pt-16 border-t border-border' : ''}`}>
              <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? '' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${activity.color} flex items-center justify-center`}>
                      <activity.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">{activity.category}</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {activity.items.map((item) => (
                      <div key={item.name} className="bg-muted rounded-lg p-4">
                        <h3 className="font-semibold text-foreground text-sm">{item.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="relative">
                    <div className={`absolute inset-0 rounded-2xl transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} ${activity.color} opacity-20`} />
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.category}
                        width={600}
                        height={400}
                        className="w-full h-72 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* School Clubs */}
          <div className="animate-on-scroll opacity-0 pt-16 border-t border-border mb-16">
            <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">School Clubs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((club) => (
                <div
                  key={club.name}
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <club.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{club.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{club.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Annual Events */}
          <div className="animate-on-scroll opacity-0 bg-primary rounded-2xl p-8 md:p-12">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground text-center mb-12">Annual Events Calendar</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div
                  key={event.name}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5 text-primary-foreground"
                >
                  <p className="text-sm text-secondary font-medium">{event.month}</p>
                  <h3 className="font-serif font-bold text-lg mt-1">{event.name}</h3>
                  <p className="text-sm text-primary-foreground/80 mt-2">{event.description}</p>
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
