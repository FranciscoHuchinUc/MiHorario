const express = require('express');
const router = express.Router();

const conexion = require('./database/db');
const crud = require('./controllers/crud');

// PAGINA INICIAL
router.get("/", (req, res) => {
    res.render('login');
});

// LLAMAMOS LOS METODOS CRUDS
router.post('/save', crud.save);
router.post('/auth', crud.auth);
router.get('/register', crud.register);

module.exports = router;