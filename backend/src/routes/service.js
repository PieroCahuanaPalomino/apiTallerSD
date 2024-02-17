const express = require('express');
const controller = require('../controllers/servicecontroller');
const router = express.Router();

//Create a service
router.post('/services',controller.post);

//Get all services
router.get('/services',controller.get);

//Get a service by id
router.get('/services/:id',controller.get_id);

//update a service by id
router.put('/services/:id',controller.update);

//Delete a service by id
router.delete('/services/:id',controller.delete);

module.exports = router;
