'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, Clock, ThumbsUp, MapPin } from 'lucide-react'

const commitments = [
  { icon: ShieldCheck, title: 'Garantie décennale', desc: 'Tous nos travaux sont assurés.' },
  { icon: Clock, title: 'Délais respectés', desc: '98% des chantiers livrés à la date prévue.' },
  { icon: ThumbsUp, title: 'Satisfaction garantie', desc: 'Service client 5 étoiles, à votre écoute.' },
  { icon: MapPin, title: 'Intervention nationale', desc: 'Présents dans plus de 15 grandes villes.' },
]

export default function Engagement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="bg-premium-50/50 py-24">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold font-display text-premium-900 md:text-5xl"
        >
          Nos engagements qualité
        </motion.h2>
        <p className="mt-4 text-premium-500">Des valeurs qui font la différence.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl bg-white p-6 shadow-soft backdrop-blur-sm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <c.icon size={24} />
              </div>
              <h3 className="font-semibold text-premium-900">{c.title}</h3>
              <p className="mt-2 text-sm text-premium-500">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
