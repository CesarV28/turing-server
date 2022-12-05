import { Sequelize } from "sequelize";
import { config } from 'dotenv';
config()


const sequelize = new Sequelize(
    process.env.MYSQL_DB, 
    process.env.MYSQL_USER, 
    process.env.MYSQL_PASSWORD, 
    {
        host: process.env.HOST,
        dialect:  'mysql' 
    });
        

export {
    sequelize
};


