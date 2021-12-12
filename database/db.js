const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Agosto2001',
    database: 'BDHorario'
});

conexion.connect((error) => {
    if(error) {
        console.error('Error de conexion ' + error);
    } else {
        console.log('Conectado a la BD MySQL');
    }
})

module.exports = conexion;