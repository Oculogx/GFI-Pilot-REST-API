var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/rf_bulk_pick_report';
var db = pgp(connectionString);

function getAllItems(req, res, next) {
  db.any('select * from unit_of_work')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL items'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllItems: getAllItems,
  getSingleItem: getSingleItem,
  createItem: createItem,
  updateItem: updateItem,
  removeItem: removeItem
};
