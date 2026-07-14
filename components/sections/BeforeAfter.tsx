// components/sections/BeforeAfter.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const newPos = Math.min(100, Math.max(0, (x / rect.width) * 100))
    setSliderPos(newPos)
  }

  // Mouse & Touch
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      handleMove(e.clientX)
    }
    const handleMouseUp = () => { isDragging.current = false }
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-premium-900 md:text-5xl font-display">
            La transformation en un geste
          </h2>
          <p className="mt-4 text-premium-500 max-w-lg mx-auto">
            Faites glisser le curseur pour comparer avant et après notre intervention.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          ref={containerRef}
          className="relative mx-auto h-[500px] max-w-4xl overflow-hidden rounded-3xl shadow-lift cursor-ew-resize select-none"
          onMouseDown={() => { isDragging.current = true }}
          onTouchStart={() => { isDragging.current = true }}
        >
          {/* Image Après (pleine largeur) */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80')] bg-cover bg-center" />

          {/* Image Avant (révélée à gauche du curseur) */}
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80')] bg-cover bg-center"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          />

          {/* Ligne de séparation et handle */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-2xl border-2 border-accent">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-accent">
                <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-6 left-6 rounded-full bg-black/40 px-4 py-1 text-sm text-white backdrop-blur-sm">
            Avant
          </div>
          <div className="absolute bottom-6 right-6 rounded-full bg-accent/90 px-4 py-1 text-sm text-white backdrop-blur-sm">
            Après
          </div>
        </motion.div>
      </div>
    </section>
  )
}
