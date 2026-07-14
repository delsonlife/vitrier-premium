// components/sections/ServicesPremium.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, type ReactElement } from 'react'
import { ArrowUpRight } from 'lucide-react'

interface Service {
  number: string
  title: string
  desc: string
  icon: () => ReactElement
}

const services: Service[] = [
  {
    number: '01',
    title: 'Baies vitrées sur mesure',
    desc: 'Installation de baies coulissantes en aluminium, double vitrage haute performance.',
    icon: () => (
      <svg viewBox="0 0 100 100" className="h-10 w-10">
        <rect x="20" y="10" width="60" height="80" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="22" y="12" width="26" height="76" rx="2" fill="currentColor" fillOpacity="0.06" />
        <rect x="52" y="12" width="26" height="76" rx="2" fill="currentColor" fillOpacity="0.1" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Fenêtres résidentielles',
    desc: 'Remplacement de fenêtres anciennes par du double vitrage à isolation renforcée.',
    icon: () => (
      <svg viewBox="0 0 100 100" className="h-10 w-10">
        <rect x="20" y="20" width="60" height="60" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="2" />
        <rect x="22" y="22" width="26" height="26" fill="currentColor" fillOpacity="0.06" />
        <rect x="52" y="52" width="26" height="26" fill="currentColor" fillOpacity="0.1" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Vitrages professionnels',
    desc: 'Cloisons vitrées, devantures de magasin, vérandas design pour entreprises.',
    icon: () => (
      <svg viewBox="0 0 100 100" className="h-10 w-10">
        <path d="M30 80V40L50 20L70 40V80H55V60H45V80H30Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="35" y="42" width="30" height="38" fill="currentColor" fillOpacity="0.06" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Dépannage & réparation',
    desc: "Intervention rapide pour vitre cassée, joint défectueux ou problème d'étanchéité.",
    icon: () => (
      <svg viewBox="0 0 100 100" className="h-10 w-10">
        <path d="M30 70 L60 40 L75 55 L45 85 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="35" cy="75" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M70 30 L73 37 L80 40 L73 43 L70 50 L67 43 L60 40 L67 37 Z" fill="currentColor" fillOpacity="0.6" />
      </svg>
    ),
  },
]

export default function ServicesPremium() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative overflow-hidden bg-white py-28">
      {/* Fond avec profondeur : blob doré diffus + texture fine + mot en filigrane */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F172A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-display text-[18rem] font-medium leading-none text-premium-900/[0.025]"
      >
        Verre
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6" ref={ref}>
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold/60" />
            Nos expertises
          </div>
          <h2 className="text-4xl font-medium text-premium-900 md:text-5xl lg:text-6xl font-display">
            Un savoir-faire d&apos;exception
          </h2>
          <p className="mt-6 text-lg text-premium-500">
            Chaque projet est unique. Nous associons tradition et innovation pour des réalisations parfaites.
          </p>
        </motion.div>

        {/* Liste éditoriale avec numéros */}
        <div className="border-t border-premium-200">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative border-b border-premium-200"
            >
              {/* Fond au survol qui glisse depuis la gauche */}
              <div className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-gold/[0.06] via-gold/[0.02] to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />

              <div className="relative flex flex-col gap-6 py-10 sm:flex-row sm:items-center md:py-12">
                {/* Numéro */}
                <span className="font-display text-2xl font-light text-premium-300 transition-colors duration-300 group-hover:text-gold sm:w-16">
                  {service.number}
                </span>

                {/* Icône avec halo animé en continu + effet de survol */}
                <div className="relative flex h-20 w-20 flex-shrink-0 items-center justify-center">
                  {/* Anneau de lumière tournant en continu */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 rounded-full opacity-40 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent 0%, rgba(176,141,87,0.5) 15%, transparent 30%)',
                    }}
                  />
                  {/* Halo pulsant */}
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-2 rounded-full bg-gold/10 blur-md"
                  />
                  {/* Cercle icône */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-premium-200 bg-white text-premium-700 shadow-soft transition-all duration-500 group-hover:border-gold/40 group-hover:text-gold group-hover:shadow-gold-glow">
                    <service.icon />
                    {/* Reflet lumineux qui balaie l'icône au survol */}
                    <div className="absolute inset-0 overflow-hidden rounded-full">
                      <motion.div
                        initial={{ x: '-120%' }}
                        whileHover={{ x: '120%' }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Texte */}
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-medium text-premium-900 transition-colors duration-300 group-hover:text-gold-deep">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-premium-500">{service.desc}</p>
                </div>

                {/* Flèche qui apparaît au survol */}
                <div className="hidden shrink-0 items-center gap-2 text-sm font-medium text-gold opacity-0 transition-all duration-300 group-hover:opacity-100 sm:flex">
                  <span className="translate-x-2 transition-transform duration-300 group-hover:translate-x-0">
                    En savoir plus
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="-translate-x-2 transition-transform duration-300 group-hover:translate-x-0"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
