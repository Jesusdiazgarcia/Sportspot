import { IoPeopleOutline, IoSearchOutline, IoTrophyOutline, IoCalendarOutline } from 'react-icons/io5';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function HomePage() {
  const { data: session, status } = useSession();

  return (
    <>
      <main className="container text-center py-4 py-lg-5">
        <div className="welcome-hero">
          <h1>Conecta. Compite. Crece.</h1>
          <p className="lead">Tu punto de encuentro para organizar y encontrar equipos deportivos.</p>
        </div>

        <div className="auth-buttons" style={{ marginBottom: '3rem' }}>
          {status === 'loading' ? (
            <p className="lead">Cargando...</p>
          ) : session ? (
            <>
              {/* Botones para usuarios con sesión iniciada */}
              <Link href="/teams/new" className="cta-button">
                Crear mi Equipo
              </Link>
              <Link href="/teams" className="cta-button secondary">
                Buscar Rivales
              </Link>
            </>
          ) : (
            <>
              {/* Botones para visitantes */}
              <Link href="/teams" className="cta-button">
                Explorar Equipos
              </Link>
              <Link href="/auth/signup" className="cta-button secondary">
                Crear Cuenta
              </Link>
            </>
          )}
        </div>

        <div className="featuresSection">
          <div className="container text-center py-5">
            <div className="row">
              <div className="col-md-3 mb-4">
                <div className="featureCard h-100">
                  <div className="icon"><IoPeopleOutline /></div>
                  <h3>REGISTRA TU EQUIPO</h3>
                  <p>Crea el perfil de tu equipo y encuentra jugadores</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="featureCard h-100">
                  <div className="icon"><IoSearchOutline /></div>
                  <h3>BUSCA EQUIPOS</h3>
                  <p>Encuentra equipos por deporte, ubicación y más</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="featureCard h-100">
                  <div className="icon"><IoTrophyOutline /></div>
                  <h3>PARTICIPA EN TORNEOS</h3>
                  <p>Inscríbete en torneos y compite con otros equipos</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="featureCard h-100">
                  <div className="icon"><IoCalendarOutline /></div>
                  <h3>ORGANIZA AMISTOSOS</h3>
                  <p>Coordina partidos amistosos con otros equipos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 