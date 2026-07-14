// components/sections/Gallery.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    title: 'Baie vitrée contemporaine',
    location: 'Paris 16ᵉ',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    title: 'Verrière d’atelier',
    location: 'Lyon',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    title: 'Fenêtres aluminium noir',
    location: 'Bordeaux',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    title: 'Véranda design',
    location: 'Marseille',
  },
]

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goTo = (dir: number) => {
    if (selectedIndex === null) return
    let next = selectedIndex + dir
    if (next < 0) next = projects.length - 1
    if (next >= projects.length) next = 0
    setSelectedIndex(next)
  }

  return (
    <section id="gallery" className="bg-white py-24" ref={ref}>
      <div className="mx-auto max-w-[1400px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-premium-900 md:text-5xl font-display">
            Nos dernières réalisations
          </h2>
          <p className="mt-4 text-premium-500">Des projets d’exception à travers la France.</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-soft"
              onClick={() => openLightbox(i)}
            >
              <img
                src={project.src}
                alt={project.title}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 transition-transform group-hover:translate-y-0">
                <p className="text-lg font-semibold">{project.title}</p>
                <p className="text-sm text-white/70">{project.location}</p>
              </div>
              <div className="absolute right-4 top-4 rounded-full bg-white/80 p-2 opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-sm">
                <Eye size={18} className="text-premium-800" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute right-6 top-6 text-white/80 hover:text-white"
              aria-label="Fermer"
            >
              <X size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goTo(-1) }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
              aria-label="Précédent"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goTo(1) }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
              aria-label="Suivant"
            >
              <ChevronRight size={40} />
            </button>
            <motion.img
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={projects[selectedIndex].src}
              alt={projects[selectedIndex].title}
              className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
