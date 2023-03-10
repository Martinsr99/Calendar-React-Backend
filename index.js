const express = require("express");
require('dotenv').config()


const PORT = process.env.PORT

//Crear server
const app = express();

//Directorio Público
app.use(express.static('public'))

//Lectura y parseo del body
app.use(express.json())

//Rutas
app.use('/api/auth', require('./routes/auth'))

//Listen
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
