import React from 'react';

function Inicio() {
  return (
    <div style={{ background: 'black', color: 'white', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center', color: '#f87171', marginBottom: '1rem' }}>
        🌄 Bienvenido a Nuevo Mundo
      </h1>

      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Descubre las raíces, cultura y realidad de <strong>Chugchilán</strong> a través de fichas vivas,
        imágenes reales y generación de contenido cultural.
      </p>

      {/* Historia */}
      <section style={{ display: 'flex', flexDirection: 'row', gap: '2rem', marginBottom: '3rem' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '1.5rem', color: '#f87171' }}>📜 Historia y legado</h2>
          <p>
            Fundada el 29 de septiembre de 1861, Chugchilán ha sido un eje cultural entre la Costa y la Sierra.
            Antes parte de Pujilí, se unió a Sigchos en 1992. Su historia refleja la fuerza de una parroquia
            resiliente, comercial y llena de tradiciones.
          </p>
        </div>
        <img
          src="/images/historia.jpg"
          alt="Historia"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: '250px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
      </section>

      {/* Cultura */}
      <section style={{ display: 'flex', flexDirection: 'row-reverse', gap: '2rem', marginBottom: '3rem' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '1.5rem', color: '#f87171' }}>🎭 Cultura viva</h2>
          <p>
            La mayoría de la población es indígena Kichwa. Las tradiciones se manifiestan en su ropa, comida,
            y festividades. Sin embargo, la globalización y la migración han puesto en riesgo la preservación
            de estas costumbres en las nuevas generaciones.
          </p>
        </div>
        <img
          src="/images/cultura.jpg"
          alt="Cultura"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: '250px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
      </section>

      {/* Turismo */}
      <section style={{ display: 'flex', flexDirection: 'row', gap: '2rem', marginBottom: '3rem' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '1.5rem', color: '#f87171' }}>🧭 Turismo y naturaleza</h2>
          <p>
            Rodeado de paisajes andinos, Chugchilán se ubica cerca de la icónica laguna de Quilotoa.
            A 2.860 msnm, ofrece rutas ecológicas, miradores naturales y experiencias auténticas con sus
            comunidades.
          </p>
        </div>
        <img
          src="/images/turismo.jpg"
          alt="Turismo"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: '250px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
      </section>

      {/* Gastronomía */}
      <section style={{ display: 'flex', flexDirection: 'row-reverse', gap: '2rem', marginBottom: '3rem' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '1.5rem', color: '#f87171' }}>🍲 Gastronomía y sabores</h2>
          <p>
            Entre los sabores típicos están el cuy asado, la fritada y la gallina criolla. Las fiestas se
            celebran con música, danza y comida compartida como símbolo de comunidad.
          </p>
        </div>
        <img
          src="/images/comida.jpg"
          alt="Comida"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: '250px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
      </section>

      {/* Footer */}
      <div style={{ textAlign: 'center', fontSize: '0.9rem', marginTop: '3rem', color: '#888' }}>
        Hecho con ❤️ por estudiantes para preservar la identidad de los pueblos.
      </div>
    </div>
  );
}

export default Inicio;
