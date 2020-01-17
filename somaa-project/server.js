const express = require('express');

// Create the express app
const server = express();


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