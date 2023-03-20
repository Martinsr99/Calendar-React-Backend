const {validationResult} = require('express-validator')
const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs')
const {generarJWT} = require('../helpers/jwt')

const crearUsuario = async (req, res) => {

  const {password} = req.body

  try {

    let usuario = await Usuario.findOne({email: req.body.email})

    if (usuario) {
      return res.status(400).json({
        ok:false,
        msg: 'El usuario ya existe'
      })
    }

    usuario =  new Usuario(req.body)

    //Encriptar contraseña
    const salt = bcrypt.genSaltSync()
    usuario.password = bcrypt.hashSync(password,salt)

    //Generar JWT
    const token = await generarJWT(usuario.id,usuario.name)

    await usuario.save()
  
    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'No se pudo crear el usuario'
    })
  }

};

const loginUsuarios = async (req, res) => {

  const {email,password} = req.body

  try {
    const usuario = await Usuario.findOne({email})
    
    if (!usuario) {
      return res.status(400).json({
        ok:false,
        msg: 'El usuario no existe con ese email'
      })
    }
    
    const validPassword = bcrypt.compareSync(password, usuario.password)
    
    if(!validPassword) {
      return res.status(400).json({
        ok:false,
        msg: 'La contraseña no es correcta'
      })
    }

    //Generar JWT
    const token = await generarJWT(usuario.id,usuario.name)


    res.status(200).json({
      ok:true,
      uid:usuario.id,
      name: usuario.name,
      token
    })

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'No se pudo loggear el usuario'
    })
  }

};

const revalidarToken = (req, res) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = { crearUsuario,loginUsuarios,revalidarToken };
