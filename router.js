const express = require('express');
const router = express.Router();

const crud = require('./controllers/crud');

// PAGINA INICIAL
router.get("/login", (req, res) => {
    res.render('login');
});

// RUTAS PREDEFINIDAS
router.get("/dashboard", (req, res) => {
    res.render('dashboard');
});

// LLAMAMOS LOS METODOS CRUDS
router.post('/saveUser', crud.saveUser);
router.post('/authUser', crud.authUser);
router.get('/register', crud.registerUser);
router.get('/deleteuser/:id', crud.deleteUser);

router.post('/saveTeacher', crud.saveTeacher);
router.get('/docente', crud.registeredTeachers);
router.get('/deleteteachers/:clave_docente', crud.deleteTeachers);

router.get('/aula', crud.registeredAula);

router.get('/carrera', crud.registeredCarrera);

router.get('/horario', crud.horario);



module.exports = router;