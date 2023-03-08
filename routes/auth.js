/*
    Rutas de usuarios / Auth
    host + /api/auth
*/

const {Router} = require('express');
const { crearUsuario, loginUsuarios, revalidarToken } = require('./controllers/auth');
const router = Router()

router.post("/new", crearUsuario);

router.post("/", loginUsuarios );

router.get("/renew",revalidarToken );

module.exports = router;