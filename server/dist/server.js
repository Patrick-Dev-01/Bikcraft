"use strict";require('dotenv').config();
// Separar o servidor das configurações do app

var _app = require('./app');

_app.app.listen(process.env.PORT || '3001')

