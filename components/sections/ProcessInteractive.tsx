// components/sections/ProcessInteractive.tsx
'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ClipboardCheck, Search, Factory, Truck } from 'lucide-react'

const steps = [
  { icon: ClipboardCheck, title: 'Consultation', desc: 'Échange sur vos besoins et devis gratuit.' },
  { icon: Search, title: 'Étude technique', desc: 'Prise de côtes laser et simulation 3D.' },
  { icon: Factory, title: 'Fabrication', desc: 'Réalisation en atelier avec matériaux premium.' },
  { icon: Truck, title: 'Installation', desc: 'Pose propre, réglages et finitions.' },
]

export default function ProcessInteractive() {
  const [activeStep, setActiveStep] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="bg-premium-50/30 py-24">
      <div className="mx-auto max-w-[1000px] px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-4xl font-bold text-center font-display text-premium-900 mb-16"
        >
          Votre projet en 4 étapes maîtrisées
        </motion.h2>

        <div className="relative flex flex-col md:flex-row justify-between">
          {/* Ligne de fond */}
          <div className="absolute top-8 left-0 right-0 hidden md:block h-0.5 bg-premium-200" />
          {/* Ligne animée selon activeStep */}
          <motion.div
            animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            className="absolute top-8 left-0 hidden md:block h-0.5 bg-accent origin-left"
            transition={{ duration: 0.5 }}
          />

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative z-10 flex flex-col items-center mb-8 md:mb-0 cursor-pointer"
              onClick={() => setActiveStep(index)}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${
                  index <= activeStep
                    ? 'bg-accent text-white border-accent shadow-glow'
                    : 'bg-white text-premium-400 border-premium-200'
                } transition-all duration-300`}
              >
                <step.icon size={28} />
              </motion.div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-premium-900">{step.title}</h3>
                <AnimatePresence>
                  {index === activeStep && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-premium-500 mt-2 max-w-[150px] mx-auto"
                    >
                      {step.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
