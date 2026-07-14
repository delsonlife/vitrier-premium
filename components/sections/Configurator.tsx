// components/sections/Configurator.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Check } from 'lucide-react'

type GlassType = 'double' | 'triple' | 'acoustic'
type Material = 'aluminium' | 'pvc' | 'wood'
type Count = 1 | 2 | 3 | 4 | 5

const glassOptions: { type: GlassType; label: string; desc: string }[] = [
  { type: 'double', label: 'Double vitrage', desc: 'Isolation thermique standard' },
  { type: 'triple', label: 'Triple vitrage', desc: 'Performance énergétique maximale' },
  { type: 'acoustic', label: 'Vitrage acoustique', desc: 'Réduction phonique renforcée' },
]

const materialOptions: { type: Material; label: string; color: string }[] = [
  { type: 'aluminium', label: 'Aluminium', color: '#94A3B8' },
  { type: 'pvc', label: 'PVC', color: '#CBD5E1' },
  { type: 'wood', label: 'Bois', color: '#B45309' },
]

export default function Configurator() {
  const [step, setStep] = useState(0)
  const [glass, setGlass] = useState<GlassType>('double')
  const [material, setMaterial] = useState<Material>('aluminium')
  const [count, setCount] = useState<Count>(2)
  const [finished, setFinished] = useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    { question: 'Type de vitrage ?', key: 'glass' },
    { question: 'Matériau du cadre ?', key: 'material' },
    { question: 'Nombre de fenêtres / baies ?', key: 'count' },
  ]

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1)
    else setFinished(true)
  }

  const handlePrevious = () => {
    if (step > 0) setStep(step - 1)
  }

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-[900px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-premium-900 md:text-5xl font-display">
            Configurez votre projet en 30 secondes
          </h2>
          <p className="mt-4 text-premium-500">
            Sélectionnez vos préférences et recevez une estimation personnalisée.
          </p>
        </motion.div>

        <div className="rounded-4xl bg-premium-50/50 p-8 shadow-soft backdrop-blur-sm">
          {/* Indicateur d'étape */}
          <div className="flex justify-center gap-2 mb-8">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`h-1.5 w-12 rounded-full transition-colors ${
                  i <= step ? 'bg-accent' : 'bg-premium-200'
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              {!finished ? (
                <>
                  <h3 className="text-2xl font-semibold text-premium-800 mb-8">
                    {steps[step].question}
                  </h3>

                  {step === 0 && (
                    <div className="flex flex-wrap justify-center gap-4">
                      {glassOptions.map((opt) => (
                        <button
                          key={opt.type}
                          onClick={() => setGlass(opt.type)}
                          className={`rounded-2xl border-2 p-6 text-left transition-all ${
                            glass === opt.type
                              ? 'border-accent bg-accent/5 shadow-glow'
                              : 'border-premium-200 hover:border-premium-300'
                          }`}
                        >
                          <p className="font-semibold text-premium-900">{opt.label}</p>
                          <p className="text-sm text-premium-500">{opt.desc}</p>
                        </button>
                      ))}
                    </div>
                  )}

                  {step === 1 && (
                    <div className="flex flex-wrap justify-center gap-6">
                      {materialOptions.map((opt) => (
                        <button
                          key={opt.type}
                          onClick={() => setMaterial(opt.type)}
                          className="flex flex-col items-center"
                        >
                          <div
                            className={`h-16 w-16 rounded-full border-2 mb-2 transition-all ${
                              material === opt.type
                                ? 'border-accent shadow-glow scale-110'
                                : 'border-premium-200'
                            }`}
                            style={{ backgroundColor: opt.color }}
                          />
                          <span className="text-sm font-medium text-premium-700">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {step === 2 && (
                    <div className="flex justify-center items-center gap-4">
                      <button
                        onClick={() => setCount(Math.max(1, count - 1) as Count)}
                        className="h-10 w-10 rounded-full border border-premium-300 text-xl font-bold"
                      >
                        -
                      </button>
                      <span className="text-3xl font-bold text-accent w-16">{count}</span>
                      <button
                        onClick={() => setCount(Math.min(5, count + 1) as Count)}
                        className="h-10 w-10 rounded-full border border-premium-300 text-xl font-bold"
                      >
                        +
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center"
                >
                  <Check size={48} className="mx-auto text-green-500" />
                  <h3 className="text-2xl font-bold text-premium-900 mt-4">
                    Configuration terminée !
                  </h3>
                  <p className="text-premium-600 mt-2">
                    {glass === 'triple' ? 'Isolation optimale' : 'Excellent rapport qualité-prix'} avec cadre {material} pour {count} ouvrant(s).
                  </p>
                  <a
                    href="#cta"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-white shadow-glow hover:shadow-lg transition-all"
                  >
                    Recevoir mon devis <ArrowRight size={18} />
                  </a>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {!finished && (
            <div className="mt-8 flex justify-center gap-4">
              {step > 0 && (
                <button
                  onClick={handlePrevious}
                  className="rounded-full border border-premium-300 px-6 py-2 text-premium-600 hover:bg-premium-50"
                >
                  Précédent
                </button>
              )}
              <button
                onClick={handleNext}
                className="rounded-full bg-accent px-8 py-2 text-white shadow-glow hover:shadow-lg transition-all"
              >
                {step === steps.length - 1 ? 'Voir mon estimation' : 'Suivant'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
