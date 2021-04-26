var express = require('express');
var router = express.Router();

var custController = require('../controllers/customerController');

// POST
router.post('/customer', custController.addCust);

// GET
router.get('/customer', custController.showCust);

// PUT
router.put('/customer', custController.changeCust);

// DELETE
router.delete('/customer', custController.deleteCust);

module.exports = router;