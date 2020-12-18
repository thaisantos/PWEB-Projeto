const dbConnection = require('../../config/dbConnection');

module.exports.conteudosListar = function(app, req, res){
    const connection = dbConnection();
    const ONGsModel = require('../models/ONGsModels');
    //let sql = 'select * from conteudoprogramatico';
    ONGsModel.getOngs(connection, function(err, results){
        //console.log(results);
        if(!err){
            res.render('ONGsCadastradas', {conteudos: results});
        }else{
            let pagina = "<h1>Problemas de conexão com o banco de dados</h1>";
            //pagina = pagina + "<h2>"+err+"</h2>";
            console.log(err);
            res.send(pagina);
        }
       
    });
}