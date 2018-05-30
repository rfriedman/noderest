var SambaClient = require('samba-client');

var client = new SambaClient({
  address: '//cc-vmfs1/share/IT/IT_GROUP/Custom Cable Employees', // required
  username: 'dsadmin', // not required, defaults to guest
  password: '2Work4ccss', // not required
  domain: 'us.customcable.net' // not required
});

// send a file
//client.sendFile('somePath/file', 'destinationFolder/name', function(err) {});

// get a file
client.getFile('IT/file', 'destinationFolder/name', function(err) {

    console.log(err);
})