var express = require('express');
var router = express.Router();

var profileController = require('../controller/profilecontroller');

/* GET home page. */
router.get('/', profileController.profile_list);

module.exports = router;