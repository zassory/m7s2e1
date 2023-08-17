const { Pool } = require('pg');

const pool = new Pool({
    user: 'zasory',
    host: 'localhost',
    database: 'practica_db',
    password: 'Hakxf2n5$',
    port: 5432,
});

const buscarTodos = async() => {
    try{

        const client = await pool.connect();

    }catch(error){
        console.error(error.stack);
    } finally{
        console.log('Busqueda finalizada');
    }
}

buscarTodos();