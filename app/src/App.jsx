import { useState } from 'react'
import { IoPeopleOutline, IoSearchOutline, IoTrophyOutline, IoCalendarOutline, IoLogoTwitter, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5'
// import './App.css' // Archivo no existente, se elimina la importación.

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  // Estados para filtros de búsqueda
  const [searchFilters, setSearchFilters] = useState({
    deporte: '',
    pais: '',
    ciudad: '',
    comuna: '',
    orden: 'alfabetico'
  })

  // Datos de ejemplo para equipos
  const teams = [
    {
      id: 1,
      name: 'Real Madrid FC',
      sport: 'Fútbol',
      country: 'España',
      city: 'Madrid',
      comuna: 'Centro',
      players: 25,
      lookingForPlayers: true,
      contact: 'real@madrid.com'
    },
    {
      id: 2,
      name: 'Barcelona Warriors',
      sport: 'Baloncesto',
      country: 'España',
      city: 'Barcelona',
      comuna: 'Eixample',
      players: 15,
      lookingForPlayers: false,
      contact: 'barca@warriors.com'
    },
    {
      id: 3,
      name: 'Atlético Deportivo',
      sport: 'Fútbol',
      country: 'Chile',
      city: 'Santiago',
      comuna: 'Providencia',
      players: 22,
      lookingForPlayers: true,
      contact: 'atletico@deportivo.cl'
    }
  ]

  const sports = ['Fútbol', 'Baloncesto', 'Voleibol', 'Tenis', 'Rugby', 'Hockey']
  const countries = ['Chile', 'España', 'Argentina', 'México', 'Colombia']
  const cities = ['Santiago', 'Madrid', 'Barcelona', 'Buenos Aires', 'Ciudad de México']
  const comunas = ['Providencia', 'Centro', 'Eixample', 'Palermo', 'Coyoacán']

  const handleLogin = (userData) => {
    setIsLoggedIn(true)
    setCurrentUser(userData)
    setShowLoginModal(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentUser(null)
  }

  const handleRegisterTeam = () => {
    // Lógica para registrar equipo
    alert('Funcionalidad de registro de equipos próximamente')
  }

  const filteredTeams = teams.filter(team => {
    return (!searchFilters.deporte || team.sport === searchFilters.deporte) &&
           (!searchFilters.pais || team.country === searchFilters.pais) &&
           (!searchFilters.ciudad || team.city === searchFilters.ciudad) &&
           (!searchFilters.comuna || team.comuna === searchFilters.comuna)
  }).sort((a, b) => {
    if (searchFilters.orden === 'alfabetico') {
      return a.name.localeCompare(b.name)
    }
    return 0
  })

  const renderHome = () => (
    <div className="home-section">
      <div className="hero">
        <h1><IoTrophyOutline style={{ marginRight: '0.5rem' }} /> SportSpot</h1>
        <p>Conecta con equipos deportivos, encuentra jugadores y participa en torneos</p>
        {!isLoggedIn ? (
          <div className="auth-buttons">
            <button className="cta-button" onClick={() => setShowLoginModal(true)}>
              Iniciar Sesión
            </button>
            <button className="cta-button secondary" onClick={() => setShowRegisterModal(true)}>
              Registrarse
            </button>
          </div>
        ) : (
          <div className="welcome-message">
            <h3>¡Bienvenido, {currentUser?.name}!</h3>
            <button className="cta-button" onClick={() => setActiveSection('teams')}>
              Explorar Equipos
            </button>
          </div>
        )}
      </div>
      
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon"><IoPeopleOutline /></div>
          <h3>Registra tu Equipo</h3>
          <p>Crea el perfil de tu equipo y encuentra jugadores</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><IoSearchOutline /></div>
          <h3>Busca Equipos</h3>
          <p>Encuentra equipos por deporte, ubicación y más</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><IoTrophyOutline /></div>
          <h3>Participa en Torneos</h3>
          <p>Inscríbete en torneos y compite con otros equipos</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><IoCalendarOutline /></div>
          <h3>Organiza Amistosos</h3>
          <p>Coordina partidos amistosos con otros equipos</p>
        </div>
      </div>
    </div>
  )

  const renderTeams = () => (
    <div className="teams-section">
      <div className="teams-header">
        <h2>Equipos Registrados</h2>
        {isLoggedIn && (
          <button className="register-team-btn" onClick={handleRegisterTeam}>
            + Registrar Mi Equipo
          </button>
        )}
      </div>

      <div className="search-filters">
        <div className="filter-group">
          <label>Deporte:</label>
          <select 
            value={searchFilters.deporte} 
            onChange={(e) => setSearchFilters({...searchFilters, deporte: e.target.value})}
          >
            <option value="">Todos los deportes</option>
            {sports.map(sport => (
              <option key={sport} value={sport}>{sport}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>País:</label>
          <select 
            value={searchFilters.pais} 
            onChange={(e) => setSearchFilters({...searchFilters, pais: e.target.value})}
          >
            <option value="">Todos los países</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Ciudad:</label>
          <select 
            value={searchFilters.ciudad} 
            onChange={(e) => setSearchFilters({...searchFilters, ciudad: e.target.value})}
          >
            <option value="">Todas las ciudades</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Comuna:</label>
          <select 
            value={searchFilters.comuna} 
            onChange={(e) => setSearchFilters({...searchFilters, comuna: e.target.value})}
          >
            <option value="">Todas las comunas</option>
            {comunas.map(comuna => (
              <option key={comuna} value={comuna}>{comuna}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Ordenar por:</label>
          <select 
            value={searchFilters.orden} 
            onChange={(e) => setSearchFilters({...searchFilters, orden: e.target.value})}
          >
            <option value="alfabetico">Alfabético</option>
            <option value="jugadores">Número de jugadores</option>
          </select>
        </div>
      </div>

      <div className="teams-grid">
        {filteredTeams.map(team => (
          <div key={team.id} className="team-card">
            <div className="team-header">
              <h3>{team.name}</h3>
              {team.lookingForPlayers && (
                <span className="looking-badge"><IoPeopleOutline style={{ marginRight: '0.3rem', verticalAlign: 'middle' }} /> Buscando jugadores</span>
              )}
            </div>
            <div className="team-info">
              <p><strong>Deporte:</strong> {team.sport}</p>
              <p><strong>Ubicación:</strong> {team.comuna}, {team.city}, {team.country}</p>
              <p><strong>Jugadores:</strong> {team.players}</p>
              <p><strong>Contacto:</strong> {team.contact}</p>
            </div>
            <div className="team-actions">
              <button className="action-btn primary">Ver Perfil</button>
              <button className="action-btn secondary">Contactar</button>
            </div>
          </div>
        ))}
      </div>

      {filteredTeams.length === 0 && (
        <div className="no-results">
          <p>No se encontraron equipos con los filtros seleccionados</p>
        </div>
      )}
    </div>
  )

  const renderTournaments = () => (
    <div className="tournaments-section">
      <h2><IoTrophyOutline style={{ marginRight: '0.5rem' }} /> Torneos y Competencias</h2>
      <div className="coming-soon">
        <h3>Próximamente</h3>
        <p>Estamos trabajando para traer las mejores competencias a SportSpot.</p>
        <ul>
          <li>Inscripción a torneos</li>
          <li>Creación de torneos</li>
          <li>Gestión de brackets</li>
          <li>Resultados en tiempo real</li>
        </ul>
      </div>
    </div>
  )

  const renderFriendly = () => (
    <div className="friendly-section">
      <h2><IoCalendarOutline style={{ marginRight: '0.5rem' }} /> Partidos Amistosos</h2>
      <div className="coming-soon">
        <h3>Próximamente</h3>
        <p>Pronto podrás organizar y unirte a partidos amistosos.</p>
        <ul>
          <li>Solicitar partidos amistosos</li>
          <li>Gestión de horarios</li>
          <li>Confirmación de equipos</li>
          <li>Historial de partidos</li>
        </ul>
      </div>
    </div>
  )

  const renderLoginModal = () => (
    <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3><IoPeopleOutline style={{ marginRight: '0.5rem' }} /> Iniciar Sesión</h3>
          <button className="close-modal" onClick={() => setShowLoginModal(false)}>&times;</button>
        </div>
        <form className="auth-form" onSubmit={(e) => {
          e.preventDefault()
          // Lógica para iniciar sesión
        }}>
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit" className="auth-submit">Iniciar Sesión</button>
        </form>
        <p>¿No tienes cuenta? <button onClick={() => {setShowLoginModal(false); setShowRegisterModal(true)}}>Regístrate</button></p>
      </div>
    </div>
  )

  const renderRegisterModal = () => (
    <div className="modal-overlay" onClick={() => setShowRegisterModal(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3><IoPeopleOutline style={{ marginRight: '0.5rem' }} /> Registrarse</h3>
          <button className="close-modal" onClick={() => setShowRegisterModal(false)}>&times;</button>
        </div>
        <form className="auth-form" onSubmit={(e) => {
          e.preventDefault()
          // Lógica para registrar usuario
        }}>
          <input type="text" placeholder="Nombre completo" required />
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <input type="password" placeholder="Confirmar contraseña" required />
          <button type="submit" className="auth-submit">Registrarse</button>
        </form>
        <p>¿Ya tienes cuenta? <button onClick={() => {setShowRegisterModal(false); setShowLoginModal(true)}}>Inicia sesión</button></p>
      </div>
    </div>
  )

  const renderProfile = () => {
    if (!isLoggedIn || !currentUser) return null
    return (
      <div className="profile-section">
        <h2><IoPeopleOutline style={{ marginRight: '0.5rem' }} /> Mi Perfil</h2>
        <div className="profile-card">
          <h3>{currentUser.name}</h3>
          <p><strong>Email:</strong> {currentUser.email}</p>
          <p><strong>Equipos:</strong> Aún no perteneces a ningún equipo.</p>
          <button className="cta-button secondary" onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      </div>
    )
  }

  const renderMyTeams = () => {
    if (!isLoggedIn) return null
    return (
      <div className="my-teams-section">
        <h2><IoTrophyOutline style={{ marginRight: '0.5rem' }} /> Mis Equipos</h2>
        <div className="no-results">
          <p>Aún no has registrado ningún equipo.</p>
          <button className="cta-button" onClick={handleRegisterTeam}>Registra tu primer equipo</button>
        </div>
      </div>
    )
  }

  return (
    <div className="App d-flex flex-column">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">
            <h2><IoTrophyOutline style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> SportSpot</h2>
          </div>
          <div className="nav-links">
            <button 
              className={`nav-btn ${activeSection === 'home' ? 'active' : ''}`} 
              onClick={() => setActiveSection('home')}
            >
              Inicio
            </button>
            <button 
              className={`nav-btn ${activeSection === 'teams' ? 'active' : ''}`} 
              onClick={() => setActiveSection('teams')}
            >
              Equipos
            </button>
            <button 
              className={`nav-btn ${activeSection === 'tournaments' ? 'active' : ''}`} 
              onClick={() => setActiveSection('tournaments')}
            >
              Torneos
            </button>
            <button 
              className={`nav-btn ${activeSection === 'friendly' ? 'active' : ''}`} 
              onClick={() => setActiveSection('friendly')}
            >
              Amistosos
            </button>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="logout-btn">
                Cerrar Sesión
              </button>
            ) : (
              <button onClick={() => setShowLoginModal(true)} className="login-btn">
                Iniciar Sesión
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container flex-grow-1 py-4 py-lg-5">
        <div className="row justify-content-center">
          <div className="col-12">
            {activeSection === 'home' && renderHome()}
            {activeSection === 'teams' && renderTeams()}
            {activeSection === 'tournaments' && renderTournaments()}
            {activeSection === 'friendly' && renderFriendly()}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer mt-auto">
        <div className="container">
          <div className="row">
            {/* Columna de la Marca (más ancha) */}
            <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
              <h4 className="footer-brand"><IoTrophyOutline /> SPORTSPOT</h4>
              <p>Conectando pasiones, creando equipos.</p>
            </div>

            {/* Columnas de enlaces */}
            <div className="col-lg-7 col-md-12">
              <div className="row">
                <div className="col-md-4 col-6 mb-4 mb-lg-0">
                  <h5 className="footer-heading">NAVEGACIÓN</h5>
                  <ul className="list-unstyled">
                    <li><a href="#" onClick={() => setActiveSection('home')}>Inicio</a></li>
                    <li><a href="#" onClick={() => setActiveSection('teams')}>Equipos</a></li>
                    <li><a href="#" onClick={() => setActiveSection('tournaments')}>Torneos</a></li>
                    <li><a href="#" onClick={() => setActiveSection('friendly')}>Amistosos</a></li>
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-4 mb-lg-0">
                  <h5 className="footer-heading">LEGAL</h5>
                  <ul className="list-unstyled">
                    <li><a href="#">Términos y Condiciones</a></li>
                    <li><a href="#">Política de Privacidad</a></li>
                    <li><a href="#">Política de Cookies</a></li>
                  </ul>
                </div>
                <div className="col-md-4 col-12">
                  <h5 className="footer-heading">SÍGUENOS</h5>
                  <div className="social-icons">
                    <a href="#" aria-label="Twitter"><IoLogoTwitter /></a>
                    <a href="#" aria-label="Instagram"><IoLogoInstagram /></a>
                    <a href="#" aria-label="Facebook"><IoLogoFacebook /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} SportSpot. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showLoginModal && renderLoginModal()}
      {showRegisterModal && renderRegisterModal()}
    </div>
  )
}

export default App
