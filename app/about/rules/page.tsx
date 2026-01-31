"use client"

import { useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { CheckCircle, Clock, BookOpen, Users, ShieldCheck, AlertTriangle } from "lucide-react"

const generalRules = [
  "Students must arrive at school by 8:00 AM. Late arrivals must report to the office.",
  "School uniform is mandatory on all working days. Students in improper uniform will not be allowed in class.",
  "Identity cards must be worn at all times within the school premises.",
  "Mobile phones and electronic devices are strictly prohibited in school.",
  "Students must maintain discipline and decorum at all times.",
  "Respect for teachers, staff, and fellow students is expected from everyone.",
  "Bullying, harassment, or any form of violence will result in strict disciplinary action.",
  "Students must take care of school property. Any damage will be charged to parents.",
  "Prior permission is required for any absence. A leave application must be submitted.",
  "Students are not allowed to leave the school premises during school hours without permission."
]

const academicRules = [
  "Regular attendance is mandatory. Minimum 75% attendance is required for promotion.",
  "All homework and assignments must be completed and submitted on time.",
  "Students must carry the required books, notebooks, and stationery daily.",
  "Cheating or copying in examinations will result in disqualification.",
  "Students must maintain silence in the library and study areas.",
  "Active participation in class discussions and activities is encouraged."
]

const codeOfConduct = [
  { icon: Clock, title: "Punctuality", description: "Be on time for all classes, assemblies, and activities." },
  { icon: BookOpen, title: "Academic Integrity", description: "Complete your own work honestly without plagiarism." },
  { icon: Users, title: "Respect", description: "Treat everyone with dignity, kindness, and respect." },
  { icon: ShieldCheck, title: "Safety", description: "Follow all safety guidelines and report concerns." }
]

export default function RulesPage() {
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
        title="Rules & Regulations"
        subtitle="Guidelines that ensure a safe, respectful, and productive learning environment for all."
        breadcrumb="Home / About / Rules & Regulations"
      />

      <section ref={contentRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Code of Conduct Cards */}
          <div className="animate-on-scroll opacity-0 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {codeOfConduct.map((item) => (
              <div key={item.title} className="bg-primary text-primary-foreground rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-primary-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* General Rules */}
            <div className="animate-on-scroll opacity-0">
              <h2 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <ShieldCheck className="w-7 h-7" />
                General Rules
              </h2>
              <div className="bg-card border border-border rounded-xl p-6">
                <ul className="space-y-4">
                  {generalRules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Academic Rules */}
            <div className="animate-on-scroll opacity-0">
              <h2 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <BookOpen className="w-7 h-7" />
                Academic Rules
              </h2>
              <div className="bg-card border border-border rounded-xl p-6 mb-8">
                <ul className="space-y-4">
                  {academicRules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disciplinary Action Notice */}
              <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Disciplinary Action</h3>
                    <p className="text-sm text-muted-foreground">
                      Violation of school rules may result in disciplinary action including verbal warning, written warning, parent meeting, suspension, or in severe cases, expulsion. The school reserves the right to take appropriate action based on the nature and severity of the offense.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="animate-on-scroll opacity-0 mt-16 bg-muted rounded-2xl p-8 text-center">
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">Need a Complete Copy?</h3>
            <p className="text-muted-foreground mb-6">
              Download the complete student handbook with all rules, regulations, and guidelines.
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Download Student Handbook (PDF)
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
