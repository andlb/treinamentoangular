var mongoose = require('mongoose');
var config = require('./config');
var ativo = require('./models/ativo');

//console.log('entrou ak');
mongoose.connect(config.getDbConnectionString());
console.log('teste');

var startAtivos = [{
        ticker: 'PETR4',
        name: 'PETROBRAS',
        empresa:'PETROBRAS',    
        ultimoPreco:15 
    },
    {
        ticker: 'SAPR4',
        name: 'COMPANHIA DE AGUA',
        empresa:'COMPANHIA DE AGUA',    
        ultimoPreco:18 
    }
];

ativo.create(startAtivos, function(err,result){
    console.log('entrou ak');
    if (err) {
        console.log(err);
    }else{
        console.log(result);
    }
})