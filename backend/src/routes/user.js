const express = require('express');
const userSchema = require('../models/user');
const controller = require('../controllers/usercontroller');
const router = express.Router();

//Create user
router.post('/users', controller.post);

//Get all users

router.get('/users',controller.get);


//Get a user by id
router.get('/users/:id', controller.get_id);


//Update a use by id
router.put('/users/:id', controller.update);


//Delete a user by id
router.delete('/users/:id',controller.delete);


module.exports = router;
