

const getEventos = (req,res) => {
    res.json( {
        ok: true,
        msg:'getEventos'
    })
}
const crearEvento = (req,res) => {
    res.json( {
        ok: true,
        msg:'crearEvento'
    })
}
const actualizarEventos = (req,res) => {
    res.json( {
        ok: true,
        msg:'actualizarEventos'
    })
}
const eliminarEventos = (req,res) => {
    res.json( {
        ok: true,
        msg:'eliminarEventos'
    })
}

module.exports = {getEventos,crearEvento,actualizarEventos,eliminarEventos}