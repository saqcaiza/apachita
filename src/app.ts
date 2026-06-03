import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import tasksRoutes from './routes/tasks.routes.js';

// Cargar variables de entorno
dotenv.config();

const app = express();
app.use(express.json());

// Registro de las rutas arquitectónicas
app.use('/api/auth', authRoutes);
app.use('/api', tasksRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor de Apachita corriendo de manera segura en el puerto ${PORT}`);
});