import React from 'react';
import Link from 'next/link';

export default function ArticlesList({ articles }) {
  if (!articles.length) {
    return <p style={{ textAlign: 'center', color: 'var(--color-gray-dark)' }}>No se encontraron artículos.</p>;
  }
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {articles.map(article => (
        <li key={article.slug} style={{
          background: 'var(--color-gray)',
          borderRadius: '6px',
          marginBottom: '1.5rem',
          padding: '1.5rem'
        }}>
          <Link href={`/articulos/${article.slug}`} style={{
            color: 'var(--color-primary)',
            fontSize: '1.3rem',
            fontWeight: 700,
            textDecoration: 'none'
          }}>
            {article.title}
          </Link>
          <p style={{ color: 'var(--color-gray-dark)', marginTop: '.5rem' }}>{article.excerpt}</p>
        </li>
      ))}
    </ul>
  );
}