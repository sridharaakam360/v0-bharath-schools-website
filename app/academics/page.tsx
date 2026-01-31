"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { BookOpen, FlaskConical, Library, GraduationCap, ArrowRight } from "lucide-react"

const academicSections = [
  {
    icon: BookOpen,
    title: "Subjects Offered",
    description: "Comprehensive CBSE curriculum covering Sciences, Humanities, Commerce, and Languages.",
    href: "/academics/subjects",
    image: "/images/hero-classroom.jpg"
  },
  {
    icon: FlaskConical,
    title: "Laboratories",
    description: "State-of-the-art labs for Physics, Chemistry, Biology, and Computer Science.",
    href: "/academics/laboratories",
    image: "/images/science-lab.jpg"
  },
  {
    icon: Library,
    title: "Library",
    description: "Well-stocked library with thousands of books, journals, and digital resources.",
    href: "/academics/library",
    image: "/images/library.jpg"
  }
]

const curriculumHighlights = [
  "CBSE affiliated curriculum (Affiliation No: XXXXX)",
  "Activity-based and experiential learning approach",
  "Regular assessments and progress tracking",
  "Focus on conceptual understanding over rote learning",
  "Integration of technology in teaching",
  "Special attention to weak students through remedial classes"
]

const grades = [
  { level: "Pre-Primary", classes: "Nursery, LKG, UKG", focus: "Foundation & Play-based Learning" },
  { level: "Primary", classes: "Classes I - V", focus: "Core Skills & Concept Building" },
  { level: "Middle School", classes: "Classes VI - VIII", focus: "Subject Expertise & Critical Thinking" },
  { level: "Secondary", classes: "Classes IX - X", focus: "Board Preparation & Career Guidance" },
  { level: "Senior Secondary", classes: "Classes XI - XII", focus: "Specialization & Competitive Exams" }
]

export default function AcademicsPage() {
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
        title="Academics"
        subtitle="Excellence in education through innovative teaching methods and comprehensive curriculum."
        breadcrumb="Home / Academics"
      />

      <section ref={contentRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* CBSE Overview */}
          <div className="animate-on-scroll opacity-0 grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-primary">CBSE Curriculum</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bharath Schools follows the curriculum prescribed by the Central Board of Secondary Education (CBSE), New Delhi. Our academic program is designed to provide students with a strong foundation in all subjects while encouraging critical thinking, creativity, and holistic development.
              </p>
              <ul className="space-y-3">
                {curriculumHighlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3" />
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero-classroom.jpg"
                  alt="Students in classroom"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Grade Levels */}
          <div className="animate-on-scroll opacity-0 mb-20">
            <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">Grade Levels</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {grades.map((grade) => (
                <div
                  key={grade.level}
                  className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all text-center"
                >
                  <h3 className="font-serif font-bold text-lg text-primary mb-1">{grade.level}</h3>
                  <p className="text-sm text-foreground font-medium mb-2">{grade.classes}</p>
                  <p className="text-xs text-muted-foreground">{grade.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Sections */}
          <div className="animate-on-scroll opacity-0">
            <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">Explore More</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {academicSections.map((section) => (
                <Link
                  key={section.title}
                  href={section.href}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={section.image || "/placeholder.svg"}
                      alt={section.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <section.icon className="w-5 h-5 text-secondary-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{section.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
