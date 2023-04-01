

const {Schema,model} = require('mongoose')


const EventoSchema = Schema({

    title: {
        type:String,
        require:true
    },
    notes: {
        type:string
    },
    start: {
        type: Date,
        require:true
   },
    start: {
        type: Date,
        require:true
   },
   user: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario'
   }

})

module.exports = model('Evento', EventoSchema)