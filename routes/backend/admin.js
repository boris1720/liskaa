var express = require('express');
var router = express.Router();

var adminController = require('../../controller/admincontroller');
var crudController = require('../../controller/crudController');

/* GET home page. */

router.get('/', adminController.getAdmin);
router.get('/create', crudController.getCreateItem);
router.post('/create', crudController.addItem);
router.get('/update', crudController.getItems);
router.get('/update/:id', crudController.getItemsingle);
router.post('/delete/:id', crudController.deleteItem);


router.get('/orders');
router.get('/orders/:id');

module.exports = router;