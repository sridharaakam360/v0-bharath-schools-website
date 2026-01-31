"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

export function ScrollSection({ children }: { children: ReactNode }) {
  return (
    <section className="h-screen snap-start flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </section>
  )
}
