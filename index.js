const { Pool } = require('pg');

const pool = new Pool({
    user: 'zasory',
    host: 'localhost',
    database: 'practica_db',
    password: 'Hakxf2n5$',
    port: 5432,
});

const query = {
    rowMode: 'array',
    text: 'SELECT * FROM users WHERE age > 45',
}

const buscarTodos = async() => {
    try{

        const client = await pool.connect();
        // const result = await client.query({
        //     rowMode: 'array',
        //     text: 'SELECT * FROM users WHERE age > 45',
        // });
        const result = await client.query(query);

        if(result.rows.length){
            console.log('Numero de Registros encontrados: ', result.rowCount);
            console.log('Consulta realizada con: ', result.command);

            //Listar los datos como filas
            for(let row of result.rows){
                console.log(row);
            }
            //Resultados de las filas en una tabla
            console.table(result.rows);

            //Resultados de los nombres de columnas
            for(let field of result.fields){
                console.log(field.name);
            }

            return result;
        }        

        console.log('No se encontraron registros');

    }catch(error){
        if(error.code == '42601'){
            console.log("\n ERROR! \n Error de Sintaxis\n");
        }
        if(error.code == '25P01'){
            console.log("\n ERROR! \n Password inválido\n");
        }else{
            console.error(error.stack);
            console.log(error.code);
        }        
    } finally{
        await pool.end();
    }
}

buscarTodos();