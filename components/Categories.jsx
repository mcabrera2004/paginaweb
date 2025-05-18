import React from 'react';
const cats = [
  { icon: '📚', title: 'Artículos', desc: 'Escritos teológicos sobre diversos temas de la fe reformada.', link: '/articulos' },
  { icon: '📖', title: 'Libros', desc: 'Traducciones y libros completos de teólogos reformados.', link: '/libros' },
  { icon: '🎓', title: 'Estudios Bíblicos', desc: 'Material para estudio personal y grupal de las Escrituras.', link: '/estudios' },
  { icon: '🎧', title: 'Recursos', desc: 'Sermones, podcasts y videos sobre teología reformada.', link: '/recursos' }
];
export default function Categories() {
  return (
    <section className="categories" style={{ padding:'4rem 0', backgroundColor:'var(--color-gray)' }}>
      <div className="container">
        <h2 className="section-title">Explora por Categorías</h2>
        <div className="categories-grid" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px,1fr))', gap:'1.5rem' }}>
          {cats.map((c,i) => (
            <div key={i} className="category-card" style={{ backgroundColor:'#fff', textAlign:'center', padding:'2rem 1.5rem', borderRadius:'8px', boxShadow:'0 2px 10px rgba(0,0,0,0.05)', transition:'transform .3s' }}>
              <div className="category-icon" style={{ fontSize:'2.5rem', color:'var(--color-primary)', marginBottom:'1rem' }}>{c.icon}</div>
              <h3 className="category-title" style={{ fontSize:'1.2rem', marginBottom:'0.75rem' }}>{c.title}</h3>
              <p className="category-description" style={{ color:'var(--color-gray-dark)', fontSize:'0.9rem', marginBottom:'1rem' }}>{c.desc}</p>
              <a href={c.link} className="btn btn-accent">Explorar</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}