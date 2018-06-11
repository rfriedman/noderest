var Client = require('node-rest-client').Client;
client = new Client();
var args = null;


// registering remote methods
client.registerMethod("deleteDocument", "http://localhost:3000/api/documents/${id}", "DELETE");

// registering remote methods
client.registerMethod("getDocuments", "http://localhost:3000/api/documents", "GET");
 
client.methods.getDocuments(function (data, response) {
    // parsed response body as js object
   // console.log(data);

    data.forEach(data=>{
        console.log(data._id);
        args ={
            path: {"id": data._id},
            headers: { "test-header": "client-api" } // request headers
        };

        client.methods.deleteDocument(args, function (data, response) {
            // parsed response body as js object
            //console.log(data);
            // raw response
            console.log(response.statusCode);
        });

    })
 

});
 
 
