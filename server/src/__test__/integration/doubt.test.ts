import request from 'supertest';
// importar o app que será usado somente nos testes, sem executar o 'app' do listen 
import { app } from '../../app';

describe('Doubt Tests', () => {
    it('Should return 404 if some field are undefined', async () => {     
        const response = await request(app).post('/doubt').send({
            name: "",
            email: "",
            phone: "",
            message: ""
        })

        expect(response.status).toBe(404)
    })

    it('Should return error if phone number less than 11 digits', async () => {
        const response = await request(app).post('/doubt').send({
            name: "username",
            email: "username@outlook.com",
            phone: "1199999",
            message: "message"
        })

        expect(response.status).toBe(404)
    })

    it('Should return error if phone number greather than 11 digits', async () => {
        const response = await request(app).post('/doubt').send({
            name: "username",
            email: "username@outlook.com",
            phone: "11999999999999",
            message: "message"
        })

        expect(response.status).toBe(404)
    })

    it('Should return success', async () => {
        const response = await request(app).post('/doubt').send({
            name: "username",
            email: "username@outlook.com",
            phone: "11888888888",
            message: "message"
        })

        expect(response.status).toBe(201)
    })

    it('Should return the success message correctly', async () => {
        const response = await request(app).post('/doubt').send({
            name: "username",
            email: "username@outlook.com",
            phone: "11888888888",
            message: "message"
        })

        expect(response.text).toStrictEqual(JSON.stringify({
            success: 'Your doubt has been registered'
        }))
    })
})