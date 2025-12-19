// WEB APPLICATION FOR TESTING LEAFLET MAPS USING HANDLEBARS TEMPLATES
// ===================================================================

// LIBRARIES
// ---------

// External libraries
// ------------------
const express = require('express');
const {engine} = require('express-handlebars');

// INITIALIZATION
// --------------

// Create an express app
const app = express();

// Define a TCP port to listen: read env or use 8080 in undefined
const PORT = process.env.PORT || 8080

// Set a folders for static files like css, images or icons
app.use(express.static('public'));
app.use('/images', express.static('public/images'));
app.use('/icons', express.static('public/icons'));

// Setup templating
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Setup URL parser to use extended option
app.use(express.urlencoded({extended: true}))

// ROUTES
// ------

// Route to home page
app.get('/', (req, res) => {
    res.render('index')
});

// Route to position page
app.get('/position', (req, res) => {

    // Simulated data from database or external API
    let lat = 60.4786
    let lon = 22.1636
    let position = {lat: lat, lon: lon}
    res.render('position', position)
});

// Route to map page
app.get('/map', (req, res) => {

    // Simulated data from database or external API
    let lat = 60.4786
    let lon = 22.1636
    let buildingId = 'EK3A'
    let data = {lat: lat, lon: lon, buildingId: buildingId}
    res.render('map', data)
});

// SERVER START
// ------------
app.listen(PORT)
console.log(`Server started on port ${PORT}`)