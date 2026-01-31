"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Quote } from "lucide-react"

export default function ChairmanPage() {
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
        title="Chairman's Message"
        subtitle="A message of inspiration and vision from our esteemed Chairman."
        breadcrumb="Home / About / Chairman Message"
      />

      <section ref={contentRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll opacity-0 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Chairman Image & Info */}
              <div className="md:col-span-1">
                <div className="sticky top-32">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary rounded-2xl transform rotate-3" />
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image
                        src="/images/chairman.jpg"
                        alt="Chairman of Bharath Schools"
                        width={400}
                        height={500}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-serif text-xl font-bold text-primary">Sri. Ramesh Kumar</h3>
                    <p className="text-muted-foreground">Founder & Chairman</p>
                    <p className="text-sm text-accent mt-1">Bharath Educational Trust</p>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="md:col-span-2">
                <div className="bg-primary/5 rounded-2xl p-6 mb-8">
                  <Quote className="w-10 h-10 text-secondary mb-4" />
                  <p className="text-lg font-serif italic text-primary">
                    "Education is not just about imparting knowledge; it is about nurturing minds, building character, and preparing our children to face the challenges of tomorrow with confidence and integrity."
                  </p>
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>Dear Parents, Students, and Well-wishers,</p>

                  <p>
                    It gives me immense pleasure to welcome you to Bharath Schools. When we established this institution over two decades ago, our vision was simple yet profound – to create a center of learning that would shape young minds into responsible, capable, and compassionate individuals.
                  </p>

                  <p>
                    Today, as I look at the thousands of students who have passed through our doors and are now making their mark in various fields across the globe, I feel a deep sense of satisfaction and gratitude. Our alumni include doctors, engineers, entrepreneurs, artists, and leaders who are contributing to society in meaningful ways.
                  </p>

                  <p>
                    At Bharath Schools, we believe that every child is unique and possesses unlimited potential. Our role as educators is to provide the right environment, guidance, and opportunities for each student to discover and develop their talents. We are committed to offering a balanced education that emphasizes not just academic excellence but also moral values, physical fitness, and emotional well-being.
                  </p>

                  <p>
                    In this rapidly changing world, we continuously evolve our curriculum and teaching methodologies to prepare our students for the challenges and opportunities of the 21st century. We have invested in state-of-the-art infrastructure, technology-enabled classrooms, and highly qualified faculty to ensure that our students receive education that is at par with the best institutions globally.
                  </p>

                  <p>
                    I extend my heartfelt gratitude to our dedicated teachers, supportive parents, and motivated students who together make Bharath Schools a thriving community of learners. Your trust and partnership inspire us to strive for excellence every day.
                  </p>

                  <p>
                    I invite you to join us in this wonderful journey of education and empowerment. Together, let us build a brighter future for our children and for our nation.
                  </p>

                  <p className="font-serif text-primary font-semibold mt-8">
                    With warm regards,<br />
                    Sri. Ramesh Kumar<br />
                    Founder & Chairman
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
