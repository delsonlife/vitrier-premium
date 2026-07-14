'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const storyPhrases = [
  "Vous méritez plus de lumière.",
  "Nous créons des espaces vitrés d'exception.",
]
const finalWords = "L'excellence du verre pour votre habitat".split(' ')

export default function Hero() {
  const [storyStep, setStoryStep] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const timer = setTimeout(() => {
      if (storyStep < storyPhrases.length) setStoryStep(storyStep + 1)
    }, 1800)
    return () => clearTimeout(timer)
  }, [storyStep])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const parallaxX = (mousePos.x - 0.5) * 20
  const parallaxY = (mousePos.y - 0.5) * 20

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white"
    >
      {/* Fond grille + gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)]">
        <div className="h-full w-full opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      </div>

      {/* Spotlight */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="h-full w-full"
          style={{ background: `radial-gradient(600px at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(37,99,235,0.08), transparent 80%)` }}
        />
      </div>

      <div className="relative z-20 mx-auto max-w-[1400px] px-6 text-center">
        <motion.div style={{ transform: `translate(${parallaxX * 0.3}px, ${parallaxY * 0.3}px)` }}>
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-premium-200 bg-white/60 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-premium-600">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Vitrerie haut de gamme depuis 2003
          </div>

          {/* Storytelling */}
          <div className="h-16">
            <AnimatePresence mode="wait">
              {storyStep < storyPhrases.length && (
                <motion.p
                  key={storyStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-medium text-premium-700 md:text-3xl"
                >
                  {storyPhrases[storyStep]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Titre principal animé mot par mot (apparaît après le storytelling) */}
          {storyStep === storyPhrases.length && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-5xl font-bold leading-tight tracking-tight text-premium-900 sm:text-6xl md:text-7xl lg:text-8xl font-display"
            >
              {finalWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-premium-500"
          >
            Baies vitrées, fenêtres aluminium, vérandas design : nous sublimons chaque espace avec des installations sur mesure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row justify-center"
          >
            <a href="#cta" className="group relative overflow-hidden rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-glow transition-all hover:shadow-lg">
              <span className="relative z-10 flex items-center gap-2">Demander un devis <ArrowRight size={18} /></span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#services" className="rounded-full border border-premium-300 bg-white/70 px-8 py-3.5 text-base font-medium text-premium-800 hover:border-accent hover:text-accent">
              Découvrir nos services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
