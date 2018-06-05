// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var documentSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    document_name: String,
    document_url: String
    
});

// Return model
module.exports = restful.model('Documents', documentSchema);