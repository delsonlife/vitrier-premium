// components/ui/Spotlight.tsx
'use client'

import { useRef, useEffect, useState } from 'react'

export default function Spotlight({ className = '' }: { className?: string }) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return
      const rect = divRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setPosition({ x, y })
      setIsVisible(true)
    }
    const handleMouseLeave = () => setIsVisible(false)

    const el = divRef.current
    if (el) {
      el.addEventListener('mousemove', handleMouseMove)
      el.addEventListener('mouseleave', handleMouseLeave)
    }
    return () => {
      if (el) {
        el.removeEventListener('mousemove', handleMouseMove)
        el.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <div
      ref={divRef}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(400px at ${position.x}px ${position.y}px, rgba(37,99,235,0.08), transparent 80%)`
        }}
      />
      {/* Contenu enfant */}
      <div className="relative z-20">
        {/* children passés via le parent, nous utiliserons plutôt un wrapper qui englobe le contenu */}
      </div>
    </div>
  )
}
