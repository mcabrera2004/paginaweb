import React, { useState } from 'react';
import ArticlesHeader from '../components/ArticlesHeader';
import ArticlesSearchBar from '../components/ArticlesSearchBar';
import ArticlesList from '../components/ArticlesList';
import { getArticles } from '../lib/getArticles';

export default function ArticlesPage({ articles }) {
  const [query, setQuery] = useState('');

  // Filtrado simple por título
  const filtered = articles.filter(article =>
    article.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main>
      <ArticlesHeader />
      <div className="container" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <ArticlesSearchBar query={query} setQuery={setQuery} />
        <ArticlesList articles={filtered} />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const articles = getArticles();
  return { props: { articles } };
}