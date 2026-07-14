// components/sections/GalleryImmersive.tsx
'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

interface Project {
  id: number
  src: string
  thumb: string
  title: string
  location: string
  glassType: string
  year: number
}

const projects: Project[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80',
    thumb: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'Rénovation complète',
    location: 'Paris 8ᵉ',
    glassType: 'Double vitrage argon',
    year: 2024,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80',
    thumb: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    title: 'Baie coulissante aluminium',
    location: 'Lyon',
    glassType: 'Triple vitrage',
    year: 2024,
  },
  // ... Ajoutez d'autres projets
]

export default function GalleryImmersive() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  const openLightbox = (project: Project) => {
    setSelectedProject(project)
    setLightboxIndex(projects.indexOf(project))
  }

  const navigateLightbox = (dir: number) => {
    let next = lightboxIndex + dir
    if (next < 0) next = projects.length - 1
    if (next >= projects.length) next = 0
    setLightboxIndex(next)
    setSelectedProject(projects[next])
  }

  return (
    <section ref={sectionRef} className="bg-white py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl font-bold text-premium-900 md:text-5xl font-display">
              Réalisations d'exception
            </h2>
            <p className="mt-4 text-premium-500">
              Chaque projet est une vitrine de notre savoir-faire.
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scroll('left')}
              className="rounded-full border border-premium-300 p-3 text-premium-600 hover:bg-premium-50"
              aria-label="Défiler vers la gauche"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="rounded-full border border-premium-300 p-3 text-premium-600 hover:bg-premium-50"
              aria-label="Défiler vers la droite"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Carousel horizontal */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none' }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="group relative flex-shrink-0 w-[350px] sm:w-[400px] snap-center cursor-pointer"
              onClick={() => openLightbox(project)}
            >
              <div className="overflow-hidden rounded-3xl shadow-soft transition-shadow group-hover:shadow-lift">
                <img
                  src={project.thumb}
                  alt={project.title}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 px-2">
                <h3 className="text-xl font-semibold text-premium-900">{project.title}</h3>
                <p className="text-sm text-premium-500">{project.location} — {project.glassType}</p>
              </div>
              <div className="absolute right-4 top-4 rounded-full bg-white/80 p-2 opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-sm">
                <Maximize2 size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox enrichie */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-8"
            onClick={() => setSelectedProject(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedProject(null) }}
              className="absolute right-6 top-6 text-white/80 hover:text-white"
            >
              <X size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1) }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1) }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
            >
              <ChevronRight size={40} />
            </button>

            <motion.div
              key={selectedProject.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex max-w-6xl flex-col lg:flex-row items-center gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-shrink-0 overflow-hidden rounded-2xl">
                <img
                  src={selectedProject.src}
                  alt={selectedProject.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>
              <div className="text-white max-w-xs">
                <span className="text-accent-light text-sm font-medium">{selectedProject.location}</span>
                <h3 className="text-2xl font-bold mt-2">{selectedProject.title}</h3>
                <div className="mt-4 space-y-2 text-white/70">
                  <p>Vitrage : {selectedProject.glassType}</p>
                  <p>Année : {selectedProject.year}</p>
                </div>
                <button className="mt-6 rounded-full bg-white/20 px-6 py-2 text-white backdrop-blur-sm hover:bg-white/30 transition">
                  Voir les détails techniques
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Style pour cacher la scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
