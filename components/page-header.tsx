"use client"

import { useEffect, useRef } from "react"

interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumb?: string
}

export function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null)

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

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative bg-primary pt-32 pb-30 overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div
        ref={headerRef}
        className="container mx-auto px-4 relative z-10 opacity-0"
      >
        {breadcrumb && (
          <p className="text-primary-foreground/70 text-sm mb-2">{breadcrumb}</p>
        )}
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100V60C240 20 480 0 720 20C960 40 1200 80 1440 60V100H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
