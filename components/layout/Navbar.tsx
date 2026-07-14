// components/layout/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Réalisations', href: '#gallery' },
  { name: 'Processus', href: '#process' },
  { name: 'Avis', href: '#testimonials' },
  { name: 'Contact', href: '#cta' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-soft border-b border-premium-100'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
          <a href="#" className="text-2xl font-display font-bold text-premium-900">
            <span className="text-accent">Vitrier</span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
  scrolled ? 'text-premium-700 hover:text-accent' : 'text-white/90 hover:text-accent-light'
}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#cta"
              className="group relative overflow-hidden rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:shadow-lg"
            >
              <span className="relative z-10">Devis gratuit</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-premium-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-20 z-40 mx-4 rounded-3xl bg-white/90 backdrop-blur-xl p-8 shadow-lift md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-premium-800 hover:text-accent"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="mt-4 block w-full rounded-full bg-accent py-3 text-center font-semibold text-white shadow-glow"
              >
                Devis gratuit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
