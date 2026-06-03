import express from 'express';
import jwt from 'jsonwebtoken';

export const loginUsuario = async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;

  // Simulación de validación basada en el PDF de seguridad
  if (email === 'usuario45@correo.com' && password === 'password123') {
    const userIdSujeto = '45'; // ID extraído lógicamente

    // Generar el JWT firmado usando la clave del .env
    const CLAVE_SECRETA = process.env.JWT_SECRET || 'firma_secreta_apachita_2026';
    
    // Firmar el token con una duración de 2 horas
    const token = jwt.sign({ id: userIdSujeto }, CLAVE_SECRETA, { expiresIn: '2h' });

    return res.json({
      autenticado: true,
      mensaje: 'Inicio de sesión exitoso',
      token: token
    });
  }

  return res.status(401).json({
    autenticado: false,
    error: 'Credenciales incorrectas'
  });
};