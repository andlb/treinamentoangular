var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    quantidade:{type:Number},
    valor:{type:Number},
    despesa:{type:Number},
    data:{type:Date},    
    ativo: {type: Schema.Types.ObjectId, ref: 'Ativo'}
});

module.exports = mongoose.model('Transacao', schema);