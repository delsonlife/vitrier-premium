'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const storyPhrases = [
  "Vous méritez plus de lumière.",
  "Nous créons des espaces vitrés d'exception.",
]

export default function Hero() {
  const [storyStep, setStoryStep] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const timer = setTimeout(() => {
      if (storyStep < storyPhrases.length) setStoryStep(storyStep + 1)
    }, 1600)
    return () => clearTimeout(timer)
  }, [storyStep])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const parallaxX = (mousePos.x - 0.5) * 16
  const parallaxY = (mousePos.y - 0.5) * 16

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-premium-900"
    >
      {/* Photo de fond avec effet Ken Burns lent */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1760987785427-66eb74845e7e?fm=jpg&q=60&w=3000&auto=format&fit=crop"
          alt="Façade vitrée moderne, illustration d'une réalisation CristalVitrier"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Overlays : lisibilité + ambiance premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-premium-900/80 via-premium-900/55 to-premium-900/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      {/* Spotlight doré qui suit la souris */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            background: `radial-gradient(700px at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(176,141,87,0.15), transparent 80%)`,
          }}
        />
      </div>

      {/* Fine texture verre (léger quadrillage) */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-20 mx-auto max-w-[1400px] px-6 text-center">
        <motion.div style={{ transform: `translate(${parallaxX * 0.3}px, ${parallaxY * 0.3}px)` }}>
          {/* Eyebrow — remplace le badge pill par une mention discrète et élégante */}
          <motion.div
            initial={{ opacity: 0, letterSpacing: '0.05em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1 }}
            className="mb-8 inline-flex items-center gap-3 text-xs font-medium uppercase text-accent-light"
          >
            <span className="h-px w-8 bg-accent-light/60" />
            Vitrerie d'exception depuis 2003
            <span className="h-px w-8 bg-accent-light/60" />
          </motion.div>

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
                  className="font-display text-2xl italic font-light text-white/90 md:text-3xl"
                >
                  {storyPhrases[storyStep]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Titre principal */}
          {storyStep === storyPhrases.length && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-4 font-display text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              L'excellence du verre
              <br />
              <span className="text-accent-light">pour votre habitat</span>
            </motion.h1>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mx-auto mt-6 max-w-xl text-lg font-light text-white/70"
          >
            Baies vitrées, fenêtres aluminium, vérandas design : nous sublimons chaque espace avec des installations sur mesure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row justify-center"
          >
            <a
              href="#cta"
              className="group relative overflow-hidden rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-glow transition-all hover:shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Demander un devis <ArrowRight size={18} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#gallery"
              className="rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-8 py-3.5 text-base font-medium text-white hover:border-accent-light hover:text-accent-light transition-colors"
            >
              Voir nos réalisations
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="text-white/50"
        >
          <ChevronDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  )
}
