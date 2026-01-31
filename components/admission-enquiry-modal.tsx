"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

const classOptions = [
  "Pre-KG", "LKG", "UKG",
  "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
  "Class 6", "Class 7", "Class 8", "Class 9", "Class 10",
  "Class 11", "Class 12",
]

export function AdmissionEnquiryModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    className: "",
    comments: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  if (!open) return null

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!form.name.trim()) newErrors.name = "Name is required"

    if (!/^[0-9]{10}$/.test(form.mobile))
      newErrors.mobile = "Mobile number must be 10 digits"

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    )
      newErrors.email = "Enter a valid email address"

    if (!form.className) newErrors.className = "Please select a class"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    console.log("Form Data:", form)
    alert("Enquiry submitted successfully!")
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-xl p-6">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
        >
          <X />
        </button>

        <h2 className="text-2xl font-serif font-bold mb-4 text-center">
          Admission Enquiry
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Student Name"
              className="w-full border rounded-lg px-4 py-2"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <input
              type="tel"
              inputMode="numeric"
              maxLength={10}
              placeholder="Mobile Number"
              className="w-full border rounded-lg px-4 py-2"
              value={form.mobile}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "")
                setForm({ ...form, mobile: value })
              }}
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm">{errors.mobile}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email ID"
              className="w-full border rounded-lg px-4 py-2"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Class */}
          <div>
            <select
              className="w-full border rounded-lg px-4 py-2"
              value={form.className}
              onChange={(e) =>
                setForm({ ...form, className: e.target.value })
              }
            >
              <option value="">Select Class</option>
              {classOptions.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
            {errors.className && (
              <p className="text-red-500 text-sm">
                {errors.className}
              </p>
            )}
          </div>

          {/* Comments (Optional) */}
          <textarea
            placeholder="Comments (optional)"
            rows={3}
            className="w-full border rounded-lg px-4 py-2"
            value={form.comments}
            onChange={(e) =>
              setForm({ ...form, comments: e.target.value })
            }
          />

          <Button type="submit" className="w-full text-lg">
            Submit Enquiry
          </Button>
        </form>
      </div>
    </div>
  )
}
