const express = require('express');
const router = express.Router();

const conexion = require('./database/db');
const crud = require('./controllers/crud');

// PAGINA INICIAL
router.get("/", (req, res) => {
    res.render('login');
});

// LLAMAMOS LOS METODOS CRUDS
router.post('/save', crud.saveUser);
router.post('/auth', crud.authUser);
router.get('/register', crud.registerUser);
router.get('/deleteuser/:id', crud.deleteUser);

module.exports = router;