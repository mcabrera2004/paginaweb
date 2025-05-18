import React, { useState } from 'react';
export default function Newsletter() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => { e.preventDefault(); alert(`¡Gracias por suscribirte! Pronto recibirás nuestro boletín en ${email}`); setEmail(''); };
  return (
    <section className="newsletter" id="newsletter" style={{ backgroundColor:'var(--color-light)', padding:'3rem 0', textAlign:'center' }}>
      <div className="container">
        <h2>Suscríbete a Nuestro Boletín</h2>
        <p>Recibe artículos, recursos y actualizaciones semanales.</p>
        <form className="newsletter-form" onSubmit={handleSubmit} style={{ display:'flex', maxWidth:'500px', margin:'2rem auto 0' }}>
          <input type="email" placeholder="Tu correo electrónico" required value={email} onChange={e=>setEmail(e.target.value)} style={{ flex:1, padding:'0.75rem', border:'1px solid var(--color-gray)', borderRadius:'4px 0 0 4px' }} />
          <button type="submit" className="btn btn-accent" style={{ borderRadius:'0 4px 4px 0' }}>Suscribirse</button>
        </form>
      </div>
    </section>
  );
}