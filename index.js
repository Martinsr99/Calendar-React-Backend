const express = require("express");
const { dbConnection } = require("./database/config");
require('dotenv').config()


const PORT = process.env.PORT

//Crear server
const app = express();

//Base de datos
dbConnection()

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
