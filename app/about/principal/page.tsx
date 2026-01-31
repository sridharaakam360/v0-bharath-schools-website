"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Quote, GraduationCap, Award, BookOpen } from "lucide-react"

const achievements = [
  { icon: GraduationCap, label: "M.Ed., Ph.D. in Education" },
  { icon: Award, label: "25+ Years Experience" },
  { icon: BookOpen, label: "Published Author" }
]

export default function PrincipalPage() {
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
        title="Principal's Message"
        subtitle="Words of wisdom and guidance from our distinguished Principal."
        breadcrumb="Home / About / Principal Message"
      />

      <section ref={contentRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll opacity-0 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Principal Image & Info */}
              <div className="md:col-span-1">
                <div className="sticky top-32">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-secondary rounded-2xl transform -rotate-3" />
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image
                        src="/images/principal.jpg"
                        alt="Principal of Bharath Schools"
                        width={400}
                        height={500}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <h3 className="font-serif text-xl font-bold text-primary">Dr. Lakshmi Devi</h3>
                    <p className="text-muted-foreground">Principal</p>
                    <p className="text-sm text-accent mt-1">Bharath Schools - CBSE</p>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    {achievements.map((item) => (
                      <div key={item.label} className="flex items-center gap-3 bg-muted rounded-lg p-3">
                        <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="md:col-span-2">
                <div className="bg-secondary/10 rounded-2xl p-6 mb-8">
                  <Quote className="w-10 h-10 text-primary mb-4" />
                  <p className="text-lg font-serif italic text-primary">
                    "Every child is a unique individual with immense potential. Our duty is to provide them with the wings to soar high while keeping them rooted in values that will guide them throughout life."
                  </p>
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>Dear Students, Parents, and Guardians,</p>

                  <p>
                    Welcome to Bharath Schools! As the Principal, it is my privilege to lead an institution that is dedicated to nurturing young minds and shaping future leaders. Education, in its truest sense, is not merely the acquisition of facts but the development of the whole person – intellectually, emotionally, socially, and morally.
                  </p>

                  <p>
                    At Bharath Schools, we follow the rriculum enriched with innovative teaching practices that make learning engaging and meaningful. Our classrooms are dynamic spaces where curiosity is celebrated, questions are encouraged, and every student's voice is valued. We believe that when students are actively involved in their learning journey, they develop critical thinking skills and a genuine love for knowledge.
                  </p>

                  <p>
                    Our dedicated team of teachers goes beyond textbooks to provide experiential learning opportunities. Through science exhibitions, literary fests, sports competitions, cultural programs, and community service initiatives, students discover their passions and develop skills that will serve them well in life. We emphasize collaborative learning while also nurturing individual talents.
                  </p>

                  <p>
                    Character education is at the heart of our school ethos. We instill values of honesty, respect, responsibility, and empathy through daily interactions and special programs. Our students learn to appreciate diversity, practice kindness, and contribute positively to their communities.
                  </p>

                  <p>
                    I believe that the partnership between school and home is crucial for a child's success. I encourage parents to actively participate in their child's education and maintain open communication with teachers. Together, we can provide the support and guidance our students need to thrive.
                  </p>

                  <p>
                    To our students, I say: Dream big, work hard, and never stop learning. The world is full of possibilities waiting for you to explore. Make the most of your time at Bharath Schools, and remember that your teachers and I are here to support you every step of the way.
                  </p>

                  <p className="font-serif text-primary font-semibold mt-8">
                    With best wishes,<br />
                    Dr. Lakshmi Devi<br />
                    Principal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
