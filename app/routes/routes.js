const dbConnection = require('../../config/dbConnection');
let connection = dbConnection();

module.exports = {
    rotaHome: function(app){
        app.get('/', function(req, res){
            res.render('home');
        });
    },
    rotaNovaONG: function(app){
        app.get('/nova-ONG', function(req, res){
            res.render('novaONG');
        });
    },
    rotaONGsCadastradas: function(app){
        app.get('/ONGs-cadastradas', function(req, res){
            const controllerNovaONG = require('../controllers/NovaONG');
            controllerNovaONG.ONGsListar(app, req, res);
        });
    }
}