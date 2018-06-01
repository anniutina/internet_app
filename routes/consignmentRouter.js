// consignmentRouter.js

var express = require('express');
var app = express();
var consignmentRouter = express.Router();
var Consignment = require('../models/Consignment');

consignmentRouter.route('/').get((req, res) => {
  Consignment.find((err, consignments) => {
    if (err)
      console.log(err);
    else
      res.render('index', {consignments: consignments});
  });
});

module.exports = consignmentRouter;
