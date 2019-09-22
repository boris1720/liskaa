var express = require('express');
var router = express.Router();

var itemController = require('../../controller/itemcontroller');

/* GET home page. */
router.get('/', itemController.getItemlist);
router.get('/:id', itemController.getItemsingle);


module.exports = router;