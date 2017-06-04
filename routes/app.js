var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

/*
router.get('/testemongo', function (req, res, next) {
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
    res.render('index');
});
*/
module.exports = router;
