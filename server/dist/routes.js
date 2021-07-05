"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _BudgetController = require('./controllers/BudgetController');
var _DoubtController = require('./controllers/DoubtController');

const routes = _express2.default.Router();

routes.post('/budget', _BudgetController.createBudget);
routes.post('/doubt', _DoubtController.createDoubts)

exports.routes = routes;