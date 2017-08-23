'use strict';

var mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcrypt'),
    Register = require('../models/register');
var limit =15;
exports.find = function (req,res) {
        var query={};
        console.log(req.query.find);
        query["name"]=new RegExp(req.query.find,'i');
        query["username"] = query["name"];
        console.log(query);
        Register.find({$or:[query]}).sort({priority: -1}).limit(limit).skip((Number(req.query.page)-1)*limit).exec(function (err,registers) {
            if(err)
                res.send(err);
            res.json(registers);
        })
    };
