"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const menuItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    dropdown: [
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Chairman Message", href: "/about/chairman" },
      { label: "Principal Message", href: "/about/principal" },
      { label: "Awards", href: "/about/awards" },
      { label: "Rules & Regulations", href: "/about/rules" },
    ],
  },
  {
    label: "Academics",
    dropdown: [
      { label: "Overview", href: "/academics" },
      { label: "Subjects", href: "/academics/subjects" },
      { label: "Laboratories", href: "/academics/laboratories" },
      { label: "Library", href: "/academics/library" },
    ],
  },
  {
    label: "School",
    dropdown: [
      { label: "Facilities", href: "/school/facilities" },
      { label: "Hostel & Cafeteria", href: "/school/hostel" },
      { label: "Activities", href: "/school/activities" },
      { label: "Transport", href: "/school/transport" },
    ],
  },
  { label: "Admission", href: "/admission" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-xl">B</span>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-serif font-bold text-lg leading-tight ${isScrolled ? 'text-primary' : 'text-primary-foreground'}`}>
                Bharath Schools
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}>
                CBSE Curriculum
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) =>
              item.dropdown ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                        isScrolled ? "text-foreground" : "text-primary-foreground"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {item.dropdown.map((subItem) => (
                      <DropdownMenuItem key={subItem.label} asChild>
                        <Link href={subItem.href} className="w-full cursor-pointer">
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Button className="ml-4 bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Parents Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t shadow-lg">
          <div className="container mx-auto px-4 py-4">
            {menuItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="py-2">
                  <p className="font-medium text-foreground mb-2">{item.label}</p>
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block py-1 text-muted-foreground hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-2 font-medium text-foreground hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <Button className="w-full mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Parents Login
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
