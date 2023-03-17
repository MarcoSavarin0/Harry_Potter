var express = require('express');
var router = express.Router();
let controlador = require('../controllers/indexController')




router.get('/' ,controlador.hp);
router.get('/characters/:id', controlador.personajeHP)
router.get('/house/:name', controlador.casa)

module.exports = router;
