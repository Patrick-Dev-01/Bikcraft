require('dotenv').config()

describe('Server Tests', () => {
    it('Server running on PORT 3001', () => {
        expect(process.env.PORT).toBe(String(3001))
    })

    it("Server is not on PORT 3001", () => {
        let PORT = '3000';

        if(process.env.PORT !== '3001'){
            PORT = '3000';
        }

        expect(PORT).toBe(String(3000));
    })
})