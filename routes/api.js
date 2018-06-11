//api.js

var express = require('express');

var router = express.Router();

//Models
var Doc = require('../models/document');

Doc.methods(['get','put','post','delete']);
Doc.register(router,'/documents');

//return router
module.exports = router;