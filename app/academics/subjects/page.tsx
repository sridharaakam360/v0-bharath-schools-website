"use client"

import { useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Atom, Calculator, Globe, BookText, Palette, Dumbbell, Laptop, Languages } from "lucide-react"

const subjectCategories = [
  {
    category: "Sciences",
    icon: Atom,
    color: "bg-blue-500",
    subjects: [
      { name: "Physics", grades: "IX-XII", description: "Mechanics, thermodynamics, optics, electricity, and modern physics" },
      { name: "Chemistry", grades: "IX-XII", description: "Organic, inorganic, physical chemistry and laboratory work" },
      { name: "Biology", grades: "IX-XII", description: "Botany, zoology, human physiology, and environmental science" },
      { name: "Mathematics", grades: "I-XII", description: "Arithmetic, algebra, geometry, calculus, and statistics" }
    ]
  },
  {
    category: "Languages",
    icon: Languages,
    color: "bg-green-500",
    subjects: [
      { name: "English", grades: "I-XII", description: "Language skills, literature, grammar, and communication" },
      { name: "Hindi", grades: "I-XII", description: "Hindi language, literature, and grammar" },
      { name: "Sanskrit", grades: "VI-X", description: "Classical Sanskrit language and texts" },
      { name: "Telugu", grades: "I-X", description: "Regional language option for Telugu medium students" }
    ]
  },
  {
    category: "Social Sciences",
    icon: Globe,
    color: "bg-amber-500",
    subjects: [
      { name: "History", grades: "VI-XII", description: "World history, Indian history, and historical analysis" },
      { name: "Geography", grades: "VI-XII", description: "Physical, human, and economic geography" },
      { name: "Political Science", grades: "IX-XII", description: "Indian polity, constitution, and international relations" },
      { name: "Economics", grades: "IX-XII", description: "Micro and macroeconomics, Indian economy" }
    ]
  },
  {
    category: "Commerce",
    icon: Calculator,
    color: "bg-purple-500",
    subjects: [
      { name: "Accountancy", grades: "XI-XII", description: "Financial accounting, corporate accounting, and analysis" },
      { name: "Business Studies", grades: "XI-XII", description: "Business management, marketing, and entrepreneurship" },
      { name: "Economics", grades: "XI-XII", description: "Microeconomics, macroeconomics, and Indian development" }
    ]
  },
  {
    category: "Arts & Creativity",
    icon: Palette,
    color: "bg-pink-500",
    subjects: [
      { name: "Art & Craft", grades: "I-X", description: "Drawing, painting, sculpture, and creative arts" },
      { name: "Music", grades: "I-X", description: "Vocal and instrumental music training" },
      { name: "Dance", grades: "I-X", description: "Classical and contemporary dance forms" }
    ]
  },
  {
    category: "Technology",
    icon: Laptop,
    color: "bg-cyan-500",
    subjects: [
      { name: "Computer Science", grades: "VI-XII", description: "Programming, web development, and computer fundamentals" },
      { name: "Information Practices", grades: "XI-XII", description: "Database management, networking, and IT applications" },
      { name: "AI & Robotics", grades: "VI-X", description: "Introduction to artificial intelligence and robotics" }
    ]
  },
  {
    category: "Physical Education",
    icon: Dumbbell,
    color: "bg-red-500",
    subjects: [
      { name: "Physical Education", grades: "I-XII", description: "Sports, fitness, and health education" },
      { name: "Yoga", grades: "I-XII", description: "Yoga asanas, meditation, and wellness" },
      { name: "NCC/Scouts", grades: "VI-XII", description: "National Cadet Corps and scouts training" }
    ]
  }
]

export default function SubjectsPage() {
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
        title="Subjects Offered"
        subtitle="Comprehensive curriculum designed to nurture well-rounded individuals ready for future challenges."
        breadcrumb="Home / Academics / Subjects"
      />

      <section ref={contentRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Overview */}
          <div className="animate-on-scroll opacity-0 max-w-3xl mx-auto text-center mb-16">
            <p className="text-muted-foreground leading-relaxed">
              At Bharath Schools, we offer a wide range of subjects following the CBSE curriculum. Our academic program is designed to provide students with strong foundations while allowing them to explore their interests and develop specialized skills. Each subject is taught by qualified and experienced faculty using modern teaching methodologies.
            </p>
          </div>

          {/* Subject Categories */}
          <div className="space-y-12">
            {subjectCategories.map((category, index) => (
              <div key={category.category} className="animate-on-scroll opacity-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">{category.category}</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pl-0 md:pl-16">
                  {category.subjects.map((subject) => (
                    <div
                      key={subject.name}
                      className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all"
                    >
                      <h3 className="font-semibold text-foreground mb-1">{subject.name}</h3>
                      <p className="text-xs text-accent font-medium mb-2">Grades: {subject.grades}</p>
                      <p className="text-sm text-muted-foreground">{subject.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stream Options */}
          <div className="animate-on-scroll opacity-0 mt-20">
            <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">Stream Options (XI-XII)</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-primary text-primary-foreground rounded-2xl p-8">
                <BookText className="w-10 h-10 mb-4 text-secondary" />
                <h3 className="font-serif text-xl font-bold mb-4">Science Stream</h3>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li>Physics, Chemistry, Mathematics/Biology</li>
                  <li>Computer Science / Physical Education</li>
                  <li>English (Core)</li>
                  <li>Prepares for Engineering, Medical, Research</li>
                </ul>
              </div>
              <div className="bg-accent text-accent-foreground rounded-2xl p-8">
                <Calculator className="w-10 h-10 mb-4 text-secondary" />
                <h3 className="font-serif text-xl font-bold mb-4">Commerce Stream</h3>
                <ul className="space-y-2 text-sm text-accent-foreground/80">
                  <li>Accountancy, Business Studies, Economics</li>
                  <li>Mathematics / Informatics Practices</li>
                  <li>English (Core)</li>
                  <li>Prepares for CA, MBA, Banking, Business</li>
                </ul>
              </div>
              <div className="bg-secondary text-secondary-foreground rounded-2xl p-8">
                <Globe className="w-10 h-10 mb-4 text-primary" />
                <h3 className="font-serif text-xl font-bold mb-4">Humanities Stream</h3>
                <ul className="space-y-2 text-sm text-secondary-foreground/80">
                  <li>History, Political Science, Geography</li>
                  <li>Economics / Psychology / Sociology</li>
                  <li>English (Core)</li>
                  <li>Prepares for Civil Services, Law, Journalism</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
