import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoTrophyOutline } from 'react-icons/io5';

const Navbar = ({ onMenuClick }) => {
  const router = useRouter();

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
          <button onClick={() => onMenuClick('tournaments')} className="nav-button">Torneos</button>
          <button onClick={() => onMenuClick('friendly')} className="nav-button">Amistosos</button>
        </div>
        <div className="nav-auth">
          <button className="auth-button login">Iniciar Sesión</button>
          <button className="auth-button register">Registrarse</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 