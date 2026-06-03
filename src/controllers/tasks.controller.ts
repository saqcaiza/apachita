import express from 'express';

const baseDatosTareas = [
  { id: 1, userId: '45', descripcion: 'Pagar servicio de internet' },
  { id: 2, userId: '46', descripcion: 'Comprar suministros de oficina' }
];

export const obtenerMisTareas = async (req: express.Request, res: express.Response) => {
  const userIdAutenticado = req.user?.id; 

  if (!userIdAutenticado) {
    return res.status(401).json({ message: 'Usuario no identificado' });
  }

  // IMPRESIÓN EN CONSOLA: Muestra la confirmación exacta en la terminal de Node 
  console.log(`Transferencia autorizada – userId del token: ${userIdAutenticado}`);

  // Filtrar las tareas que le pertenecen al dueño real del token 
  const tareasDelUsuario = baseDatosTareas.filter(tarea => tarea.userId === userIdAutenticado);

  // Respuesta simplificada y fácil de leer para el cliente en Postman 
  return res.json({
    status: 'success',
    userId: userIdAutenticado,
    data: tareasDelUsuario
  });
};