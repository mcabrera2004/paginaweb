import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import Categories from '../components/Categories'
import CTA from '../components/CTA'
import About from '../components/About'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import SideMenu from '../components/SideMenu'
import { getArticles } from '../lib/getArticles'

export default function Home({ articles }) {
  const [menuOpen, setMenuOpen] = useState(false)

  // cierro solo al pasar a desktop
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 900px)')
    const handler = e => e.matches && setMenuOpen(false)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return (
    <>
      <SideMenu
        isOpen={menuOpen}
        onOpen={()  => setMenuOpen(true)}
        onClose={() => setMenuOpen(false)}
      />
      <Hero onMenuToggle={() => setMenuOpen(!menuOpen)} />
      <Featured articles={articles} />
      <Categories />
      <CTA />
      <About />
      <Newsletter />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const articles = getArticles()
  return { props: { articles } }
}