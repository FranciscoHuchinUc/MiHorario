const conexion = require('../database/db');

exports.authUser = (req, res) => {
    const gmail = req.body.gmail;
    const contrasenia = req.body.contrasenia;
    if(gmail && contrasenia) {
        conexion.query('SELECT * FROM `Usuario` WHERE `gmail` = ? AND `contrasenia` = ?', [gmail, contrasenia], (err, result, fields) => {
            if(err) throw err;

            if(result.length <= 0) {
                res.render('login', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "E-Mail y/o Contraseña Incorrectas",
                    alertIcon:'error',
                    ruta: 'login'    
                });
            } else {             
				res.redirect('/dashboard');
            }
        });
    }
}

exports.saveUser = (req, res) => {
    const primer_nombre = req.body.primer_nombre;
    const segundo_nombre = req.body.segundo_nombre;
    const apellidop = req.body.apellidop;
    const apellidom = req.body.apellidom;
    const gmail = req.body.gmail;
    const contrasenia = req.body.contrasenia;
    const rol = req.body.rol;
    const coordinacion = req.body.coordinacion;

    conexion.query('INSERT INTO Usuario SET ?', {
        primer_nombre:primer_nombre,
        segundo_nombre:segundo_nombre,
        apellidop:apellidop,
        apellidom:apellidom,
        gmail:gmail,
        contrasenia:contrasenia,
        rol:rol,
        coordinacion:coordinacion
    }, (error, results) => {
        if(error) {
            console.log(error);
        } else {
            res.redirect('/register');
        }
    })

}

exports.registerUser = (req, res) => {
    conexion.query('SELECT * FROM Usuario', (error, results) => {
        if(error){
            throw error;
        } else {
            res.render('register', {results:results});
        }
    })
}

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM Usuario WHERE id_usuario = ?' , [id], (err, results) => {
        if(err) {
            throw err;
        } else {
            res.redirect('/register');
        }
    })
}

// CRUD DOCENTES

exports.saveTeacher = (req, res) => {
    const clave_docente = req.body.clave_docente;
    const nombre = req.body.nombre;
    const segundo_nombre = req.body.segundo_nombre;
    const apellidop = req.body.apellidop;
    const apellidom = req.body.apellidom;
    const gmail = req.body.gmail;
    const contrasenia = req.body.contrasenia;
    const telefono = req.body.telefono;
    const dias_trabajo = req.body.dias_trabajo;
    const horas = req.body.horas;

    conexion.query('INSERT INTO docentes SET ?', {
        clave_docente:clave_docente,
        nombre:nombre,
        segundo_nombre:segundo_nombre,
        apellidop:apellidop,
        apellidom:apellidom,
        dias_trabajo:dias_trabajo,
        horas:horas,
        gmail:gmail,
        contrasenia:contrasenia,
        telefono:telefono
    }, (error, results) => {
        if(error) {
            console.log(error);
        } else {
            res.redirect('/docente');
        }
    })

}

exports.registeredTeachers = (req, res) => {
    conexion.query('SELECT * FROM docentes', (error, results) => {
        if(error){
            throw error;
        } else {
            res.render('docente', {results:results});
        }
    })
}

exports.deleteTeachers = (req, res) => {
    const clave_docente = req.params.clave_docente;
    conexion.query('DELETE FROM docentes WHERE clave_docente = ?' , [clave_docente], (err, results) => {
        if(err) {
            throw err;
        } else {
            res.redirect('/docente');
        }
    })
}

// CRUD AULA

exports.registeredAula = (req, res) => {
    conexion.query('SELECT * FROM aula', (error, results) => {
        conexion.query('SELECT * FROM edificio', (err, edif) => {
            if(error){
                throw error;
            } else {
                console.log(results);
                console.log(edif);
                res.render('aula', {results:results, edif:edif});
            }
        })
    })
}

// CRUD CARRERA

exports.registeredCarrera = (req, res) => {
    conexion.query('SELECT * FROM carrera', (error, results) => {
        if(error){
            throw error;
        } else {
            res.render('carrera', {results:results});
        }
    })
}

// CRUD HORARIO

exports.horario = (req, res) => {
    conexion.query('SELECT * FROM materia', (error, materia) => {
        conexion.query('SELECT * FROM aula', (error, aula) => {
            conexion.query('SELECT * FROM docentes', (error, docente) => {
                if(error) {
                    throw error;
                } else {
                    res.render('horario', {materia:materia, aula:aula, docente:docente});
                }
            })
        })
    })
}