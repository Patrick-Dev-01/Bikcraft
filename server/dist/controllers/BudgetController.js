"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _connection = require('../config/connection');

 async function createBudget(request, response){
    const { name, email, phone, specifications } = request.body;

    if(name === '' || email === '' || phone === '' || specifications === ''){
        return response.status(404).json(`Some fields are empty`)
    }

    if(phone.length < 11 || phone.length > 11){
        return response.status(404).json('Inválid Phone number')
    }

    await _connection.connection.call(void 0, 'budgets').insert({
        name,
        email,
        phone,
        specifications
    }) 

    return response.status(201).json({success: 'Your budget has been registered'})
} exports.createBudget = createBudget;