// lib.js
var lib = {
    square: function (x) {
    return x * x;
    },
    sum: function (a, b) {
    return a + b;
    }
    };
    module.exports = lib;

// main.js
var lib = require('./lib.js')
console.log(lib.square(5)); // 25
console.log(lib.sum(4, 3)); // 7

var http = require('http'); // 1 - Import Node.js core module;
var server = http.createServer(function (req,
res) {
// 2 - creating server
//handle incoming requests here..
});
server.listen(5000); //3 - listen for any incoming requests
console.log('Node.js web server at port 5000 is running..')

// server.js
var http = require('http'); // Import Node.js core module
var GreensKiosk = require('./GreensKiosk');

    // create web server
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
    }
    if (req.url == '/') { // check the URL of the current request
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // set response content
        res.write('<html><body><p>Greens Kiosk API.</p></body></html>');
        res.end();
    }
    else if (req.url == "/products") { // check the URL of the current request
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(GreensKiosk.getItems()));
        res.end();
    }
    else if (req.url == "/products/fruits") {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(GreensKiosk.getItems('fruits')));
        res.end();
    }
    else if (req.url == '/products/vegetables') {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(GreensKiosk.getItems('vegetables')))};
// GreensKiosk.js
let products = [
    {
    name: 'Mangoes',
    category: 'fruits'
    },
    {
    name: 'Apples',
    category: 'fruits'
    },
    {
    name: 'Bananas',
    category: 'fruits'
    },
    {
    name: 'Oranges',
    category: 'fruits'
    },
    {
    name: 'Grapes',
    category: 'fruits'
    },
    {
    name: 'Kales',
    category: 'vegetables'
    },
    {
    name: 'Onions',
    category: 'vegetables'
    },
    {
    name: 'Tomatoes',
    category: 'vegetables'
    },
    {
    name: 'Cabbages',
    category: 'vegetables'
    }];


function getItems(category) {
    if (category) {
        let filteredProducts = products.filter(item => {
            return item.category === category;
        });
        return filteredProducts;
    }
    return products;
    }
    
    GreensKiosk = {
    getItems: getItems
    };
    
    module.exports = GreensKiosk;
