const crearUsuario = (req, res) => {
  res.json({
    ok: true,
  });
};

const loginUsuarios = (req, res) => {
  res.json({
    ok: true,
    msg: "login",
  });
};

const revalidarToken = (req, res) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = { crearUsuario,loginUsuarios,revalidarToken };
