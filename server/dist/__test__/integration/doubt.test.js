"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _supertest = require('supertest'); var _supertest2 = _interopRequireDefault(_supertest);
// importar o app que será usado somente nos testes, sem executar o 'app' do listen 
var _app = require('../../app');

describe('Doubt Tests', () => {
    it('Should return true if phone has only numbers', () => {
        const phone = '1199999999a';

        expect(phone).not.toMatch(/^[0-9]*$/);
    })
    
    it('Should return 404 if some field are undefined', async () => {     
        const response = await _supertest2.default.call(void 0, _app.app).post('/doubt').send({
            name: "",
            email: "",
            phone: "",
            message: ""
        })

        expect(response.status).toBe(404)
    })

    it('Should return error if phone number less than 11 digits', async () => {
        const response = await _supertest2.default.call(void 0, _app.app).post('/doubt').send({
            name: "username",
            email: "username@outlook.com",
            phone: "1199999",
            message: "message"
        })

        expect(response.status).toBe(404)
    })

    it('Should return error if phone number greather than 11 digits', async () => {
        const response = await _supertest2.default.call(void 0, _app.app).post('/doubt').send({
            name: "username",
            email: "username@outlook.com",
            phone: "11999999999999",
            message: "message"
        })

        expect(response.status).toBe(404)
    })

    it('Should return success', async () => {
        const response = await _supertest2.default.call(void 0, _app.app).post('/doubt').send({
            name: "username",
            email: "username@outlook.com",
            phone: "11888888888",
            message: "message"
        })

        expect(response.status).toBe(201)
    })

    it('Should return the success message correctly', async () => {
        const response = await _supertest2.default.call(void 0, _app.app).post('/doubt').send({
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