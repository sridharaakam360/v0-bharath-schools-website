"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { 
  Home, 
  UtensilsCrossed, 
  Wifi, 
  ShieldCheck, 
  Stethoscope, 
  BookOpen,
  Tv,
  Shirt,
  Phone,
  CheckCircle
} from "lucide-react"

const hostelFeatures = [
  { icon: Home, label: "Spacious Rooms", description: "Well-ventilated rooms with comfortable beds and study tables" },
  { icon: Wifi, label: "Wi-Fi Enabled", description: "High-speed internet for academic research and communication" },
  { icon: ShieldCheck, label: "24/7 Security", description: "Round-the-clock security with CCTV surveillance" },
  { icon: Stethoscope, label: "Medical Care", description: "On-campus medical facility with trained nursing staff" },
  { icon: BookOpen, label: "Study Hall", description: "Dedicated quiet study areas with extended hours" },
  { icon: Tv, label: "Recreation Room", description: "Common room with TV, indoor games, and leisure activities" },
  { icon: Shirt, label: "Laundry Service", description: "Regular laundry and ironing services for students" },
  { icon: Phone, label: "Parent Communication", description: "Regular updates and parent-teacher communication" }
]

const cafeteriaMenu = [
  { meal: "Breakfast", time: "7:00 - 8:00 AM", items: "Idli, Dosa, Poha, Upma, Bread, Eggs, Milk, Juice, Fruits" },
  { meal: "Lunch", time: "12:30 - 1:30 PM", items: "Rice, Chapati, Dal, Vegetables, Salad, Curd, Dessert" },
  { meal: "Snacks", time: "4:30 - 5:00 PM", items: "Samosa, Sandwich, Biscuits, Tea, Milk, Fruits" },
  { meal: "Dinner", time: "7:30 - 8:30 PM", items: "Rice/Chapati, Dal, Vegetables, Salad, Sweet" }
]

const hostelRules = [
  "Students must be in their rooms by 9:00 PM",
  "Maintain cleanliness in rooms and common areas",
  "No electrical appliances without permission",
  "Visitors allowed only during designated hours",
  "Regular attendance in study hours is mandatory",
  "Mobile phones restricted to specific hours"
]

export default function HostelPage() {
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
        title="Hostel & Cafeteria"
        subtitle="Home away from home with comfortable accommodation and nutritious meals."
        breadcrumb="Home / School / Hostel & Cafeteria"
      />

      <section ref={contentRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Hostel Section */}
          <div className="animate-on-scroll opacity-0 grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">Residential Hostel</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our residential hostel provides a safe, comfortable, and nurturing environment for students from outstation. With separate hostels for boys and girls, we ensure that students feel at home while pursuing their academic goals. The hostel is managed by experienced wardens who provide personal attention to each student.
              </p>
              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Accommodation Options</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <p className="font-serif text-2xl font-bold text-primary">2</p>
                    <p className="text-sm text-muted-foreground">Bed Rooms</p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <p className="font-serif text-2xl font-bold text-primary">4</p>
                    <p className="text-sm text-muted-foreground">Bed Rooms</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3" />
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/hostel.jpg"
                  alt="Hostel Room"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Hostel Features */}
          <div className="animate-on-scroll opacity-0 mb-20">
            <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">Hostel Facilities</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hostelFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.label}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cafeteria Section */}
          <div className="animate-on-scroll opacity-0 grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="md:order-2">
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">School Cafeteria</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our hygienic cafeteria serves nutritious and delicious meals prepared by experienced cooks under the supervision of a nutritionist. We ensure a balanced diet with variety in the menu to cater to different tastes while maintaining high standards of food safety and hygiene.
              </p>
              <ul className="space-y-2">
                {["Fresh ingredients sourced daily", "Balanced nutritious meals", "Special dietary options available", "Hygienic preparation standards"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:order-1 relative">
              <div className="absolute inset-0 bg-secondary/30 rounded-2xl transform -rotate-3" />
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/cafeteria.jpg"
                  alt="School Cafeteria"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Menu Schedule */}
          <div className="animate-on-scroll opacity-0 mb-20">
            <h2 className="font-serif text-3xl font-bold text-primary text-center mb-12">Daily Menu Schedule</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cafeteriaMenu.map((menu) => (
                <div
                  key={menu.meal}
                  className="bg-primary text-primary-foreground rounded-xl p-6"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <UtensilsCrossed className="w-5 h-5 text-secondary" />
                    <h3 className="font-serif font-bold text-lg">{menu.meal}</h3>
                  </div>
                  <p className="text-sm text-secondary font-medium mb-3">{menu.time}</p>
                  <p className="text-sm text-primary-foreground/80">{menu.items}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hostel Rules */}
          <div className="animate-on-scroll opacity-0 bg-muted rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Hostel Rules & Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {hostelRules.map((rule, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{rule}</span>
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
