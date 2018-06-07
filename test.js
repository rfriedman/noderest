var Glob = require("glob");
var Client = require('node-rest-client').Client; 
var client = new Client();

var BreakException={};
client.registerMethod("postMethod", "http://localhost:3000/api/documents", "POST");

/*
var documentSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  department:  String,
  document_name: String,
  document_url: String
  
});
*/


function parseDocument(document){
  var doc = {/*fname:  null,*/ lname:  null, department:  null, document_name:  null, document_url:  null};
  var ar = document.split('/');
  var name = ar[3].split(' ');
  //doc.fname = name[0];
  doc.lname = name[1];
  doc.department = ar[2];
  doc.document_name = ar[4];
  doc.document_url = document;
  return doc;
  
  
}

var pattern = "{,./documents/*/*/*.pdf}"
console.log(pattern)

var mg = new Glob(pattern, {mark: true}, function (er, matches) {
// console.log("matches", matches)

var args = {
  data: { fname: "hello" },
  headers: { "Content-Type": "application/json" }
};

try{
  matches.forEach(match=>{
   // console.log(parseDocument(match));

    args.data = parseDocument(match);
    console.log(args.data);
    
  
    client.methods.postMethod(args, function (data, response) {
    // parsed response body as js object
    console.log(data);
    // raw response
    //console.log(response.status);
    
});
if(args.data) throw BreakException;
    
  });
}catch(e){
  if (e !== BreakException) throw e;

}
})
console.log("after")



