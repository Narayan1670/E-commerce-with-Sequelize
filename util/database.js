// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'Narayan@1670'
// });

// module.exports = pool.promise();

const Sequelize = require('sequelize').Sequelize;
// const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('node-complete', 'root','Narayan@1670', { 
    dialect: 'mysql',
    host: 'localhost'
    });

module.exports = sequelize;
