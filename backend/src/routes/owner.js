const express = require('express');
const controller = require('../controllers/ownercontroller');
const router = express.Router();

//Create an owner
router.post('/owners',controller.post);

//Get all owners
router.get('/owners',controller.get);

//Get an owner by id
router.get('/owners/:id',controller.get_id);

//update an owner by id
//No se modifica el arreglo de "dogs" el cual almacena un arreglo de los perros que pertenecen a cada dueño
router.put('/owners/:id',controller.update);


//Delete an owner by id
router.delete('/owners/:id',controller.delete);

//LOGIN Y REGISTRO

router.post('/registro',controller.registro);

router.post('/login',controller.login);


module.exports = router;
