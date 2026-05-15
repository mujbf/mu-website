import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Only on devices with a real pointer (desktop)
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    document.body.style.cursor = 'none'

    let mouse = { x: -200, y: -200 }
    let ringPos = { x: -200, y: -200 }
    let rafId

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      dot.style.left = mouse.x + 'px'
      dot.style.top = mouse.y + 'px'
      dot.style.opacity = '1'
    }

    const onOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor="expand"]')
      if (target) {
        ring.style.width = '44px'
        ring.style.height = '44px'
        ring.style.borderColor = 'rgba(240,90,40,0.65)'
        dot.style.transform = 'translate(-50%,-50%) scale(1.6)'
      } else {
        ring.style.width = '28px'
        ring.style.height = '28px'
        ring.style.borderColor = 'rgba(240,90,40,0.42)'
        dot.style.transform = 'translate(-50%,-50%) scale(1)'
      }
    }

    const onLeave = () => {
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }
    const onEnter = () => {
      dot.style.opacity = '1'
      ring.style.opacity = '1'
    }

    const animate = () => {
      ringPos.x += (mouse.x - ringPos.x) * 0.1
      ringPos.y += (mouse.y - ringPos.y) * 0.1
      ring.style.left = ringPos.x + 'px'
      ring.style.top = ringPos.y + 'px'
      ring.style.opacity = mouse.x === -200 ? '0' : '1'
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)
    rafId = requestAnimationFrame(animate)

    return () => {
      document.body.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
