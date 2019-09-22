var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectId;


module.exports.getItemlist = function(req, res) {
    req.db.collection('items').find().sort({"_id": -1}).toArray(function(err, result) {
        var user = req.user;
        if (user.username === "boris") {
            res.render('backend/items', {
                title: 'items List',
                data: result
            })
        } else {
            console.log(result);
            res.render('itemlist', {

                title: 'items List',
                data: result
            })
        }
    })
};

module.exports.getItemsingle = function(req, res) {
    var o_id = new ObjectId(req.params.id);
    console.log(o_id);
    req.db.collection('items').find({"_id": o_id}).toArray(function(err, result) {
        if (err) {
            res.render('itemsingle', {
                title: 'item List',
                data: ''
            })
        } else {
            res.render('itemsingle', {
                title: 'items List',
                data: result
            })
        }
    })
};


