const express = require('express');

const router = express.Router();
const controller = require('../controllers/petcontroller');

//Create pet
router.post('/pets', controller.post);

//Get all pets

router.get('/pets',controller.get);


//Get a pet by id
router.get('/pets/:id', controller.get_id);


//Update a pet by id
router.put('/pets/:id', controller.update);


//Delete a pet by id
router.delete('/pets/:id',controller.delete);


module.exports = router;