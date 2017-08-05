const express = require('express');
const router = express.Router();

const linksController = require('../controllers/linksController');
const { catchErrors } = require('../handlers/errorHandlers');

router.post('/links', catchErrors(linksController.createLink));

module.exports = router;
