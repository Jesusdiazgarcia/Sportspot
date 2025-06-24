import { useState } from 'react';
import { IoPeopleOutline, IoSearchOutline, IoTrophyOutline, IoCalendarOutline, IoLocationSharp, IoShieldCheckmarkOutline, IoAmericanFootballOutline, IoFootballOutline, IoBasketballOutline, IoVolleyballOutline, IoTennisballOutline } from 'react-icons/io5';

// Datos de ejemplo para simular la base de datos
const sampleTeams = [
  { id: 1, name: 'Los Cóndores de Acero', sport: 'Fútbol', country: 'Chile', city: 'Santiago', comuna: 'Maipú', lookingForPlayers: true },
  { id: 2, name: 'Tigres del Asfalto', sport: 'Baloncesto', country: 'México', city: 'CDMX', comuna: 'Coyoacán', lookingForPlayers: false },
  { id: 3, name: 'Gacelas de Madrid', sport: 'Voleibol', country: 'España', city: 'Madrid', comuna: 'Centro', lookingForPlayers: true },
  { id: 4, name: 'Buenos Aires Bulls', sport: 'Baloncesto', country: 'Argentina', city: 'Buenos Aires', comuna: 'Palermo', lookingForPlayers: true },
  { id: 5, name: 'Halcones de Vitacura', sport: 'Fútbol', country: 'Chile', city: 'Santiago', comuna: 'Vitacura', lookingForPlayers: false },
];

const sports = ['Fútbol', 'Baloncesto', 'Voleibol', 'Tenis', 'Rugby'];
const countries = ['Chile', 'España', 'Argentina', 'México', 'Colombia'];

export default function TeamsPage() {
  const [filters, setFilters] = useState({
    sport: '',
    country: '',
    city: '',
    comuna: '',
    sort: 'alphabetical',
    name: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredTeams = sampleTeams
    .filter(team => {
      return (
        (filters.sport ? team.sport === filters.sport : true) &&
        (filters.country ? team.country === filters.country : true) &&
        (filters.name ? team.name.toLowerCase().includes(filters.name.toLowerCase()) : true)
      );
    })
    .sort((a, b) => {
      if (filters.sort === 'alphabetical') {
        return a.name.localeCompare(b.name);
      }
      if (filters.sort === 'alphabetical-desc') {
        return b.name.localeCompare(a.name);
      }
      if (filters.sort === 'recent') {
        return b.id - a.id;
      }
      if (filters.sort === 'oldest') {
        return a.id - b.id;
      }
      return 0;
    });

  return (
    <main className="teams-page">
      <div className="container">
        <div className="teams-header">
          <h1 style={{ color: '#4c1d95', fontWeight: 800 }}>
            Encuentra tu próximo equipo
          </h1>
          <p style={{ color: '#6d28d9', fontSize: '1.15rem', marginTop: '-0.7rem', marginBottom: '1.5rem', fontWeight: 500 }}>
            Explora, filtra y conecta con equipos deportivos amateurs cerca de ti.
          </p>
          <button className="cta-button register-team">+ Registrar mi equipo</button>
        </div>
        
        <div className="filters-bar">
          <div className="filter-group filter-group-icon">
            <label htmlFor="name">Buscar por nombre</label>
            <div className="input-icon-wrapper">
              <IoSearchOutline className="input-icon" />
              <input
                type="text"
                name="name"
                id="name"
                value={filters.name}
                onChange={handleFilterChange}
                placeholder="Buscar equipo por nombre..."
                autoComplete="off"
              />
            </div>
          </div>
          <div className="filter-group">
            <label htmlFor="sport">Deporte</label>
            <select name="sport" id="sport" value={filters.sport} onChange={handleFilterChange}>
              <option value="">Todos</option>
              {sports.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="country">País</label>
            <select name="country" id="country" value={filters.country} onChange={handleFilterChange}>
              <option value="">Todos</option>
              {countries.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          {/* Placeholder para más filtros */}
          <div className="filter-group">
            <label htmlFor="sort">Ordenar por</label>
            <select name="sort" id="sort" value={filters.sort} onChange={handleFilterChange}>
              <option value="alphabetical">Alfabético (A-Z)</option>
              <option value="alphabetical-desc">Alfabético (Z-A)</option>
              <option value="recent">Más recientes</option>
              <option value="oldest">Más antiguos</option>
            </select>
          </div>
        </div>

        <div className="teams-grid">
          {filteredTeams.length > 0 ? (
            filteredTeams.map(team => (
              <div key={team.id} className="team-card">
                <div className="team-card-header">
                  <h3>{team.name}</h3>
                  {team.lookingForPlayers && (
                    <span className="looking-badge">
                      <IoPeopleOutline /> Buscando Jugadores
                    </span>
                  )}
                </div>
                <div className="team-card-body">
                  <p><IoTrophyOutline /> {team.sport}</p>
                  <p><IoLocationSharp /> {team.comuna}, {team.city}, {team.country}</p>
                </div>
                <div className="team-card-actions">
                  <button className="action-button">Ver Perfil</button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No se encontraron equipos con estos filtros. ¡Intenta ampliar tu búsqueda!</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 