import express from 'express';
import jwt from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: { id: string };
    }
  }
}

export const verificarToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers.authorization || req.headers['authorization'];
  const token = typeof authHeader === 'string' ? authHeader.split(' ')[1] : undefined;

  // Si no se envía el JWT, responde igual que en tu imagen de muestra [cite: 28, 29]
  if (!token) {
    return res.status(401).json({ message: 'Token requerido' });
  }

  try {
    const CLAVE_SECRETA = process.env.JWT_SECRET || 'firma_secreta_apachita_2026';
    const payloadValidado = jwt.verify(token, CLAVE_SECRETA);
    
    if (payloadValidado && typeof payloadValidado === 'object' && 'id' in payloadValidado) {
      req.user = { id: String((payloadValidado as jwt.JwtPayload).id) };
      return next(); 
    }

    return res.status(403).json({ message: 'Token inválido' });
  } catch (error) {
    return res.status(403).json({ message: 'Token vencido o incorrecto' });
  }
};