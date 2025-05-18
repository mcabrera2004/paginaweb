import React from 'react';

export default function ArticlesSearchBar({ query, setQuery }) {
  return (
    <form className="hero-search-bar" style={{ marginBottom: '2rem' }} onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        className="hero-search-input"
        placeholder="Buscar por título..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button className="btn btn-header" type="submit">Buscar</button>
    </form>
  );
}