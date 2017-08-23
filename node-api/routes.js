var express = require('express');
var jwt    = require('jsonwebtoken');
// Get the router
var router = express.Router();
var Register     = require('./models/register');
var User = require('./models/user')
var userController = require('./controllers/registersController')

// Middleware for all this routers requests
router.use(function timeLog(req, res, next) {
  console.log('Request Received: ', dateDisplayed(Date.now()));
  next();
});
// Welcome message for a GET at http://localhost:8080/restapi
router.route('/').get(function(req, res) {
    res.json({ message: 'the API is in /api :)' });   
});


router.route('/api/registers')
    .get(userController.find);

router.route('/api/registers/:page')
.get(function(req, res) {
    Register.find(function(err, registers) {
        if (err)
            res.send(err);
        res.json(registers);
    }).limit(15).skip(Number(req.params.page) * 15);
});

router.route('/users').get(function(req,res){
    User.find().exec(function(err,users){
        if(err) throw err;
        res.json(users);
    });
});


module.exports = router;

function dateDisplayed(timestamp) {
    var date = new Date(timestamp);
    return (date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}
