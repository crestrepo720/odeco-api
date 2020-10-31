const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    razon_social: String,
    direccion: String,
    nit: String,
    email: {
        type: String,
        lowercase: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('clientes', ClientSchema);