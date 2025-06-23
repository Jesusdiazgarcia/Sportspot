import bcrypt from 'bcryptjs';
import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const { email, password, nombre, username } = req.body;

    // Validaciones básicas
    if (!email || !password || !nombre || !username) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'La contraseña debe tener al menos 6 caracteres' });
    }

    // Verificar si el email ya existe
    const existingUserByEmail = await kv.get(`user:${email}`);
    if (existingUserByEmail) {
      return res.status(400).json({ message: 'El email ya está registrado' });
    }

    // Verificar si el nombre de usuario ya existe
    const existingUserByUsername = await kv.sismember('usernames', username.toLowerCase());
    if (existingUserByUsername) {
      return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 12);

    // Crear usuario
    const userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const user = {
      id: userId,
      email,
      username: username.toLowerCase(),
      password_hash: hashedPassword,
      nombre,
      fecha_registro: new Date().toISOString(),
    };

    // Guardar usuario en Vercel KV
    await kv.set(`user:${email}`, user);
    await kv.set(`user_by_id:${userId}`, user);

    // Crear índices para búsquedas
    await kv.sadd('users', userId);
    await kv.sadd('usernames', username.toLowerCase());

    res.status(201).json({ 
      message: 'Usuario registrado exitosamente',
      user: {
        id: user.id,
        email: user.email,
        nombre: user.nombre,
        username: user.username,
      }
    });

  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
} 