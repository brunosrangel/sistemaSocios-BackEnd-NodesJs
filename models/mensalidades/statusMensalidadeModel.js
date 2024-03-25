const mongoose = require('mongoose');

const statusMensalidadeSchema = new mongoose.Schema({
    descricaoStatus: String
});

const historicoMensalidadesSchema = new mongoose.Schema({
    idMensalidade: String,
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'UsuarioModel' },
    mesReferencia: Number,
    anoReferencia: Number,
    statusMensalidade: { type: mongoose.Schema.Types.ObjectId, ref: 'StatusMensalidadeModel' }
});

// Getters e setters para idMensalidade
historicoMensalidadesSchema.path('idMensalidade').get(function(value) {
    return this.idMensalidade;
}).set(function(value) {
    this.idMensalidade = value;
});

// Getters e setters para usuario
historicoMensalidadesSchema.path('usuario').get(function(value) {
    return this.usuario;
}).set(function(value) {
    this.usuario = value;
});

// Getters e setters para mesReferencia
historicoMensalidadesSchema.path('mesReferencia').get(function(value) {
    return this.mesReferencia;
}).set(function(value) {
    this.mesReferencia = value;
});

// Getters e setters para anoReferencia
historicoMensalidadesSchema.path('anoReferencia').get(function(value) {
    return this.anoReferencia;
}).set(function(value) {
    this.anoReferencia = value;
});

// Getters e setters para statusMensalidade
historicoMensalidadesSchema.path('statusMensalidade').get(function(value) {
    return this.statusMensalidade;
}).set(function(value) {
    this.statusMensalidade = value;
});

// Definição dos modelos
const StatusMensalidadeModel = mongoose.model('StatusMensalidadeModel', statusMensalidadeSchema);
const HistoricoMensalidadesModel = mongoose.model('HistoricoMensalidadesModel', historicoMensalidadesSchema);

module.exports = {
    StatusMensalidadeModel,
    HistoricoMensalidadesModel
};
