"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('dotenv').config();
var _knex = require('knex'); var _knex2 = _interopRequireDefault(_knex);

const connection = _knex2.default.call(void 0, {
    client: 'postgres',
    connection: {
        host: `${process.env.DB_HOST}`,  
        user: `${process.env.DB_USERNAME}`,  
        password: `${process.env.DB_PASSWORD}`,  
        database: `${process.env.DB_NAME}`,
    }
})

exports.connection = connection;