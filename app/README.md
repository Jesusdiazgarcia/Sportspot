# SportSpot - Sistema de Equipos Deportivos

Una plataforma para conectar equipos deportivos amateurs, con sistema de autenticación y gestión de equipos.

## 🚀 Características

- ✅ **Autenticación completa** con NextAuth.js
- ✅ **Base de datos** con Vercel KV (Redis)
- ✅ **Registro e inicio de sesión** de usuarios
- ✅ **Sistema de equipos** con validación (mínimo 11 jugadores)
- ✅ **Interfaz moderna** con Bootstrap y CSS personalizado
- ✅ **Responsive design** para móviles y desktop

## 🛠️ Tecnologías

- **Frontend**: Next.js 15, React, Bootstrap
- **Autenticación**: NextAuth.js
- **Base de datos**: Vercel KV (Redis)
- **Estilos**: CSS personalizado + Bootstrap
- **Iconos**: React Icons

## 📋 Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/Jesusdiazgarcia/Sportspot.git
cd Sportspot/app
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env.local` en la carpeta `app` con el siguiente contenido:

```env
# NextAuth Configuration
NEXTAUTH_SECRET=tu_secreto_super_seguro_aqui_cambialo_en_produccion
NEXTAUTH_URL=http://localhost:3000

# Vercel KV Configuration (para desarrollo local)
KV_URL=redis://localhost:6379
KV_REST_API_URL=http://localhost:8080
KV_REST_API_TOKEN=tu_token_aqui
KV_REST_API_READ_ONLY_TOKEN=tu_token_readonly_aqui
```

### 4. Configurar Vercel KV

#### Para desarrollo local:
1. Instala Redis localmente o usa Docker
2. Configura las variables de entorno con tu instancia local

#### Para producción:
1. Crea una base de datos en [Vercel KV](https://vercel.com/docs/storage/vercel-kv)
2. Copia las variables de entorno desde el dashboard de Vercel

### 5. Ejecutar el proyecto
```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:3000`

## 🔐 Sistema de Autenticación

### Registro de Usuarios
- Los usuarios pueden registrarse con email, contraseña y nombre
- Las contraseñas se hashean con bcrypt
- Validación de email único

### Inicio de Sesión
- Autenticación con email y contraseña
- Sesiones persistentes con JWT
- Protección de rutas

## 🏆 Sistema de Equipos

### Creación de Equipos
- Solo usuarios autenticados pueden crear equipos
- Información requerida: nombre, deporte, ciudad, país
- Estado inicial: "pendiente"

### Validación de Equipos
- Mínimo 11 jugadores confirmados para validar
- El creador cuenta como 1 jugador automáticamente
- Capitán puede añadir jugadores manualmente
- Validación automática al alcanzar el mínimo

### Gestión de Miembros
- Capitán puede añadir/remover jugadores
- Sistema de roles: capitán y jugador
- Contador automático de jugadores confirmados

## 📁 Estructura del Proyecto

```
app/
├── components/          # Componentes reutilizables
│   ├── Navbar.js       # Navegación principal
│   ├── Footer.js       # Pie de página
│   └── Modal.js        # Modal genérico
├── pages/              # Páginas de Next.js
│   ├── api/            # API Routes
│   │   └── auth/       # Endpoints de autenticación
│   ├── auth/           # Páginas de autenticación
│   │   ├── signin.js   # Inicio de sesión
│   │   └── signup.js   # Registro
│   ├── _app.js         # Configuración global
│   ├── index.js        # Página principal
│   └── teams.js        # Página de equipos
├── lib/                # Utilidades y configuración
│   └── kv.js           # Funciones de Vercel KV
├── styles/             # Estilos CSS
│   └── globals.css     # Estilos globales
└── README.md           # Este archivo
```

## 🔧 API Endpoints

### Autenticación
- `POST /api/auth/register` - Registro de usuarios
- `POST /api/auth/[...nextauth]` - NextAuth.js (login/logout)

### Equipos (próximamente)
- `GET /api/teams` - Obtener todos los equipos
- `POST /api/teams` - Crear nuevo equipo
- `GET /api/teams/:id` - Obtener equipo específico
- `PUT /api/teams/:id` - Actualizar equipo
- `DELETE /api/teams/:id` - Eliminar equipo

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en el dashboard
3. Despliega automáticamente

### Otros proveedores
- Netlify
- Railway
- Heroku

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si tienes problemas o preguntas:
1. Revisa la documentación
2. Busca en los issues existentes
3. Crea un nuevo issue con detalles del problema

---

**Desarrollado con ❤️ para la comunidad deportiva**
