"use client"

import { useEffect, useState, useRef, type RefObject } from "react"

interface ParallaxOptions {
  speed?: number
  direction?: "up" | "down"
}

export function useParallax<T extends HTMLElement>(
  options: ParallaxOptions = {}
): [RefObject<T | null>, number] {
  const { speed = 0.3, direction = "up" } = options
  const ref = useRef<T>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = windowHeight / 2
      const distance = elementCenter - viewportCenter

      const parallaxOffset = distance * speed * (direction === "up" ? 1 : -1)
      setOffset(parallaxOffset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, direction])

  return [ref, offset]
}
