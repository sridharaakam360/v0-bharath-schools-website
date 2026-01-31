"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AdmissionEnquiryModal } from "@/components/admission-enquiry-modal"
import { useRouter } from "next/navigation"


const slides = [
  {
    image: "/images/hero-classroom.jpg",
    alt: "Students in modern classroom",
  },
  {
    image: "/images/hero-campus.jpg",
    alt: "Bharath Schools campus",
  },
  {
    image: "/images/hero-sports.jpg",
    alt: "Students playing sports",
  },
  {
    image: "/images/hero-cultural.jpg",
    alt: "Cultural events celebration",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const router = useRouter()

  const [openModal, setOpenModal] = useState(false)

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-primary/60" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 animate-fade-up">
          <span className="text-balance">Bharath Schools – CBSE</span>
        </h1>
        <p className="text-lg md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-up text-pretty" style={{ animationDelay: "0.2s" }}>
          Empowering Students – Excellence For All | From All
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {/* <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8">
            Admission Enquiry
          </Button> */}
          <Button
  size="lg"
  className="bg-secondary text-secondary-foreground text-lg px-8"
  onClick={() => setOpenModal(true)}
>
  Admission Enquiry
</Button>

         <Button
  size="lg"
  variant="outline"
  onClick={() => router.push("/contact")}
  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 bg-transparent"
>
  Contact Us
</Button>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 text-primary-foreground hover:bg-background/40 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 text-primary-foreground hover:bg-background/40 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-secondary" : "bg-primary-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <AdmissionEnquiryModal
  open={openModal}
  onClose={() => setOpenModal(false)}
/>

    </section>
  )
}
