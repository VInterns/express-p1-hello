const express = require('express');
const mongoClient = require('mongodb').MongoClient;

// Create the express app
const server = express();

// connect to db
mongoClient.connect("mongodb://localhost:27017/", (err, db) => {

    if(err) {throw err}
    else{

        
        var database = db.db('vodafone-test');
        database.createCollection('interns', function(err, res){
            if (err) console.log("[-] Couldn't Create a Collection");
            else{
                console.log('[+] Collection Created');
                var myobj = [
                    { name: 'John', address: 'Highway 71'},
                    { name: 'Peter', address: 'Lowstreet 4'},
                    { name: 'Amy', address: 'Apple st 652'},
                    { name: 'Hannah', address: 'Mountain 21'},
                    { name: 'Michael', address: 'Valley 345'},
                    { name: 'Sandy', address: 'Ocean blvd 2'},
                    { name: 'Betty', address: 'Green Grass 1'},
                    { name: 'Richard', address: 'Sky st 331'},
                    { name: 'Susan', address: 'One way 98'},
                    { name: 'Vicky', address: 'Yellow Garden 2'},
                    { name: 'Ben', address: 'Park Lane 38'},
                    { name: 'William', address: 'Central st 954'},
                    { name: 'Chuck', address: 'Main Road 989'},
                    { name: 'Viola', address: 'Sideway 1633'}
                ];
                database.collection("interns").insertMany(myobj, (err) => {
                    if(err) console.log("[-] Couldn't Insert Object")
                    console.log("[+] Object Inserted");
                })
            }
        })
    }




})

// Setup the port
const PORT = 3000;


// Basic GET Router
server.get('/hello', (req, res) => {
    res.json({
        msg: "Hello All!"
    })
});

// Setup the server to run on the specified port
server.listen(PORT, () => {
    console.log(`[+] Server listening on port ${PORT}!`)
})