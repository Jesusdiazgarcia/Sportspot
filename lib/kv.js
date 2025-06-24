import { kv } from '@vercel/kv';

// Función para obtener un usuario por email
export async function getUserByEmail(email) {
  try {
    return await kv.get(`user:${email}`);
  } catch (error) {
    console.error('Error getting user by email:', error);
    return null;
  }
}

// Función para obtener un usuario por ID
export async function getUserById(id) {
  try {
    return await kv.get(`user_by_id:${id}`);
  } catch (error) {
    console.error('Error getting user by ID:', error);
    return null;
  }
}

// Función para crear un usuario
export async function createUser(userData) {
  try {
    const { email, id } = userData;
    await kv.set(`user:${email}`, userData);
    await kv.set(`user_by_id:${id}`, userData);
    await kv.sadd('users', id);
    return true;
  } catch (error) {
    console.error('Error creating user:', error);
    return false;
  }
}

// Función para obtener todos los usuarios
export async function getAllUsers() {
  try {
    const userIds = await kv.smembers('users');
    const users = [];
    
    for (const userId of userIds) {
      const user = await kv.get(`user_by_id:${userId}`);
      if (user) {
        users.push(user);
      }
    }
    
    return users;
  } catch (error) {
    console.error('Error getting all users:', error);
    return [];
  }
}

// Función para crear un equipo
export async function createTeam(teamData) {
  try {
    const { id } = teamData;
    await kv.set(`team:${id}`, teamData);
    await kv.sadd('teams', id);
    return true;
  } catch (error) {
    console.error('Error creating team:', error);
    return false;
  }
}

// Función para obtener un equipo por ID
export async function getTeamById(id) {
  try {
    return await kv.get(`team:${id}`);
  } catch (error) {
    console.error('Error getting team by ID:', error);
    return null;
  }
}

// Función para obtener todos los equipos
export async function getAllTeams() {
  try {
    const teamIds = await kv.smembers('teams');
    const teams = [];
    
    for (const teamId of teamIds) {
      const team = await kv.get(`team:${teamId}`);
      if (team) {
        teams.push(team);
      }
    }
    
    return teams;
  } catch (error) {
    console.error('Error getting all teams:', error);
    return [];
  }
}

// Función para actualizar un equipo
export async function updateTeam(id, teamData) {
  try {
    await kv.set(`team:${id}`, teamData);
    return true;
  } catch (error) {
    console.error('Error updating team:', error);
    return false;
  }
}

export { kv }; 