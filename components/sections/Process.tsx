// components/sections/Process.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ClipboardCheck, Search, Factory, Truck } from 'lucide-react'

const steps = [
  { icon: ClipboardCheck, title: 'Devis & conseil', desc: 'Diagnostic gratuit et proposition personnalisée.' },
  { icon: Search, title: 'Visite technique', desc: 'Prise de mesures précises par un expert.' },
  { icon: Factory, title: 'Fabrication', desc: 'Réalisation sur mesure dans notre atelier.' },
  { icon: Truck, title: 'Installation', desc: 'Pose soignée et nettoyage du chantier.' },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="process" className="bg-premium-50/30 py-24" ref={ref}>
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-premium-900 md:text-5xl font-display">
            Un processus fluide
          </h2>
          <p className="mt-4 text-premium-500">4 étapes pour une réalisation parfaite.</p>
        </motion.div>

        <div className="relative">
          {/* Ligne verticale (desktop) */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-premium-200 md:left-1/2 md:-translate-x-px" />
          {/* Ligne animée qui se remplit au scroll */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute left-8 top-0 bottom-0 w-0.5 origin-top bg-accent md:left-1/2 md:-translate-x-px"
          />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className={`relative flex items-center gap-8 md:gap-16 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Point sur la timeline */}
                <div className="absolute left-8 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-accent text-white shadow md:left-1/2">
                  <step.icon size={18} />
                </div>

                {/* Carte */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="rounded-2xl bg-white p-6 shadow-soft backdrop-blur-sm">
                    <h3 className="text-xl font-semibold text-premium-900">{step.title}</h3>
                    <p className="mt-2 text-premium-500">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
