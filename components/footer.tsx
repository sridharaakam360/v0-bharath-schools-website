import Link from "next/link"
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Vision & Mission", href: "/about/vision-mission" },
  { label: "Academics", href: "/academics" },
  { label: "Facilities", href: "/school/facilities" },
  { label: "Admission", href: "/admission" },
  { label: "Contact", href: "/contact" },
]

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-serif font-bold text-lg">B</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Bharath Schools</h3>
                <p className="text-xs text-primary-foreground/70">CBSE Curriculum</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Bharath Schools is committed to providing quality education with a 
              focus on academic excellence, character development, and holistic 
              growth of every student.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-secondary mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Education Lane, Knowledge City,<br />
                  State - 500001, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-secondary" />
                <span className="text-primary-foreground/80 text-sm">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-secondary" />
                <span className="text-primary-foreground/80 text-sm">
                  info@bharathschools.com
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Follow Us</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Stay connected with us on social media for updates and news.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Bharath Schools CBSE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
