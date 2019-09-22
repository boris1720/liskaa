var express = require('express');
var router = express.Router();

module.exports.getIndex = function(req, res) {
    req.db.collection('items').find().sort({"_id": -1}).toArray(function(err, result) {
        if (err) {
            res.render('index', {
                title: 'item List',
                data: ''
            })
        } else {
            console.log(result);
            res.render('index', {
                title: 'items List',
                data: result
            })
        }
    })
};

module.exports.getAbout = function (req, res) {
  res.render('about', {
      title: 'about'
  });
};

module.exports.getContact = function(req, res) {
    res.render('contact', {
        title: 'Express'
    });
};

module.exports.getCart = function(req, res) {
    res.render('cart', {
        title: 'Express'
    });
};

module.exports.getCheckout = function(req, res) {
    res.render('checkout', {
        title: 'Express'
    });
};

module.exports.getLogin = function(req, res) {
    res.render('login');
};

module.exports.getSignup = function(req, res) {
    res.render('signup');

};

module.exports.getLogout = function(req, res) {
    req.logout();
    res.redirect('/');
};

