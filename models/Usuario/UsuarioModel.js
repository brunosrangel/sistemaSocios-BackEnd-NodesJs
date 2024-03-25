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

// Getters e setters para idUsuario
usuarioSchema.path('idUsuario').get(function(value) {
    return this.idUsuario;
}).set(function(value) {
    this.idUsuario = value;
});

// Getters e setters para nomeUsuario
usuarioSchema.path('nomeUsuario').get(function(value) {
    return this.nomeUsuario;
}).set(function(value) {
    this.nomeUsuario = value;
});

// Getters e setters para email
usuarioSchema.path('email').get(function(value) {
    return this.email;
}).set(function(value) {
    this.email = value;
});

// Getters e setters para endereco
usuarioSchema.path('endereco').get(function(value) {
    return this.endereco;
}).set(function(value) {
    this.endereco = value;
});

// Getters e setters para telefone
usuarioSchema.path('telefone').get(function(value) {
    return this.telefone;
}).set(function(value) {
    this.telefone = value;
});

// Getters e setters para profissao
usuarioSchema.path('profissao').get(function(value) {
    return this.profissao;
}).set(function(value) {
    this.profissao = value;
});

// Getters e setters para escolaridade
usuarioSchema.path('escolaridade').get(function(value) {
    return this.escolaridade;
}).set(function(value) {
    this.escolaridade = value;
});

// Getters e setters para redeSocial
usuarioSchema.path('redeSocial').get(function(value) {
    return this.redeSocial;
}).set(function(value) {
    this.redeSocial = value;
});

// Getters e setters para dataEntrada
usuarioSchema.path('dataEntrada').get(function(value) {
    return this.dataEntrada;
}).set(function(value) {
    this.dataEntrada = value;
});

// Getters e setters para dataIniciacao
usuarioSchema.path('dataIniciacao').get(function(value) {
    return this.dataIniciacao;
}).set(function(value) {
    this.dataIniciacao = value;
});

// Getters e setters para dataUltimaObrigacao
usuarioSchema.path('dataUltimaObrigacao').get(function(value) {
    return this.dataUltimaObrigacao;
}).set(function(value) {
    this.dataUltimaObrigacao = value;
});

// Getters e setters para aplicaJurosMensalidade
usuarioSchema.path('aplicaJurosMensalidade').get(function(value) {
    return this.aplicaJurosMensalidade;
}).set(function(value) {
    this.aplicaJurosMensalidade = value;
});

// Getters e setters para valorMensalidade
usuarioSchema.path('valorMensalidade').get(function(value) {
    return this.valorMensalidade;
}).set(function(value) {
    this.valorMensalidade = value;
});

module.exports = mongoose.model('Usuario', usuarioSchema);
