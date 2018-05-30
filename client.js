var Client = require('node-rest-client').Client;

const si = require('systeminformation');
 
setInterval(function() {
    si.getStaticData().then(data => {
        console.log(data);
    })
}, 3000)