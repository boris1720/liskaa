var express = require('express');
var router = express.Router();
var User = require('../db/User');

/* GET home page. */


module.exports = function (passport) {
    router.post('/signup', function (req, res) {
        var usr = {
            username: req.body.username,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            city: req.body.city
        };

        var body = req.body,
            username = body.username,
            password = body.password;

        User.findOne({
            username: usr.username
        }, function (err, doc) {
            if (err) {
                res.status(500).send('error occured')
            } else {
                if (doc) {
                    res.status(500).send('Username already exists')
                } else {
                    var record = new User();
                    record.username = username;
                    record.password = record.hashPassword(password);
                    record.firstname = usr.firstname;
                    record.lastname = usr.lastname;
                    record.email = usr.email;
                    record.phone = usr.phone;
                    record.address = usr.address;
                    record.city = usr.city;

                    record.save(function (err, user) {
                        if (err) {
                            res.status(500).send('db error')
                        } else {
                            res.redirect('/login')
                        }
                    })
                }
            }
        })
    });


    router.post('/login', passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/',
    }), function (req, res) {
        res.send('hey')
    })
    return router;
};