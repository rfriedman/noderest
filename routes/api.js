//api.js

var express = require('express');

var router = express.Router();

//Models
var Product = require('../models/product');
var Doc = require('../models/document');

Product.methods(['get','put','post','delete']);
Product.register(router,'/products');

Doc.methods(['get','put','post','delete']);
Doc.register(router,'/documents');

//return router
module.exports = router;