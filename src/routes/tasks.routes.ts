import { Router } from 'express';
import { obtenerMisTareas } from '../controllers/tasks.controller.js';
import { verificarToken } from '../middlewares/auth.middleware.js';

const router = Router();

// Protegemos la ruta inyectando el middleware antes del controlador
router.get('/mis-tareas', verificarToken, obtenerMisTareas);

export default router;