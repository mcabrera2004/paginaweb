import React from 'react';

export default function SideMenu({ isOpen, onClose }) {
  return (
    <>
      <div 
        className={`slide-menu ${isOpen ? 'open' : ''}`} 
        style={{
          position: 'fixed',
          top: 0,
          left: isOpen ? 0 : '-300px',
          width: '300px',
          height: '100vh',
          backgroundColor: 'var(--color-primary)',
          backgroundImage: 'radial-gradient(circle,rgba(79, 28, 0, 1) 0%, rgba(28, 11, 1, 1) 80%)',
          zIndex: 1001,
          transition: 'left 0.3s ease-in-out',
          paddingTop: '70px',
          boxShadow: isOpen ? '2px 0 10px rgba(0,0,0,0.3)' : 'none'
        }}
      >
        <button
          className="close-menu"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            zIndex: 1002,
            padding: '5px',
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            transition: 'background-color 0.2s'
          }}
          aria-label="Cerrar menú"
        >
          ✕
        </button>
        
        <div style={{ padding: '0 1rem', marginBottom: '2rem' }}>
          <a href="/" style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}>Sola Scriptura</a>
        </div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {['Inicio','Artículos','Libros','Estudios','Recursos','Acerca de'].map(item => (
            <li key={item} style={{ margin: '0.5rem 0' }}>
              <a 
                href={`/${item.toLowerCase().replace(/ /g,'')}`} 
                style={{ 
                  color: '#fff', 
                  fontFamily: 'var(--font-sans)', 
                  fontWeight: 600, 
                  fontSize: '1rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.5px',
                  display: 'block',
                  padding: '0.75rem 1.5rem',
                  borderBottom: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1000,
            transition: 'background-color 0.3s ease'
          }}
          onClick={onClose}
        />
      )}
    </>
  );
}