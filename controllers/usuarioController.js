const Usuario = require('../models/UsuarioModel');

async function listarUsuarios(req, res) {
    const usuarios = await Usuario.find();
    res.json(usuarios);
}

async function criarUsuario(req, res) {
    const usuario = new Usuario(req.body);
    const novoUsuario = await usuario.save();
    res.json(novoUsuario);
}

module.exports = {
    listarUsuarios,
    criarUsuario
};
