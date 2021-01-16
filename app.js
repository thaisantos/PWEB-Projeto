const routes = require('./app/routes/routes');
let app = require('./config/server');
let express = require('express');
let path = require('path');
const { route } = require('./config/server');


app.use(express.static(path.join(__dirname, "views")));

routes.rotaHome(app);
routes.rotaInsereONG(app);
routes.rotaONGSalvar(app);
routes.rotaONGs
(app);

