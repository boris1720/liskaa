var express = require('express');
var router = express.Router();

var itemController = require('../controller/itemcontroller');
var crudController = require('../controller/crudController');

/* GET home page. */
router.get('/', crudController.getItems);
router.get('/:id', crudController.getItemsingle);
router.get('/category/:cat', crudController.getCategory);


module.exports = router;