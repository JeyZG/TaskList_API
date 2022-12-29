const express = require('express');
const app = express();

// Para usar herramientas de express para usar JSON
app.use(express.json());

// Importamos las rutas que vamos a usar
const tasks = require('./routes/tasksRoutes');

// Definimos en que ruta iniciaremos a ver el contenido de las tareas
app.use('/api', tasks);

module.exports = app;