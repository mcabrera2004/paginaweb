import React, { useRef } from 'react';
import Link from 'next/link';

export default function Featured({ articles }) {
  const featuredArticles = articles.filter(article => article.featured);
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="featured">
      <div className="container">
        <h2 className="section-title">Artículos Destacados</h2>
        <div className="articles-carousel-wrapper">
          <div className="articles-carousel" ref={carouselRef}>
            {featuredArticles.map((a, i) => (
              <Link key={i} href={`/articulos/${a.slug}`} className="article-link">
                <div className="article-card">
                  <div
                    className="article-img"
                    style={{
                      backgroundImage: `url('${a.image || '/api/placeholder/300/150'}')`,
                    }}
                  />
                  <div className="article-content">
                    <span className="article-category">{a.category}</span>
                    <h3 className="article-title">{a.title}</h3>
                    <p className="article-excerpt">{a.excerpt}</p>
                    <div className="article-meta">
                      <span>Por {a.author}</span>
                      <span>{a.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="carousel-arrows">
          <button className="carousel-arrow left" onClick={scrollLeft}>
            &#8249;
          </button>
          <button className="carousel-arrow right" onClick={scrollRight}>
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}