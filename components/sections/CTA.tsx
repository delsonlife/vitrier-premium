// components/sections/CTA.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="cta" className="bg-white py-24" ref={ref}>
      <div className="mx-auto max-w-[900px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="rounded-4xl bg-gradient-to-br from-accent to-accent-deep p-12 shadow-glow"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl font-display">
            Prêt à donner vie à votre projet vitré ?
          </h2>
          <p className="mt-4 text-white/80 max-w-md mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé. Réponse sous 24h.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="group relative overflow-hidden rounded-full bg-white px-8 py-3.5 text-base font-semibold text-accent transition-all hover:shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Demander un devis <ArrowRight size={18} />
              </span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a
              href="tel:+33123456789"
              className="rounded-full border border-white/30 bg-transparent px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-white/10"
            >
              01 23 45 67 89
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
