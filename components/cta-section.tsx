"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="admission" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Admissions Open for CBSE Curriculum
          </h2>
          <p className="text-secondary-foreground/80 mb-8 text-lg">
            Join us for the academic year 2025-26. Limited seats available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10 text-lg px-8 bg-transparent"
            >
              Download Prospectus
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
