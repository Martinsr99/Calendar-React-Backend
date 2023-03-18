const {validationResult} = require('express-validator')
const Usuario = require('../models/Usuario')

const crearUsuario = async (req, res) => {

  try {

    let usuario = await Usuario.findOne({email: req.body.email})

    if (usuario) {
      return res.status(400).json({
        ok:false,
        msg: 'El usuario ya existe'
      })
    }

    usuario =  new Usuario(req.body)
    await usuario.save()
  
    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'No se pudo crear el usuario'
    })
  }

};

const loginUsuarios = (req, res) => {

  const {email,password} = req.body


  res.status(200).json({
    ok: true,
    msg: "login",
    email,
    password
  });
};

const revalidarToken = (req, res) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = { crearUsuario,loginUsuarios,revalidarToken };
