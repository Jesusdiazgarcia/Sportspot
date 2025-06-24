import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const slides = [
  {
    src: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg",
    texto: "Crea tu equipo y encuentra jugadores para tu deporte favorito.",
    boton: { label: "Crear mi equipo", href: "/teams/new" }
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1685311281420-719154d47688?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmlub3MlMjBqdWdhbmRvJTIwYmFsb25jZXN0b3xlbnwwfHwwfHx8MA%3D%3D",
    texto: "Explora equipos, únete a torneos y organiza partidos amistosos.",
    boton: { label: "Explorar equipos", href: "/teams" }
  },
  {
    src: "https://images.unsplash.com/photo-1567880325673-ccc01edca61c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dm9sbGV5YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
    texto: "Regístrate y conecta con la comunidad deportiva de tu ciudad.",
    boton: { label: "Crear cuenta", href: "/auth/signup" }
  }
];

export default function MiCarrusel() {
  return (
    <div style={{ width: '100%', height: '400px', margin: '32px 0', borderRadius: '24px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        autoPlay
        interval={10000}
        stopOnHover={false}
        emulateTouch={true}
      >
        {slides.map((slide, idx) => (
          <div key={idx} style={{ width: '100%', height: '400px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f7f7f7' }}>
            <img
              src={slide.src}
              alt={`slide-${idx}`}
              style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
            />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', borderRadius: '24px', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', pointerEvents: 'auto' }}>
              <p style={{ fontSize: 24, fontWeight: 500, marginBottom: 24, textShadow: '0 2px 8px rgba(0,0,0,0.25)' }}>{slide.texto}</p>
              <div style={{ display: 'flex', gap: 24, justifyContent: 'center' }}>
                <a href={slide.boton.href} style={{
                  padding: '14px 38px',
                  background: 'linear-gradient(90deg, #7c3aed 0%, #4f46e5 100%)',
                  color: '#fff',
                  borderRadius: 12,
                  fontWeight: 700,
                  fontSize: 20,
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(124,58,237,0.25)',
                  transition: 'transform 0.18s, box-shadow 0.18s, background 0.18s',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                  border: 'none',
                  outline: 'none',
                  letterSpacing: 0.5,
                  position: 'relative',
                  zIndex: 3,
                }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'scale(1.07)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(124,58,237,0.35)';
                    e.currentTarget.style.background = 'linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(124,58,237,0.25)';
                    e.currentTarget.style.background = 'linear-gradient(90deg, #7c3aed 0%, #4f46e5 100%)';
                  }}
                >
                  {slide.boton.label}
                  <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: 4}}><path d="M7 11h8m0 0-3.5-3.5M15 11l-3.5 3.5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
} 