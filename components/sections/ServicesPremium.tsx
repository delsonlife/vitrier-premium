// components/sections/ServicesPremium.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Service {
  title: string
  desc: string
  icon: () => JSX.Element
}

const services: Service[] = [
  {
    title: 'Baies vitrées sur mesure',
    desc: 'Installation de baies coulissantes en aluminium, double vitrage haute performance.',
    icon: () => (
      <svg viewBox="0 0 100 100" className="h-16 w-16">
        {/* Cadre principal */}
        <motion.rect
          x="20" y="10" width="60" height="80" rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        {/* Vitre gauche */}
        <motion.rect
          x="22" y="12" width="26" height="76" rx="2"
          fill="currentColor"
          fillOpacity="0.05"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        />
        {/* Vitre droite */}
        <motion.rect
          x="52" y="12" width="26" height="76" rx="2"
          fill="currentColor"
          fillOpacity="0.1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        />
        {/* Montant central */}
        <motion.line
          x1="50" y1="10" x2="50" y2="90"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        />
        {/* Reflet lumineux */}
        <motion.line
          x1="30" y1="20" x2="30" y2="80"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          fillOpacity="0.3"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        />
      </svg>
    ),
  },
  {
    title: 'Fenêtres résidentielles',
    desc: 'Remplacement de fenêtres anciennes par du double vitrage à isolation renforcée.',
    icon: () => (
      <svg viewBox="0 0 100 100" className="h-16 w-16">
        {/* Cadre fenêtre */}
        <motion.rect
          x="20" y="20" width="60" height="60" rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />
        {/* Croisillon horizontal */}
        <motion.line
          x1="20" y1="50" x2="80" y2="50"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
        {/* Croisillon vertical */}
        <motion.line
          x1="50" y1="20" x2="50" y2="80"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        />
        {/* Vitres avec légère opacité */}
        <motion.rect x="22" y="22" width="26" height="26" fill="currentColor" fillOpacity="0.05"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }} />
        <motion.rect x="52" y="22" width="26" height="26" fill="currentColor" fillOpacity="0.1"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.9 }} />
        <motion.rect x="22" y="52" width="26" height="26" fill="currentColor" fillOpacity="0.08"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.0 }} />
        <motion.rect x="52" y="52" width="26" height="26" fill="currentColor" fillOpacity="0.04"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.1 }} />
        {/* Ouverture de la fenêtre : rotation du battant */}
        <motion.g
          initial={{ rotate: 0, originX: '50px', originY: '80px' }}
          whileInView={{ rotate: [0, -15, 0] }}
          transition={{ duration: 1.5, delay: 1.3, repeat: Infinity, repeatDelay: 3 }}
        >
          <motion.rect x="30" y="22" width="40" height="58" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.4" />
        </motion.g>
      </svg>
    ),
  },
  {
    title: 'Vitrages professionnels',
    desc: 'Cloisons vitrées, devantures de magasin, vérandas design pour entreprises.',
    icon: () => (
      <svg viewBox="0 0 100 100" className="h-16 w-16">
        {/* Bâtiment stylisé */}
        <motion.path
          d="M30 80V40L50 20L70 40V80H55V60H45V80H30Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        {/* Façade vitrée avec lignes horizontales */}
        <motion.line x1="35" y1="55" x2="35" y2="80" stroke="currentColor" strokeWidth="1.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
        <motion.line x1="42" y1="45" x2="42" y2="80" stroke="currentColor" strokeWidth="1.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.7 }} />
        <motion.line x1="58" y1="45" x2="58" y2="80" stroke="currentColor" strokeWidth="1.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.9 }} />
        <motion.line x1="65" y1="55" x2="65" y2="80" stroke="currentColor" strokeWidth="1.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 1.1 }} />
        {/* Reflet global */}
        <motion.rect x="35" y="42" width="30" height="38" fill="currentColor" fillOpacity="0.05" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.3 }} />
      </svg>
    ),
  },
  {
    title: 'Dépannage & réparation',
    desc: 'Intervention rapide pour vitre cassée, joint défectueux ou problème d’étanchéité.',
    icon: () => (
      <svg viewBox="0 0 100 100" className="h-16 w-16">
        {/* Clé à molette stylisée */}
        <motion.path
          d="M30 70 L60 40 L75 55 L45 85 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.circle cx="35" cy="75" r="12" fill="none" stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.6 }} />
        <motion.circle cx="35" cy="75" r="4" fill="currentColor" fillOpacity="0.2"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} />
        {/* Étoile/éclat (réparation) */}
        <motion.path
          d="M70 30 L73 37 L80 40 L73 43 L70 50 L67 43 L60 40 L67 37 Z"
          fill="currentColor"
          fillOpacity="0.5"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
        />
        {/* Trait de réparation */}
        <motion.line x1="45" y1="75" x2="55" y2="65" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.2 }} />
      </svg>
    ),
  },
]

export default function ServicesPremium() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-[1400px] px-6" ref={ref}>
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Nos expertises
          </span>
          <h2 className="mt-4 text-4xl font-bold text-premium-900 md:text-5xl font-display">
            Un savoir-faire d&apos;exception
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-premium-500">
            Chaque projet est unique. Nous associons tradition et innovation pour des réalisations parfaites.
          </p>
        </motion.div>

        {/* Cartes de services */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 50px -12px rgba(0,0,0,0.15)' }}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-premium-200 bg-white/70 backdrop-blur-sm p-8 transition-all duration-300 hover:border-accent/30 hover:bg-white"
            >
              {/* Effet de bordure lumineuse au survol */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(120deg, rgba(37,99,235,0.2), transparent 60%)',
                }}
              />
              <div className="relative z-10">
                <div className="mb-5 inline-flex rounded-2xl bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent/20">
                  <service.icon />
                </div>
                <h3 className="text-xl font-semibold text-premium-900">{service.title}</h3>
                <p className="mt-3 text-premium-500">{service.desc}</p>
              </div>
              {/* Effet de verre supplémentaire au survol */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
