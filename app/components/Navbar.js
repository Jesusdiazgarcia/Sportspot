import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import { IoTrophyOutline, IoPersonCircleOutline, IoChevronDownOutline } from 'react-icons/io5';
import { useState, useRef, useEffect } from 'react';

const Navbar = ({ onMenuClick }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cerrar el dropdown si se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <IoTrophyOutline />
          SPORTSPOT
        </Link>
        <div className="nav-links">
          <Link href="/" className={router.pathname === "/" ? "active" : ""}>Inicio</Link>
          <Link href="/teams" className={router.pathname === "/teams" ? "active" : ""}>Equipos</Link>
          <button className="nav-button" onClick={() => onMenuClick('tournaments')}>
            Torneos
          </button>
          <button className="nav-button" onClick={() => onMenuClick('friendly')}>
            Amistosos
          </button>
        </div>
        
        <div className="nav-auth">
          {status === 'loading' ? (
            <span className="auth-loading">Cargando...</span>
          ) : session ? (
            <div className={`auth-user user-dropdown${dropdownOpen ? ' user-dropdown-open' : ''}`} ref={dropdownRef}>
              <button className="user-dropdown-toggle" onClick={() => setDropdownOpen((open) => !open)}>
                <IoPersonCircleOutline className="user-icon" />
                <span className="user-name">¡Hola, {session.user.username}!</span>
                <IoChevronDownOutline className="chevron-icon" />
              </button>
              {dropdownOpen && (
                <div className="user-dropdown-menu">
                  <div className="user-dropdown-profile">
                    <div className="user-dropdown-avatar">
                      <IoPersonCircleOutline />
                    </div>
                    <div className="user-dropdown-info">
                      <div className="user-dropdown-username">{session.user.username}</div>
                      <div className="user-dropdown-email">{session.user.email}</div>
                    </div>
                  </div>
                  <div className="user-dropdown-separator" />
                  <Link href="/profile" className="user-dropdown-item">Mi perfil</Link>
                  <button className="user-dropdown-item logout" onClick={handleSignOut}>Salir</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/auth/signin" className="auth-button login">
                Iniciar Sesión
              </Link>
              <Link href="/auth/signup" className="auth-button register">
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 