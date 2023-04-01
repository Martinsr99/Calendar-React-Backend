const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events")

/* 
    Event Routes
    /api/events
*/
const {Router} = require('express')
const {check} = require('express-validator')

const {validarCampos} = require('../middlewares/validar-campos')
const {validarJWT} = require('../middlewares/validar-jwt')
const { isDate } = require("../helpers/isDate")

const router = Router()

router.use(validarJWT)

// Obtener eventos
router.get('/',getEventos)

// Obtener eventos
router.post('/', [
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatoria').custom(isDate),
    check('start','Fecha de finalización es obligatoria').custom(isDate),
    validarCampos
],crearEvento)

// Obtener eventos
router.put('/:id',actualizarEvento)

// Obtener eventos
router.delete('/:id',eliminarEvento)

module.exports = router