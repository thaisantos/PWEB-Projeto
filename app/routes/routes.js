const dbConnection = require('../../config/dbConnection');
const {check, validationResult} = require("express-validator");
const connection = dbConnection();
const controllerONG = require('../controllers/ONGS');

module.exports = {
    rotaHome: function(app){
        app.get('/', function(req, res){
            res.render('home');
        });
    },
    rotaONGs: function(app){
        app.get('/ONGs', function(req, res){
            controllerONG.ONGsListar(app, req, res);
        });
    },
    rotaInsereONG: function(app){
        app.get('/nova-ONG', function(req, res){
            res.render('novaONG', {ong: {}, erros:{} });
        })
    },
    rotaONGSalvar: function(app){
        app.post('/ONG/salvar', [
            check('nome').isLength({min: 1}).withMessage('Nome da ONG deve ser informado'),
            check('endereco').isLength({min: 1}).withMessage('Endereço da ONG deve ser informado'),
            check('telefone').isLength({min: 1}).withMessage('Telefone da ONG deve ser informado'),
            check('estado').isLength({min: 1}).withMessage('Estado da ONG deve ser informado'),
            check('cidade').isLength({min: 1}).withMessage('Cidade da ONG deve ser informada')
        ], function(req, res){
            const errors = validationResult(req);
            controllerONG.ONGsSalvar(app, req, res, errors);
        });
    }
}