import React from 'react';
const articles = [
  { category: 'Soteriología', title: 'La doctrina de la Elección: Un análisis bíblico', excerpt: 'Exploración de las bases bíblicas de la doctrina reformada de la elección y su importancia para la fe cristiana.', author: 'Martín López', date: 'Mayo 12, 2025' },
  { category: 'Historia', title: 'Los Reformadores y su legado permanente', excerpt: 'Estudio de la vida y enseñanzas de los principales reformadores protestantes y su impacto en la iglesia actual.', author: 'Ana Gómez', date: 'Mayo 5, 2025' },
  { category: 'Teología', title: 'Los Cinco Solas: Pilares de la Reforma', excerpt: 'Explicación de los cinco principios fundamentales que guiaron la Reforma Protestante y su relevancia contemporánea.', author: 'Carlos Ramírez', date: 'Abril 28, 2025' }
];
export default function Featured() {
  return (
    <section className="featured" style={{ padding: '4rem 0', backgroundColor: '#f5e9da' }}>
      <div className="container">
        <h2 className="section-title">Artículos Destacados</h2>
        <div className="articles-grid" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px,1fr))', gap:'2rem' }}>
          {articles.map((a,i) => (
            <div key={i} className="article-card" style={{ backgroundColor:'#fff', borderRadius:'8px', overflow:'hidden', boxShadow:'0 4px 15px rgba(0,0,0,0.1)', transition:'transform .3s' }}>
              <div className="article-img" style={{ height:'200px', backgroundColor:'var(--color-gray)', backgroundImage:"url('/api/placeholder/400/200')", backgroundSize:'cover', backgroundPosition:'center' }} />
              <div className="article-content" style={{ padding:'1.5rem' }}>
                <span className="article-category" style={{ display:'inline-block', backgroundColor:'var(--color-gray)', color:'var(--color-dark)', fontSize:'0.8rem', padding:'0.25rem 0.75rem', borderRadius:'20px', marginBottom:'0.75rem', fontFamily:'var(--font-sans)', fontWeight:600 }}>{a.category}</span>
                <h3 className="article-title" style={{ fontSize:'1.4rem', marginBottom:'0.75rem' }}>{a.title}</h3>
                <p className="article-excerpt" style={{ color:'var(--color-gray-dark)', marginBottom:'1.5rem', fontSize:'0.95rem' }}>{a.excerpt}</p>
                <div className="article-meta" style={{ display:'flex', justifyContent:'space-between', color:'var(--color-gray-dark)', fontSize:'0.85rem', fontFamily:'var(--font-sans)' }}>
                  <span>Por {a.author}</span><span>{a.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:'center', marginTop:'2rem' }}>
          <a href="/articulos" className="btn btn-primary">Ver Todos los Artículos</a>
        </div>
      </div>
    </section>
  );
}