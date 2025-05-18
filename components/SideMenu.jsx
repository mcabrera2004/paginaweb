import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

const routes = {
  Inicio: '/',
  Artículos: '/articulos',
  Libros: '/libros',
  Estudios: '/estudios',
  Recursos: '/recursos',
  'Acerca de': '/acerca'
}

export default function SideMenu({ isOpen, onOpen, onClose }) {
  const [mounted, setMounted] = useState(false)
  const menuRef = useRef(null)
  
  useEffect(() => {
    setMounted(true)
    
    // Nueva función de scroll que aplica una variable CSS en lugar de una clase
    const handleScroll = () => {
      requestAnimationFrame(() => {
        if (!menuRef.current) return
        
        // Calcular la opacidad basada en el scroll (max 1)
        const scrollY = window.scrollY
        const maxScroll = 50 // Valor en px donde la opacidad llega a 1
        const opacity = Math.min(1, scrollY / maxScroll)
        
        // Aplicar la opacidad como variable CSS
        menuRef.current.style.setProperty('--menu-bg-opacity', opacity)
        
        // También podemos aplicar blur proporcional
        const blur = opacity * 6 // máximo 6px de blur
        menuRef.current.style.setProperty('--menu-blur', `${blur}px`)
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {mounted && (
        <button
          className="hamburger"
          aria-label="Abrir menú"
          onClick={onOpen}
          style={{ display: isOpen ? 'none' : undefined }}
        >
          ☰
        </button>
      )}

      <nav 
        ref={menuRef}
        className={`slide-menu${isOpen ? ' open' : ''}`}
      >
        <button className="close-btn" aria-label="Cerrar menú" onClick={onClose}>
          ✕
        </button>
        <Link href="/" className="logo">Sola Scriptura</Link>
        <ul className="menu-list">
          {Object.entries(routes).map(([label, path]) => (
            <li key={label}>
              <Link href={path} className="menu-link">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && <div className="backdrop" onClick={onClose}></div>}
    </>
  )
}