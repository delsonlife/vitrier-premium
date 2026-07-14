// components/sections/Coverage.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin } from 'lucide-react'

const cities = ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Lille', 'Nantes', 'Strasbourg', 'Nice']

export default function Coverage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="bg-premium-50/50 py-24" ref={ref}>
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-premium-900 md:text-5xl font-display">
            Nous intervenons partout en France
          </h2>
          <p className="mt-4 text-premium-500">
            Une couverture nationale pour les projets d’envergure.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {cities.map((city, i) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-2 rounded-2xl bg-white/80 p-4 shadow-soft backdrop-blur-sm cursor-default"
            >
              <MapPin size={16} className="text-accent" />
              <span className="font-medium text-premium-800">{city}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
