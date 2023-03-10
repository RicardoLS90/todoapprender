const {Sequelize} = require('sequelize');
require('dotenv').config()

// crear una instancia con parametros de configuracion de nuestra base de datos
// un objeto de configuraicon ---> credenciales de base de datos
const db = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  dialect: "postgres",
  dialectOptions: {ssl: {
    require:true, rejectUnauthorized: false}}
});

module.exports= db;