import React from 'react';

export default function Featured({ articles }) {
  return (
    <section className="featured" style={{ padding: '4rem 0', backgroundColor: '#FBE0BF' }}>
      <div className="container">
        <h2 className="section-title">Artículos Destacados</h2>
        <div
          className="articles-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))',
            gap: '2rem'
          }}
        >
          {articles.map((a, i) => (
            <div
              key={i}
              className="article-card"
              style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                transition: 'transform .3s'
              }}
            >
              <div
                className="article-img"
                style={{
                  height: '200px',
                  backgroundColor: 'var(--color-gray)',
                  backgroundImage: "url('/api/placeholder/400/200')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="article-content" style={{ padding: '1.5rem' }}>
                <span
                  className="article-category"
                  style={{
                    display: 'inline-block',
                    backgroundColor: 'var(--color-gray)',
                    color: 'var(--color-dark)',
                    fontSize: '0.8rem',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    marginBottom: '0.75rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600
                  }}
                >
                  {a.category}
                </span>
                <h3 className="article-title" style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>
                  {a.title}
                </h3>
                <p
                  className="article-excerpt"
                  style={{ color: 'var(--color-gray-dark)', marginBottom: '1.5rem', fontSize: '0.95rem' }}
                >
                  {a.excerpt}
                </p>
                <div
                  className="article-meta"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: 'var(--color-gray-dark)',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  <span>Por {a.author}</span>
                  <span>{a.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="/articulos" className="btn btn-primary">
            Ver Todos los Artículos
          </a>
        </div>
      </div>
    </section>
  );
}
