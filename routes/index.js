var express = require('express');
var router = express.Router();

var indexController = require('../controller/indexcontroller');

var loggedin = function (req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/login')
  }
};

router.get('/', indexController.getIndex);
router.get('/about', indexController.getAbout);
router.get('/contact', indexController.getContact);
router.get('/cart', indexController.getCart);
router.get('/checkout', indexController.getCheckout);
router.get('/login', indexController.getLogin);
router.get('/signup', indexController.getSignup);
router.get('/logout', indexController.getLogout);

module.exports = router;