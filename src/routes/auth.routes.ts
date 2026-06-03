import { Router } from 'express';
import { loginUsuario } from '../features/auth/login.js'; // Añadida la extensión .js por exigencia de ES Modules nativos

const router = Router();

router.post('/login', loginUsuario);

export default router;