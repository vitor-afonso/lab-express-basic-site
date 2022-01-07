//jshint esversion:8

const express = require('express');

// create server
const app = express();

// serve static files from the public directory
app.use(express.static('public'));

/************ ROUTES *************/

app.get('/home', (request, response, next) => {

    response.sendFile(__dirname + '/views/index.html');
});

app.get('/works', (request, response, next) => {

    response.sendFile(__dirname + '/views/works.html');
});

app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/photo-gallery.html');
});

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
});

//starts the server
app.listen(3000, () => console.log('Listening on port 3000'));