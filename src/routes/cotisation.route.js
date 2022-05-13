const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const cotisationController = require('../controllers/cotisation.controller');

// Cotisation List
router.get('/', cotisationController.getCotisationList);

//create new cotisation
router.post('/', cotisationController.createNewCotisation);

//get cotisation by id
router.get('/:id',cotisationController.getCotisationByID);

module.exports = router;