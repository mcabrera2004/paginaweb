// pages/index.jsx
import React, { useState } from 'react';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Categories from '../components/Categories';
import CTA from '../components/CTA';
import About from '../components/About';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import SideMenu from '../components/SideMenu';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <Hero onMenuToggle={() => setMenuOpen(!menuOpen)} />
      <Featured />
      <Categories />
      <CTA />
      <About />
      <Newsletter />
      <Footer />
    </>
  );
}
