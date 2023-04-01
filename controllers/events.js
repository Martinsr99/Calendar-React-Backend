const Evento = require('../models/Evento');

const getEventos = async(req,res) => {

    const eventos = await Evento.find().populate('user','name')

    res.json( {
        ok: true,
        eventos
    })
}
const crearEvento = async(req,res) => {

    const evento = new Evento(req.body)

    try {

        evento.user = req.uid

        eventoGuardado = await evento.save()

        res.json({
            ok:true,
            evento: eventoGuardado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'Error al crear el evento'
        })
    }
}
const actualizarEvento = async (req,res) => {

    const eventoId = req.params.id

    try {


        const evento = await Evento.findById(eventoId)

        if(!evento) return res.status(404).json({
            ok:false,
            msg:`No se pudo encontrar el evento con id ${eventoId}`
        })

        if(evento.user.toString() !== req.uid){
            return res.status(401).json({
                ok:false,
                msg:`No tiene permisos para editar el evento con id ${eventoId}`
            })
        }

        const nuevoEvento = {
            ...req.body,
            user:req.uid
        }

        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId,nuevoEvento, {new:true})

        res.json({
            ok:true,
            evento: eventoActualizado
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:`Error al actualizar el evento con id ${eventoId}`
        })
    }
}
const eliminarEvento = async (req,res) => {

    const eventoId = req.params.id

    try {


        const evento = await Evento.findById(eventoId)

        if(!evento) return res.status(404).json({
            ok:false,
            msg:`No se pudo encontrar el evento con id ${eventoId}`
        })

        if(evento.user.toString() !== req.uid){
            return res.status(401).json({
                ok:false,
                msg:`No tiene permisos para eliminar el evento con id ${eventoId}`
            })
        }

        await Evento.findByIdAndDelete(eventoId)

        res.status(204).json({})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:`Error al eliminar el evento con id ${eventoId}`
        })
    }
}

module.exports = {getEventos,crearEvento,actualizarEvento,eliminarEvento}