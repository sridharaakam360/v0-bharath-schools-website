"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { BookOpen, Newspaper, Monitor, Clock, Users, Search } from "lucide-react"

const libraryStats = [
  { number: "25,000+", label: "Books", icon: BookOpen },
  { number: "50+", label: "Journals & Magazines", icon: Newspaper },
  { number: "20+", label: "Digital Stations", icon: Monitor },
  { number: "200+", label: "Seating Capacity", icon: Users }
]

const collections = [
  { title: "Reference Section", count: "5,000+ books", description: "Encyclopedias, dictionaries, atlases, and reference materials" },
  { title: "Fiction Collection", count: "8,000+ books", description: "Novels, short stories, and literary works for all ages" },
  { title: "Non-Fiction", count: "7,000+ books", description: "Biographies, science, history, and general knowledge" },
  { title: "Academic Textbooks", count: "3,000+ books", description: "CBSE textbooks, guides, and supplementary materials" },
  { title: "Periodicals", count: "50+ titles", description: "Newspapers, magazines, and educational journals" },
  { title: "Digital Resources", count: "Unlimited", description: "E-books, online databases, and educational videos" }
]

const timings = [
  { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "8:00 AM - 1:00 PM" },
  { day: "Sunday & Holidays", hours: "Closed" }
]

const services = [
  "Book lending for students and staff",
  "Reference assistance and research help",
  "Digital catalog and search system",
  "Quiet reading areas and study rooms",
  "Photocopying and printing services",
  "Book recommendation program",
  "Inter-library loan facility",
  "Book clubs and reading programs"
]

export default function LibraryPage() {
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
        title="Library"
        subtitle="A treasure trove of knowledge fostering a love for reading and lifelong learning."
        breadcrumb="Home / Academics / Library"
      />

      <section ref={contentRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Hero Image with Stats */}
          <div className="animate-on-scroll opacity-0 relative mb-16">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/library.jpg"
                alt="School Library"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {libraryStats.map((stat) => (
                  <div key={stat.label} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 text-center text-primary-foreground">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-secondary" />
                    <p className="font-serif text-xl md:text-2xl font-bold">{stat.number}</p>
                    <p className="text-xs text-primary-foreground/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* About the Library */}
          <div className="animate-on-scroll opacity-0 max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">About Our Library</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Bharath Schools Library is a vibrant learning hub that serves as the intellectual heart of our institution. With a vast collection of books, periodicals, and digital resources, our library caters to the diverse reading needs and interests of students from all grades. Our experienced librarian and staff are always ready to assist students in finding the right resources for their studies and personal reading.
            </p>
          </div>

          {/* Collections Grid */}
          <div className="animate-on-scroll opacity-0 mb-16">
            <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">Our Collections</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections.map((collection) => (
                <div
                  key={collection.title}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <h3 className="font-serif font-bold text-lg text-foreground mb-1">{collection.title}</h3>
                  <p className="text-sm text-accent font-medium mb-2">{collection.count}</p>
                  <p className="text-sm text-muted-foreground">{collection.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Services */}
            <div className="animate-on-scroll opacity-0">
              <h2 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Search className="w-6 h-6" />
                Library Services
              </h2>
              <div className="bg-muted rounded-xl p-6">
                <ul className="grid sm:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Timings */}
            <div className="animate-on-scroll opacity-0">
              <h2 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6" />
                Library Timings
              </h2>
              <div className="bg-primary text-primary-foreground rounded-xl p-6">
                <div className="space-y-4">
                  {timings.map((timing) => (
                    <div key={timing.day} className="flex justify-between items-center border-b border-primary-foreground/20 pb-3 last:border-0">
                      <span className="font-medium">{timing.day}</span>
                      <span className="text-secondary font-semibold">{timing.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-primary-foreground/20">
                  <p className="text-sm text-primary-foreground/80">
                    Extended hours during examination periods. Special arrangements can be made for research projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rules Notice */}
          <div className="animate-on-scroll opacity-0 mt-16 bg-secondary/20 rounded-2xl p-8">
            <h3 className="font-serif text-xl font-bold text-foreground mb-4">Library Rules</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>Maintain silence in the library at all times</li>
                <li>Handle books and materials with care</li>
                <li>Return borrowed books on time</li>
                <li>No food or drinks allowed inside</li>
              </ul>
              <ul className="space-y-2">
                <li>Students can borrow up to 3 books at a time</li>
                <li>Loan period is 14 days, renewable once</li>
                <li>Lost or damaged books must be replaced</li>
                <li>Reference books cannot be taken home</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
