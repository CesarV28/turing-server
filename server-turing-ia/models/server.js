
import express from 'express';
import cors from 'cors';

import blog from '../routes/blog.js';

import { sequelize } from '../database/config.js'

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/user';
        this.blogPath = '/api/blog';

        // conectar a la base de datos
        this.connectDB();

        // Migdlewares
        this.middlewares();

        // Rutas de la aplicacion
        this.routes();
    }

    // ================== Data Base ==================
    async connectDB() {
        try {
     
            await sequelize.sync({ force: false });
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    // ================== middlewares ==================
    middlewares() {
        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio publico
        this.app.use( express.static( 'public') );

    }
    // ================== routes ==================
    routes() {
        
        this.app.use( this.blogPath, blog );

    }
    // ================== listen ==================
    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        } );
    }
}


export default Server;
