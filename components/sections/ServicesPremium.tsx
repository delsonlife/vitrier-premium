const services = [
  {
    icon: () => (
      <svg viewBox="0 0 100 100" className="h-16 w-16">
        <motion.rect x="20" y="10" width="60" height="80" rx="4" fill="none" stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />
        <motion.line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
      </svg>
    ),
    title: 'Baies vitrées',
    desc: '...'
  },
  // ... autres services
]
