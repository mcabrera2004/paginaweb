import React from 'react';

const links = {
  'Enlaces Rápidos': ['Inicio', 'Artículos', 'Libros', 'Estudios Bíblicos', 'Recursos'],
  'Categorías': ['Soteriología', 'Historia de la Iglesia', 'Doctrina Bíblica', 'Apologética', 'Vida Cristiana'],
  'Contacto': ['info@solascriptura.org', '(123) 456-7890', 'Formulario de Contacto']
};

export default function Footer() {
  return (
    <footer className="footer" style={{ padding:'4rem 0 2rem' }}>
      <div className="container" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'2rem', marginBottom:'3rem' }}>
        <div className="footer-col">
          <h3 style={{ color:'var(--color-secondary)', marginBottom:'1.5rem', fontSize:'1.2rem' }}>Sola Scriptura</h3>
          <p>Explorando las profundidades de la teología reformada para la edificación de la iglesia y la gloria de Dios.</p>
        </div>
        {Object.entries(links).map(([title, items]) => (
          <div key={title} className="footer-col">
            <h3 style={{ color:'var(--color-secondary)', marginBottom:'1.5rem', fontSize:'1.2rem' }}>{title}</h3>
            <ul style={{ listStyle:'none' }}>{
              items.map((i,idx) => (
                <li key={idx} style={{ marginBottom:'0.75rem' }}>{
                  title === 'Contacto' && idx < 2 ? i : <a href={`/${i.toLowerCase().replace(/ /g,'')}`} style={{ color:'var(--color-gray)' }}>{i}</a>
                }</li>
              ))
            }</ul>
            {title==='Enlaces Rápidos' && (
              <div className="social-icons" style={{ display:'flex', gap:'1rem', marginTop:'1rem' }}>
                {['FB','TW','YT','IG'].map(s => <a key={s} href="#" style={{ display:'inline-flex', justifyContent:'center', alignItems:'center', width:'36px', height:'36px', backgroundColor:'rgba(255,255,255,0.1)', borderRadius:'50%', transition:'background-color .3s' }}>{s}</a>)}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="footer-bottom" style={{ textAlign:'center', borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:'2rem', color:'var(--color-gray)', fontSize:'0.9rem' }}>
        <p>© 2025 Sola Scriptura - Portal de Teología Reformada. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}