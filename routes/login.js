let express = require('express');
let router = express.Router();
var Database = require('../database');
var isNull = require('../script').isNull;
const config = require('../config');

router.get('/', function(req, res, next) {
  res.render('login.ejs');
});


module.exports = router;
