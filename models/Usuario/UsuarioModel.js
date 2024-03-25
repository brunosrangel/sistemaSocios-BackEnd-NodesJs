const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    idUsuario: String,
    nomeUsuario: String,
    email: String,
    endereco: { type: mongoose.Schema.Types.ObjectId, ref: 'EnderecoUsuarioModel' },
    telefone: { type: mongoose.Schema.Types.ObjectId, ref: 'TelefoneUsuarioModel' },
    profissao: String,
    escolaridade: { type: mongoose.Schema.Types.ObjectId, ref: 'EscolaridadeUsuarioModel' },
    redeSocial: { type: mongoose.Schema.Types.ObjectId, ref: 'RedeSocialModel' },
    dataEntrada: Date,
    dataIniciacao: Date,
    dataUltimaObrigacao: Date,
    aplicaJurosMensalidade: { type: mongoose.Schema.Types.ObjectId, ref: 'JurosMensalidadeModel' },
    valorMensalidade: { type: mongoose.Schema.Types.ObjectId, ref: 'ValorMensalidadeModel' }
});

const enderecoSchema = new mongoose.Schema({
    endereco: String,
    cidade: String,
    estado: String,
    tipoEndereco: String,
    cep: String
});

const escolaridadeSchema = new mongoose.Schema({
    descricao: String,
    status: Boolean
});

const jurosMensalidadeSchema = new mongoose.Schema({});

const redeSocialSchema = new mongoose.Schema({
    descricao: String,
    url: String,
    isActive: Boolean
});

const telefoneSchema = new mongoose.Schema({
    ddd: String,
    numero: String,
    tipoTelefone: String
});

const valorMensalidadeSchema = new mongoose.Schema({
    valor: Number
});


const UsuarioModel = mongoose.model('UsuarioModel', usuarioSchema);

module.exports = UsuarioModel;
