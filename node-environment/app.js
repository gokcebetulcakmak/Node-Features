const mysql = require('mysql');
const host= process.env.HOST;
const user= process.env.USER;
const pass= process.env.PASS;

const connection = mysql.createConnection(
    {
        host: host,
        user: user,
        password: pass,
      
    }
);