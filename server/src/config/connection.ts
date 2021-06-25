require('dotenv').config();
import knex from 'knex';

const connection = knex({
    client: 'postgres',
    connection: {
        host: `${process.env.DB_HOST}`,  
        user: `${process.env.DB_USERNAME}`,  
        password: `${process.env.DB_PASSWORD}`,  
        database: `${process.env.DB_NAME}`,
    }
})

export { connection }