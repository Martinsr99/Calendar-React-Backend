


const crearUsuario = (req, res) => {

  const {name,email,password} = req.body

  res.json({
    ok: true,
    msg:'registro',
    name,
    email,
    password
  });
};

const loginUsuarios = (req, res) => {

  const {email,password} = req.body


  res.json({
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
