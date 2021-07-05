"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _connection = require('../config/connection');

 async function createDoubts(request, response){
    const { name, email, phone, message } = request.body;

    if(name === '' || email === '' || phone === '' || message === ''){
        return response.status(404).json(`Some fields are empty`)
    }

    if(phone.length < 11 || phone.length > 11){
        return response.status(404).json('Inválid Phone number')
    }

    await _connection.connection.call(void 0, 'doubts').insert({
        name,
        email,
        phone,
        message
    }) 

    return response.status(201).json({success: 'Your doubt has been registered'})
} exports.createDoubts = createDoubts;