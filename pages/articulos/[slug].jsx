import React, { useEffect } from 'react';
import { getArticles, getArticleBySlug } from '../../lib/getArticles';
import Head from 'next/head';

export default function Articulo({ article }) {
  useEffect(() => {
    document.body.classList.add('articulo-bg');
    return () => document.body.classList.remove('articulo-bg');
  }, []);

  if (!article) return <p>Artículo no encontrado.</p>;

  return (
    <main className="container" style={{ marginTop: '3rem', marginBottom: '3rem', maxWidth: '800px'}}>
      <Head>
        <title>{article.title} | Artículos</title>
      </Head>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{article.title}</h1>
      <div style={{ color: 'var(--color-gray-dark)', marginBottom: '2rem' }}>{article.date}</div>
      <article
        className="article-content"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />
    </main>
  );
}

export async function getStaticPaths() {
  const articles = getArticles();
  const paths = articles.map(article => ({
    params: { slug: article.slug }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const article = await getArticleBySlug(params.slug);
  return { props: { article } };
}