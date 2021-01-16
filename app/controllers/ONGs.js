const dbConnection = require('../../config/dbConnection');
const ONGsModel = require('../models/ONGsModels');


module.exports.ONGsListar = function(app, req, res){
    const connection = dbConnection();
    ONGsModel.getONGs(connection, function(err, results){
        if(!err){
            res.render('ONGs', {ongs: results});
        }else{
            let pagina = "<h1>Problemas de conexão com o banco de dados</h1>";
            console.log(err);
            res.send(pagina);
        }
       
    });
}
module.exports.ONGsSalvar = function(app, req, res, errors){
    let ong = req.body;
    if(!errors.isEmpty()){
        let erros = errors.array();
        res.render('novaONG', {erros: erros, ong: ong});
        return;
    }
    const connection = dbConnection();
    ONGsModel.setONGs(ong, connection, function(err, results){
        res.redirect('/ONGs');
    });
}