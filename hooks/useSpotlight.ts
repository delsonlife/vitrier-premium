import { useState, useEffect, useRef } from 'react'

export function useSpotlight() {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const handleMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect()
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
    node.addEventListener('mousemove', handleMove)
    node.addEventListener('mouseenter', () => setIsHovered(true))
    node.addEventListener('mouseleave', () => setIsHovered(false))
    return () => {
      node.removeEventListener('mousemove', handleMove)
      node.removeEventListener('mouseenter', () => setIsHovered(true))
      node.removeEventListener('mouseleave', () => setIsHovered(false))
    }
  }, [])

  return { ref, position, isHovered }
}
