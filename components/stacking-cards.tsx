"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface StackingCardProps {
  children: ReactNode
  index: number
  totalCards: number
}

function StackingCard({ children, index, totalCards }: StackingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return

      const rect = cardRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how far the card has scrolled past the top
      const scrollPastTop = -rect.top
      const cardHeight = rect.height

      // Progress from 0 (card at top of viewport) to 1 (card fully scrolled up)
      const progress = Math.max(0, Math.min(1, scrollPastTop / (cardHeight * 0.6)))

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Stacking effect calculations
  const stackOffset = 40 // pixels between stacked cards
  const baseTop = index * stackOffset
  const scale = 1 - scrollProgress * 0.08
  const opacity = 1 - scrollProgress * 0.3
  const translateY = -scrollProgress * 50

  return (
    <div
      ref={cardRef}
      className="sticky w-full will-change-transform"
      style={{
        top: `${baseTop}px`,
        zIndex: index + 1,
        transform: `scale(${Math.max(scale, 0.85)}) translateY(${translateY}px)`,
        opacity: Math.max(opacity, 0.6),
        transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
      }}
    >
      {children}
    </div>
  )
}

interface StackingCardsContainerProps {
  children: ReactNode[]
}

export function StackingCardsContainer({ children }: StackingCardsContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="relative" style={{ marginTop: "-2rem" }}>
      {children.map((child, index) => (
        <StackingCard key={index} index={index} totalCards={children.length}>
          {child}
        </StackingCard>
      ))}
    </div>
  )
}
