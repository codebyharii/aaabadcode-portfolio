import { useEffect, useRef } from 'react'

const ParticleBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
    let animationFrameId
    let particles = []
    let isRunning = true
    let width = 0
    let height = 0

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      initParticles()
    }

    const particleCount = () => {
      const area = width * height
      const density = isCoarsePointer ? 32000 : 24000
      const maxParticles = isCoarsePointer ? 35 : 80
      return Math.min(Math.floor(area / density), maxParticles)
    }

    const maxConnectionDistance = isCoarsePointer ? 90 : 120
    const maxConnectionDistanceSq = maxConnectionDistance * maxConnectionDistance

    class Particle {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 2 + 1
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.opacity = Math.random() * 0.35 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > width) this.x = 0
        if (this.x < 0) this.x = width
        if (this.y > height) this.y = 0
        if (this.y < 0) this.y = height
      }

      draw() {
        ctx.fillStyle = `rgba(14, 165, 233, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const initParticles = () => {
      particles = []
      const count = particleCount()

      for (let i = 0; i < count; i++) {
        particles.push(new Particle())
      }
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        const particleA = particles[i]

        for (let j = i + 1; j < particles.length; j++) {
          const particleB = particles[j]
          const dx = particleA.x - particleB.x
          const dy = particleA.y - particleB.y
          const distanceSq = dx * dx + dy * dy

          if (distanceSq < maxConnectionDistanceSq) {
            const distanceRatio = 1 - distanceSq / maxConnectionDistanceSq
            ctx.strokeStyle = `rgba(14, 165, 233, ${0.18 * distanceRatio})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particleA.x, particleA.y)
            ctx.lineTo(particleB.x, particleB.y)
            ctx.stroke()
          }
        }
      }
    }

    const onVisibilityChange = () => {
      isRunning = !document.hidden

      if (isRunning) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        cancelAnimationFrame(animationFrameId)
      }
    }

    initParticles()
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas, { passive: true })
    document.addEventListener('visibilitychange', onVisibilityChange)

    const animate = () => {
      if (!isRunning) return

      ctx.clearRect(0, 0, width, height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      drawConnections()

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  )
}

export default ParticleBackground
