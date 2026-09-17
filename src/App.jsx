import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const dotsRef = useRef([])

  useEffect(() => {
    const createDots = () => {
      const containerWidth = window.innerWidth
      const containerHeight = window.innerHeight
      const count = 320

      dotsRef.current = Array.from({ length: count }, (_, index) => ({
        id: index,
        x: Math.random() * containerWidth,
        y: Math.random() * containerHeight,
        size: Math.random() * 2.8 + 1.2,
        driftX: (Math.random() - 0.5) * 0.9,
        driftY: (Math.random() - 0.5) * 0.9,
      }))

      setCursor({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
    }

    createDots()
    window.addEventListener('resize', createDots)

    const handlePointerMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('pointermove', handlePointerMove)

    return () => {
      window.removeEventListener('resize', createDots)
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  const wallpaperDots = dotsRef.current.map((dot) => {
    const dx = dot.x - cursor.x
    const dy = dot.y - cursor.y
    const distance = Math.hypot(dx, dy) || 1
    const repelRadius = 160

    const baseX = dot.x + dot.driftX * 1.4
    const baseY = dot.y + dot.driftY * 1.4

    let offsetX = 0
    let offsetY = 0

    if (distance < repelRadius) {
      const force = (repelRadius - distance) / repelRadius
      const pushStrength = 40 + (1 - distance / repelRadius) * 220
      offsetX = (dx / distance) * force * pushStrength
      offsetY = (dy / distance) * force * pushStrength
    }

    return {
      ...dot,
      left: baseX + offsetX,
      top: baseY + offsetY,
    }
  })

  return (
    <>
      <div className="cursor-dots" aria-hidden="true">
        {wallpaperDots.map((dot) => (
          <span
            key={dot.id}
            className="cursor-dot"
            style={{
              left: `${dot.left}px`,
              top: `${dot.top}px`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
            }}
          />
        ))}
      </div>

      <section id="center">
        <div className="hero" aria-hidden="true">
          <div className="monogram-wrap">
            <span className="monogram">CK</span>
          </div>
        </div>
        <div>
          <h1 className="signature-name">
            <span className="name-initial">C</span>harlotte <span className="name-initial">K</span>lu
          </h1>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>About Me</h2>
          <p>I turn beautiful ideas into memorable experiences.</p>
          <ul>
            <li>Creating thoughtful digital stories</li>
            <li>Designing with warmth, texture, and detail</li>
            <li>Bringing creativity to every project</li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Let’s Connect</h2>
          <p>Reach out and say hello.</p>
          <ul>
            <li>Email: hello@charlottek.com</li>
            <li>Instagram: @charlottek</li>
            <li>LinkedIn: /in/charlottek</li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
