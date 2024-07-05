//comst router = require('express').Router();
const { Router } = require('express'); // funcion router 
const router = Router();// objeto de express

const user = require('../controllers/users.controllers');


//Ruta inicial
router.get('/', user.getUsers); 

//Ruta para registro de nuevo usuario 
router.post('/registro', user.addUser);

//Ruta para ingreso al sistema
router.post('/ingreso', user.loginUser);

//Ruta para las tareas que pueden revisar los invitados o usuarios sin logearse
router.get('/tareas', user.getTasks);

module.exports = router;

