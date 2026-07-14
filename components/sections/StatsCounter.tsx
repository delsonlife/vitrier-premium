// components/sections/StatsCounter.tsx
'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { value: 20, suffix: '+', label: "Années d'expérience" },
  { value: 500, suffix: '+', label: 'Interventions réussies' },
  { value: 98, suffix: '%', label: 'Clients satisfaits' },
]

function AnimatedCounter({ from, to, suffix }: { from: number; to: number; suffix: string }) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const nodeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: 'easeOut' })
    return controls.stop
  }, [count, to])

  return (
    <span ref={nodeRef}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}

export default function StatsCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="bg-premium-50/50 py-20">
      <div className="mx-auto max-w-[1200px] px-6" ref={ref}>
        <div className="grid gap-8 text-center sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="rounded-3xl bg-white/80 p-8 shadow-soft backdrop-blur-sm"
            >
              <div className="text-5xl font-bold text-accent font-display">
                {isInView ? (
                  <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <div className="mt-3 text-premium-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
