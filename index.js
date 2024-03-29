const express = require("express");
const { dbConnection } = require("./database/config");
require('dotenv').config()
const cors = require('cors')


const PORT = process.env.PORT

//Crear server
const app = express();

//Base de datos
dbConnection()

//CORS
app.use(cors())

//Directorio Público
app.use(express.static('public'))

//Lectura y parseo del body
app.use(express.json())

//Rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))

//Listen
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
