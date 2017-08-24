var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://docker:docker@db:5432/docker'; 
var db = pgp(connectionString);


/////////////////////
// Query Functions
/////////////////////

function getRegisters(req, res, next) {
  db.any('SELECT * FROM picpay.registers limit 15')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all starships'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


module.exports = {
    getRegisters: getRegisters,
};
