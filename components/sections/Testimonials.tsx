'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  { name: 'Sophie L.', text: 'Notre baie vitrée a métamorphosé le salon. Pose rapide et soignée.', rating: 5, img: '/images/avatar1.jpg' },
  { name: 'Marc D.', text: 'Expertise et conseil irréprochables. Je recommande.', rating: 5, img: '/images/avatar2.jpg' },
  // ... ajoutez 3 autres
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-[1400px] px-6 text-center mb-12">
        <h2 className="text-4xl font-bold font-display text-premium-900 md:text-5xl">Ce que nos clients disent</h2>
        <p className="mt-4 text-premium-500">98% de satisfaction, des avis vérifiés.</p>
      </div>
      <div className="relative flex overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-6 whitespace-nowrap"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="inline-flex w-80 shrink-0 rounded-3xl border border-premium-200 bg-white/80 p-6 shadow-soft backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-premium-900">{t.name}</p>
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-premium-700 whitespace-normal">« {t.text} »</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
