import React from 'react';
export default function About() {
  return (
    <section className="about" style={{ padding:'4rem 0' }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Quiénes Somos</h2>
        <div className="about-content" style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div className="about-text">
            <p>Sola Scriptura es un ministerio dedicado a la promoción y difusión de la teología reformada en el mundo hispanohablante. Nuestro objetivo es proporcionar recursos sólidos y bíblicos para la edificación de la iglesia y la formación teológica de creyentes.</p>
            <p>Creemos en la autoridad suprema de las Escrituras, la soberanía de Dios en la salvación, y la centralidad de Cristo en toda la teología. Trabajamos para traducir y producir contenido que ayude a los cristianos a profundizar en estas verdades.</p>
            <a href="/acerca" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>Conocer Más</a>
          </div>
        </div>
      </div>
    </section>
  );
}