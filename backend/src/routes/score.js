const express = require('express');
const controller = require('../controllers/scorecontroller');
const router = express.Router();

//Create a score
router.post('/scores',controller.post);

//Get all scores
router.get('/scores',controller.get);

//Get a score by id
router.get('/scores/:id',controller.get_id);

//update a score by id
router.put('/scores/:id',controller.update);

//Delete a score by id
router.delete('/scores/:id',controller.delete);


module.exports = router;
