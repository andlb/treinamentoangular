var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    fisrtName: {type:String,required:true},
    lastName:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true}
});

schema.plugin(mongoooseUniqueValidator);

module.exports = mongoose.model('User',schema);