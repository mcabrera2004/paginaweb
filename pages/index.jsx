import React, { useState } from 'react';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Categories from '../components/Categories';
import CTA from '../components/CTA';
import About from '../components/About';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import SideMenu from '../components/SideMenu';
import { getArticles } from '../lib/getArticles';

export default function Home({ articles }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <Hero onMenuToggle={() => setMenuOpen(!menuOpen)} />
      <Featured articles={articles} />
      <Categories />
      <CTA />
      <About />
      <Newsletter />
      <Footer />
    </>
  );
}

// Esta función se ejecuta del lado del servidor en build time
export async function getStaticProps() {
  const articles = getArticles(); // ← lee los .md desde /content
  return {
    props: {
      articles,
    },
  };
}
