var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
 ticker: {type: String, required: true},
 name: {type: String, required: true},
 empresa:{type: String, required: true},
 logoEmpresa:{type: String},
 ultimoPreco:{type: Number},
 updated: { type: Date, default: Date.now },
 transacao: {type: Schema.Types.ObjectId, ref: 'Transacao'}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Ativo', schema);