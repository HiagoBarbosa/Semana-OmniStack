const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//**rota / recurso seria o /User */

/** METODOS HTTP:
 *  GET:Buscar uma informação do beck-end
 *  POST: Cria uma informação do beck-end
 *  PUT: Altera uma informação do beck-end
 *  DELETE: Deletar uma informação no beck-end
 */

/**
 * Tipos de parametros:
 * Query Params: Parametros nomeados enviados na rota aops "?" (Filtros, paginacao)
 * Route Params: parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
 * SQL: MySQL, SQLite, PostgeSQL, Oracle, Microsoft SQL Server
 *NoSQL:MongoDB, CouchDB,
 */

 /**
  * Driver: SELECT* FROM users
  * Query Builder: table('users').select('*').where()
  */

/**app.get('/users/:id', (request,response)=>{
    /**retorna nome const params = request.query;
   retorna o id const params = request.params;

    console.log(params);    

    return response.json({
        evento:'Semena',
        aluno: 'Hiago'
    })
})*/


app.listen(3030);
