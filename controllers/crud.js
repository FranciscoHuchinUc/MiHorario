const conexion = require('../database/db');

exports.auth = async (req, res) => {
    const gmail = req.body.gmail;
    const contrasenia = req.body.contrasenia;
    
    conexion.query('SELECT * FROM Usuario WHERE gmail = ? AND contrasenia = ?',[
        gmail,
        contrasenia
    ], async (err, result) => {
        if (result > 0){
            res.send('Login Sucess!');
        } else {
            res.send('Incorrect Username and/or Password!');
        }
    })
}

exports.save = (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const contrasenia = req.body.contrasenia;
    const rol = req.body.rol;

    conexion.query('INSERT INTO Usuario SET ?', {
        nombre:nombre,
        segundo_nombre: 'NAN',
        apellido:apellido,
        apellidom: 'NAN',
        gmail:email,
        contrasenia:contrasenia,
        carrera: rol
    }, (error, results) => {
        if(error) {
            console.log(error);
        } else {
            res.redirect('/register');
        }
    })

}

exports.register = (req, res) => {
    conexion.query('SELECT * FROM Usuario', (error, results) => {
        if(error){
            throw error;
        } else {
            res.render('register', {results:results});
        }
    })
}