const BaseRepository = require('./BaseRepository');
const UsuarioModel = require('../models/Usuario/UsuarioModel');

class UsuarioRepository extends BaseRepository {
    constructor() {
        super('UsuarioModel');
    }
}

module.exports = UsuarioRepository;
