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
    const primer_nombre = req.body.primer_nombre;
    const segundo_nombre = req.body.segundo_nombre;
    const apellidop = req.body.apellidop;
    const apellidom = req.body.apellidom;
    const gmail = req.body.gmail;
    const contrasenia = req.body.contrasenia;
    const coordinacion = req.body.coordinacion;
    const rol = req.body.rol;

    conexion.query('INSERT INTO Usuario SET ?', {
        primer_nombre:primer_nombre,
        segundo_nombre:segundo_nombre,
        apellidop:apellidop,
        apellidom:apellidom,
        gmail:gmail,
        contrasenia:contrasenia,
        coordinacion:coordinacion,
        rol:rol
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