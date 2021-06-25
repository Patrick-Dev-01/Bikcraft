import { Request, Response } from 'express';
import { connection } from '../config/connection';

export async function createDoubts(request: Request, response: Response){
    const { name, email, phone, message } = request.body;

    if(name === '' || email === '' || phone === '' || message === ''){
        return response.status(404).json(`Some fields are empty`)
    }

    if(phone.length < 11 || phone.length > 11){
        return response.status(404).json('Inválid Phone number')
    }

    await connection('doubts').insert({
        name,
        email,
        phone,
        message
    }) 

    return response.status(201).json({success: 'Your doubt has been registered'})
}