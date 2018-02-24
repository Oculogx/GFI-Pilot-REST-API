var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/rf_bulk_pick_report';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllItems: getAllPuppies,
  getSingleItem: getSinglePuppy,
  createItem: createPuppy,
  updateItem: updatePuppy,
  removeItem: removePuppy
};