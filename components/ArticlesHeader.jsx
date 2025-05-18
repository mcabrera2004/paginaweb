import React from 'react';

export default function ArticlesHeader() {
  return (
    <section className="articles-header" style={{
      background: 'radial-gradient(circle,rgba(79, 28, 0, 1) 0%, rgba(28, 11, 1, 1) 80%)',
      color: '#fff',
      padding: '3rem 1rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Artículos</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--color-light)' }}>
        Explora y busca artículos sobre teología reformada, historia y doctrina.
      </p>
    </section>
  );
}