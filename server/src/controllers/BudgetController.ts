import { Request, Response } from 'express';
import { connection } from '../config/connection';

export async function createBudget(request: Request, response: Response){
    const { name, email, phone, specifications } = request.body;

    if(name === '' || email === '' || phone === '' || specifications === ''){
        return response.status(404).json(`Some fields are empty`)
    }

    if(phone.length < 11 || phone.length > 11){
        return response.status(404).json('Inválid Phone number')
    }

    await connection('budgets').insert({
        name,
        email,
        phone,
        specifications
    }) 

    return response.status(201).json({success: 'Your budget has been registered'})
}