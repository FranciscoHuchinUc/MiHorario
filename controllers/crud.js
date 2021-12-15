const conexion = require('../database/db');

exports.auth = (req, res) => {
    const gmail = req.body.gmail;
    const contrasenia = req.body.contrasenia;
    if(gmail && contrasenia) {
        conexion.query('SELECT * FROM `Usuario` WHERE `gmail` = ? AND `contrasenia` = ?', [gmail, contrasenia], (err, result, fields) => {
            if(err) throw err

            if(result.length <= 0) {
                res.send('Error');
            } else {
                res.send('Login');
            }
        });
    }
}

exports.save = (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const contrasenia = req.body.contrasenia;
    const carrera = req.body.carrera;

    conexion.query('INSERT INTO Usuario SET ?', {
        nombre:nombre,
        segundo_nombre: 'NAN',
        apellido:apellido,
        apellidom: 'NAN',
        gmail:email,
        contrasenia:contrasenia,
        carrera: carrera
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